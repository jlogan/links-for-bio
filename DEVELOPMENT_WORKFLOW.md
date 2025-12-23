# Development Workflow Guide

## Fast Development with Hot Reloading

Instead of running `npm run build` (which takes 10+ minutes), use the development server for instant changes:

### Start Development Server

```bash
docker exec -it linksforbio npm run dev
```

This will:
- Start Vite's development server with hot module replacement
- Watch for file changes and automatically reload
- Show changes instantly (no 10+ minute wait!)
- Run on port 5173 by default

### Access Development Site

Once the dev server is running, you can access it at:
- **http://linksforbio.local:5173** (or check the terminal output for the exact port)

### When to Use Each Command

- **`npm run dev`** - Use this during active development. Changes appear instantly!
- **`npm run build`** - Only use this when you're ready to test the production build or deploy

### Tips

1. Keep the dev server running in a separate terminal window
2. Make your changes to React/TypeScript files
3. Save the file - changes appear automatically in your browser
4. Only run `npm run build` when you need to test the final production build

## File Locations

### Logo
Place your logo PNG file at:
```
public/images/logo.png
```

### Favicon
Place your favicon files at:
```
public/favicon/icon-144x144.png  (for regular favicon)
public/favicon/icon-192x192.png  (for Apple touch icon)
```

If the `favicon` directory doesn't exist, create it:
```bash
mkdir -p public/favicon
```

Then copy your favicon files there.


