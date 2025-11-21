#!/bin/bash
set -e  # Exit on error

# Navigate to project directory (adjust path as needed)
cd /path/to/your/project || exit 1

# Install PHP dependencies
composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# Check if npm is available
if ! command -v npm >/dev/null 2>&1; then
    echo "Error: npm is not installed or not in PATH"
    exit 1
fi

# Install Node.js dependencies
if [ -f "package-lock.json" ]; then
    npm ci
else
    echo "Warning: package-lock.json not found, using npm install"
    npm install
fi

# Verify node_modules/.bin exists
if [ ! -d "node_modules/.bin" ]; then
    echo "Error: node_modules/.bin directory not found"
    exit 1
fi

# Build frontend assets
export NODE_OPTIONS=--max-old-space-size=4096
npm run build

# Laravel optimization commands (make them non-fatal)
set +e  # Don't exit on error for the following commands

php artisan storage:link 2>/dev/null || echo "Note: storage:link skipped"
php artisan config:clear 2>/dev/null || true
php artisan config:cache 2>/dev/null || echo "Note: config:cache skipped"
php artisan route:clear 2>/dev/null || true
php artisan route:cache 2>/dev/null || echo "Note: route:cache skipped"
php artisan view:clear 2>/dev/null || true
php artisan view:cache 2>/dev/null || echo "Note: view:cache skipped"
php artisan horizon:terminate 2>/dev/null || echo "Note: horizon:terminate skipped"

set -e  # Re-enable exit on error

echo "Deployment completed successfully"

