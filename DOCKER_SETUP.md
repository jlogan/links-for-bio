# Docker Setup Guide for LinksForBio

This guide will help you set up the Laravel application to run locally using Docker, connecting to the remote production database.

## Quick Start (Recommended)

The easiest way to get started is using the automated installation script:

```bash
chmod +x docker-start.sh
./docker-start.sh
```

The script will:
- ✅ Check Docker installation
- ✅ Prompt for local domain and port
- ✅ Add hosts entry automatically
- ✅ Build and start containers
- ✅ Install all dependencies
- ✅ Configure Laravel
- ✅ Set proper permissions

**That's it!** The script handles everything for you.

## Prerequisites

- **Docker Desktop** or **Docker Engine** with Docker Compose installed
- Access to the production `.env` file (or use `env.example` as a template)

## Manual Setup (Alternative)

If you prefer to set up manually or the script doesn't work for your system:

### 1. Add hosts entry

Add the following line to your `/etc/hosts` file:

```
127.0.0.1    linksforbio.local
```

On macOS/Linux, you can do this by running:
```bash
sudo sh -c 'echo "127.0.0.1    linksforbio.local" >> /etc/hosts'
```

### 2. Configure .env file

Download the `.env` file from your production server and place it in the `links-for-bio` directory, or copy from `env.example`:

```bash
cp env.example .env
```

**Important:** Update the following variables in your `.env` file for local development:

- `APP_ENV=local`
- `APP_DEBUG=true`
- `APP_URL=http://linksforbio.local:8080` (include the port!)
- `DB_HOST` - Set this to your production database host (ensure it's accessible from your local machine)
- `DB_PORT` - Your production database port (usually 3306)
- `DB_DATABASE` - Your production database name
- `DB_USERNAME` - Your production database username
- `DB_PASSWORD` - Your production database password

**⚠️ Important:** Make sure your production database allows connections from your local IP address, or use an SSH tunnel if required.

### 3. Build and start the containers

```bash
docker compose build
docker compose up -d
```

### 4. Install dependencies

```bash
docker exec linksforbio composer install
docker exec linksforbio npm install
```

### 5. Set up Laravel

```bash
# Set permissions
docker exec linksforbio chmod -R 775 storage bootstrap/cache
docker exec linksforbio chown -R www-data:www-data storage bootstrap/cache

# Create storage logs directory
docker exec linksforbio mkdir -p storage/logs
docker exec linksforbio chmod -R 775 storage/logs

# Clear caches
docker exec linksforbio php artisan config:clear
docker exec linksforbio php artisan cache:clear

# Create storage link
docker exec linksforbio php artisan storage:link
```

## Accessing the Application

Once everything is set up, you can access the application at:

**http://linksforbio.local:8080**

(Or whatever domain and port you configured)

## Useful Docker Commands

### View logs
```bash
docker compose logs -f linksforbio
```

### Execute commands in the container
```bash
docker exec -it linksforbio bash
docker exec -it linksforbio php artisan [command]
docker exec -it linksforbio composer [command]
docker exec -it linksforbio npm [command]
```

### Stop containers
```bash
docker compose down
```

### Stop and remove volumes (clean slate)
```bash
docker compose down -v
```

### Rebuild containers
```bash
docker compose build --no-cache
docker compose up -d
```

### Restart containers
```bash
docker compose restart
```

## Development Workflow

### Running Frontend Development Server

For hot-reload during frontend development:

```bash
docker exec -it linksforbio npm run dev
```

This will start Vite's development server with hot module replacement.

### Building Frontend Assets

To build production-ready frontend assets:

```bash
docker exec linksforbio npm run build
```

## Troubleshooting

### Container Won't Start

Check the logs:
```bash
docker compose logs linksforbio
```

Common issues:
- Port already in use: Change the port in `docker-compose.yml`
- Docker not running: Start Docker Desktop
- Insufficient resources: Increase Docker's memory allocation

### Database Connection Issues

If you're having trouble connecting to the remote database:

1. Verify your database credentials in the `.env` file
2. Ensure your production database allows connections from your IP address
3. If using a firewall, you may need to whitelist your IP
4. Consider using an SSH tunnel if direct connections aren't allowed

### Permission Issues

If you encounter permission errors:

```bash
docker exec linksforbio chmod -R 775 storage bootstrap/cache
docker exec linksforbio chown -R www-data:www-data storage bootstrap/cache
```

### Port Already in Use

The default configuration uses port 8080 to avoid conflicts. If port 8080 is also in use:

1. Edit `docker-compose.yml` and change the port mapping:
   ```yaml
   ports:
     - "8080:80"  # Change 8080 to any available port
   ```

2. Update `APP_URL` in `.env` to match:
   ```
   APP_URL=http://linksforbio.local:[your-port]
   ```

3. Restart containers:
   ```bash
   docker compose down
   docker compose up -d
   ```

### Blank Page After Setup

If you see a blank page:

1. Check that `APP_URL` in `.env` includes the port: `http://linksforbio.local:8080`
2. Clear Laravel caches:
   ```bash
   docker exec linksforbio php artisan config:clear
   docker exec linksforbio php artisan cache:clear
   ```
3. Check browser console for JavaScript errors
4. Verify assets are loading: Check Network tab in browser dev tools

## Project Structure

```
links-for-bio/
├── docker/                    # Docker configuration files
│   ├── nginx/
│   │   └── default.conf       # Nginx server configuration
│   └── supervisor/
│       └── supervisord.conf   # Supervisor configuration
├── Dockerfile                 # Docker image definition
├── docker-compose.yml         # Docker Compose configuration
├── docker-start.sh           # Automated setup script
├── .dockerignore             # Files to exclude from Docker build
└── DOCKER_SETUP.md           # This file
```

## Notes

- The container is named `linksforbio` as requested
- No local database is included - all database connections go to your production database
- Redis and Meilisearch are included for caching and search functionality
- The application runs PHP 8.2 with all required extensions (PDO, MySQL, Redis, GD, Zip, FTP, etc.)
- Nginx serves the application on port 80 inside the container, mapped to port 8080 (or your chosen port) on your host
- Supervisor manages both PHP-FPM and Nginx processes

## Multiple Computers Setup

This Docker setup is designed to work consistently across multiple computers:

1. Clone the repository on each computer
2. Run `./docker-start.sh` on each machine
3. The script will prompt for any necessary configuration
4. Each computer can use different ports if needed (just specify when prompted)

The only thing you need to ensure is that:
- Each computer has the `.env` file with correct database credentials
- Each computer uses a unique port if running multiple instances simultaneously
