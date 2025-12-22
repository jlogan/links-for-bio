#!/bin/bash

# Docker Installation Script for LinksForBio
# This script automates the Docker setup process for local development

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Detect docker compose command (V2 uses 'docker compose', V1 uses 'docker-compose')
if docker compose version > /dev/null 2>&1; then
    DOCKER_COMPOSE="docker compose"
elif docker-compose version > /dev/null 2>&1; then
    DOCKER_COMPOSE="docker-compose"
else
    echo -e "${RED}❌ Error: Neither 'docker compose' nor 'docker-compose' found!${NC}"
    echo "Please install Docker Desktop or Docker Compose."
    exit 1
fi

echo -e "${BLUE}🚀 LinksForBio Docker Setup${NC}"
echo "================================"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Docker is not running!${NC}"
    echo "Please start Docker Desktop and try again."
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  Warning: .env file not found!${NC}"
    echo ""
    echo "You need to provide a .env file. Options:"
    echo "  1. Download from production server"
    echo "  2. Copy from env.example (you'll need to configure it manually)"
    echo ""
    read -p "Do you want to copy from env.example? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if [ -f env.example ]; then
            cp env.example .env
            echo -e "${GREEN}✅ Created .env from env.example${NC}"
            echo -e "${YELLOW}⚠️  Remember to configure your database credentials!${NC}"
        else
            echo -e "${RED}❌ env.example not found!${NC}"
            exit 1
        fi
    else
        echo "Please add a .env file and run this script again."
        exit 1
    fi
fi

# Prompt for local domain (default: linksforbio.local)
read -p "Enter local domain name [linksforbio.local]: " LOCAL_DOMAIN
LOCAL_DOMAIN=${LOCAL_DOMAIN:-linksforbio.local}

# Prompt for port (default: 8080)
read -p "Enter port number [8080]: " PORT
PORT=${PORT:-8080}

# Update APP_URL in .env if it doesn't match
CURRENT_APP_URL=$(grep "^APP_URL=" .env | cut -d '=' -f2- || echo "")
EXPECTED_APP_URL="http://${LOCAL_DOMAIN}:${PORT}"

if [ "$CURRENT_APP_URL" != "$EXPECTED_APP_URL" ]; then
    echo ""
    echo -e "${YELLOW}Updating APP_URL in .env to: ${EXPECTED_APP_URL}${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s|^APP_URL=.*|APP_URL=${EXPECTED_APP_URL}|" .env
    else
        # Linux
        sed -i "s|^APP_URL=.*|APP_URL=${EXPECTED_APP_URL}|" .env
    fi
fi

# Update docker-compose.yml port if needed
CURRENT_PORT=$(grep -A 1 "ports:" docker-compose.yml | grep -o '[0-9]*:80' | cut -d ':' -f1 || echo "8080")
if [ "$CURRENT_PORT" != "$PORT" ]; then
    echo -e "${YELLOW}Updating port in docker-compose.yml to: ${PORT}${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s|\"${CURRENT_PORT}:80\"|\"${PORT}:80\"|" docker-compose.yml
    else
        sed -i "s|\"${CURRENT_PORT}:80\"|\"${PORT}:80\"|" docker-compose.yml
    fi
fi

# Add hosts entry if it doesn't exist
if ! grep -q "$LOCAL_DOMAIN" /etc/hosts; then
    echo ""
    echo -e "${BLUE}📝 Adding ${LOCAL_DOMAIN} to /etc/hosts...${NC}"
    echo "This requires sudo privileges."
    sudo sh -c "echo '127.0.0.1    ${LOCAL_DOMAIN}' >> /etc/hosts"
    echo -e "${GREEN}✅ Added to /etc/hosts${NC}"
else
    echo -e "${GREEN}✅ ${LOCAL_DOMAIN} already in /etc/hosts${NC}"
fi

# Build and start containers
echo ""
echo -e "${BLUE}🔨 Building Docker containers...${NC}"
$DOCKER_COMPOSE build

echo ""
echo -e "${BLUE}🚀 Starting containers...${NC}"
$DOCKER_COMPOSE up -d

# Wait for containers to be ready
echo ""
echo -e "${BLUE}⏳ Waiting for containers to be ready...${NC}"
sleep 5

# Check if container is running
if ! docker ps | grep -q linksforbio; then
    echo -e "${RED}❌ Container failed to start!${NC}"
    echo "Check logs with: $DOCKER_COMPOSE logs linksforbio"
    exit 1
fi

# Install dependencies
echo ""
echo -e "${BLUE}📦 Installing PHP dependencies...${NC}"
docker exec linksforbio composer install --no-interaction --no-dev --optimize-autoloader || docker exec linksforbio composer install --no-interaction

echo ""
echo -e "${BLUE}📦 Installing Node.js dependencies...${NC}"
docker exec linksforbio npm install

# Set permissions
echo ""
echo -e "${BLUE}🔐 Setting permissions...${NC}"
docker exec linksforbio chmod -R 775 storage bootstrap/cache 2>/dev/null || true
docker exec linksforbio chown -R www-data:www-data storage bootstrap/cache 2>/dev/null || true

# Create storage logs directory
docker exec linksforbio mkdir -p storage/logs
docker exec linksforbio chmod -R 775 storage/logs
docker exec linksforbio chown -R www-data:www-data storage/logs

# Clear caches
echo ""
echo -e "${BLUE}🧹 Clearing caches...${NC}"
docker exec linksforbio php artisan config:clear || true
docker exec linksforbio php artisan cache:clear || true
docker exec linksforbio php artisan route:clear || true
docker exec linksforbio php artisan view:clear || true

# Create storage link if it doesn't exist
echo ""
echo -e "${BLUE}🔗 Creating storage link...${NC}"
docker exec linksforbio php artisan storage:link || true

# Final summary
echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🌐 Access your application at:${NC}"
echo -e "   ${BLUE}http://${LOCAL_DOMAIN}:${PORT}${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Useful commands:"
echo "  View logs:        $DOCKER_COMPOSE logs -f linksforbio"
echo "  Enter container: docker exec -it linksforbio bash"
echo "  Stop containers: $DOCKER_COMPOSE down"
echo "  Restart:         $DOCKER_COMPOSE restart"
echo ""
echo -e "${YELLOW}⚠️  Remember to configure your database credentials in .env${NC}"
echo ""
