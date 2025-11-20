# Deployment Guide for Buddy.work

This Laravel application requires both PHP (Composer) and Node.js (npm) dependencies to be installed and built. Follow these steps to configure your Buddy.work pipeline.

## Recommended SSH Commands for Each Deployment

After Buddy.work uploads the files to your server, run these commands in order:

### 1. Install PHP Dependencies
```bash
composer install --no-dev --optimize-autoloader --no-interaction
```
- `--no-dev`: Excludes development dependencies (recommended for production)
- `--optimize-autoloader`: Optimizes the autoloader for better performance
- `--no-interaction`: Prevents interactive prompts

### 2. Install Node.js Dependencies
```bash
npm ci --production=false
```
- `npm ci`: Clean install (faster and more reliable than `npm install`)
- `--production=false`: Includes devDependencies needed for the build process

### 3. Build Frontend Assets
```bash
npm run build
```
- Compiles TypeScript and builds production assets using Vite
- Outputs to `public/build/` directory

### 4. Create Storage Link (if not exists)
```bash
php artisan storage:link || true
```
- Creates symbolic link from `storage/app/public` to `public/storage`
- `|| true` prevents failure if link already exists

### 5. Run Database Migrations (Optional - use with caution)
```bash
php artisan migrate --force
```
- **⚠️ WARNING**: Only run this if you want automatic migrations on each deploy
- Consider running migrations manually or through a separate pipeline action
- `--force`: Required for production environments

### 6. Clear and Cache Configuration
```bash
php artisan config:clear && php artisan config:cache
php artisan route:clear && php artisan route:cache
php artisan view:clear && php artisan view:cache
```
- Clears old caches and rebuilds them for better performance
- Essential for production deployments

### 7. Restart Queue Workers (Laravel Horizon)
```bash
php artisan horizon:terminate
```
- Gracefully restarts Laravel Horizon queue workers
- Ensures workers pick up new code changes

## Complete Deployment Script

Here's a complete script you can use in Buddy.work:

```bash
# Navigate to project directory (adjust path as needed)
cd /path/to/your/project || exit 1

# Install PHP dependencies
composer install --no-dev --optimize-autoloader --no-interaction

# Install Node.js dependencies
npm ci --production=false

# Build frontend assets
npm run build

# Create storage link
php artisan storage:link || true

# Clear and cache Laravel caches
php artisan config:clear && php artisan config:cache
php artisan route:clear && php artisan route:cache
php artisan view:clear && php artisan view:cache

# Restart queue workers
php artisan horizon:terminate
```

## Optional: Database Migrations

If you want to run migrations automatically (recommended only if you're confident):

```bash
# Add this after step 4, before step 5:
php artisan migrate --force
```

## Environment Setup

**Important**: Make sure your `.env` file is properly configured on the server with:
- Database credentials
- Queue driver settings (if using queues)
- Redis configuration (if using Redis)
- App URL and other environment-specific settings

**Note**: The `.env` file should NOT be committed to git (it's in `.gitignore`). You'll need to create/configure it manually on your server.

## First-Time Setup Commands

For the very first deployment, you may also need:

```bash
# Generate application key (if not set)
php artisan key:generate --force

# Publish Horizon assets (if not already done)
php artisan horizon:publish
```

## Troubleshooting

### If composer fails:
- Ensure PHP 8.0+ is installed
- Check that `composer` is available in PATH

### If npm build fails:
- Ensure Node.js 16+ is installed
- Check that `npm` is available in PATH
- Verify all dependencies are compatible

### If storage link fails:
- Ensure proper permissions on `storage/` and `public/` directories
- Check that web server user has write access

### If Horizon restart fails:
- Ensure Horizon is properly configured in your `.env`
- Check that Redis/database queue connection is working
- Verify Horizon supervisor configuration (if using supervisor)

## Performance Tips

1. **Use `npm ci` instead of `npm install`** - Faster and more reliable for CI/CD
2. **Cache Composer dependencies** - Buddy.work may support caching vendor directory
3. **Cache node_modules** - Buddy.work may support caching node_modules directory
4. **Only build assets when needed** - Consider skipping build if only backend files changed

