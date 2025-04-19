# Troubleshooting Guide for Intention Infoservice Website

This guide addresses known issues with the website and provides solutions to help resolve them.

## Build Issues

### React Context Error

**Issue**: During the build process, you may encounter this error:
```
TypeError: (0 , r.createContext) is not a function
```

**Possible Solutions**:

1. **Check React Version Compatibility**:
   - Ensure that the React version is compatible with Next.js 14.0.0
   - Try updating React and React DOM:
   ```bash
   npm install react@latest react-dom@latest
   ```

2. **Fix Component Issues**:
   - Make sure all client components have the `"use client"` directive at the top
   - Ensure server components do not use client-side hooks or context
   - Check for circular dependencies in component imports

3. **Clear Cache and Reinstall Dependencies**:
   ```bash
   rm -rf .next node_modules
   npm cache clean --force
   npm install
   ```

### Tailwind CSS Issues

**Issue**: Errors related to Tailwind CSS not being found or properly configured.

**Solution**:
1. Ensure you have the proper configuration files:
   - `postcss.config.js` (not `.mjs`)
   - `tailwind.config.js`

2. Make sure `globals.css` has the correct directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Check that all required packages are installed:
   ```bash
   npm install tailwindcss postcss autoprefixer
   ```

## Common Runtime Errors

### Image Optimization Issues

If you encounter issues with image optimization:

1. Ensure the Sharp package is installed:
   ```bash
   npm install sharp
   ```

2. Use proper Next.js Image component syntax:
   ```tsx
   import Image from 'next/image';
   
   <Image 
     src="/path/to/image.jpg" 
     alt="Description" 
     width={500} 
     height={300} 
   />
   ```

### Animation Performance Issues

If animations are causing performance issues:

1. Reduce animation complexity on mobile devices:
   ```tsx
   const isMobile = useMediaQuery('(max-width: 768px)');
   
   <motion.div
     initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: isMobile ? 0.3 : 0.5 }}
   >
     Content
   </motion.div>
   ```

2. Use the `whileFallback` prop for browsers that don't support animations:
   ```tsx
   <motion.div
     whileFallback={{ opacity: 1, y: 0 }}
     // other animation props
   >
     Content
   </motion.div>
   ```

## Deployment Issues

### Vercel Deployment

For deploying to Vercel:

1. Create a Vercel account if you don't have one
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Run the deployment command:
   ```bash
   vercel
   ```

### Netlify Deployment

For deploying to Netlify:

1. Create a `netlify.toml` file in the root directory:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy with:
   ```bash
   netlify deploy
   ```

## Browser Compatibility Issues

### Safari Flexbox Issues

If you encounter layout issues in Safari:

1. Add Safari-specific fixes to your CSS:
   ```css
   @supports (-webkit-touch-callout: none) {
     .safari-fix {
       /* Safari-specific styles */
     }
   }
   ```

### Internet Explorer Support

This website is not designed to support Internet Explorer. If IE support is required, consider:

1. Adding polyfills for modern JavaScript features
2. Using a service like [polyfill.io](https://polyfill.io)
3. Implementing fallback styles for CSS features not supported in IE

## Getting Help

If you continue to experience issues:

1. Check the Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
2. Search for solutions on Stack Overflow
3. Join the Next.js Discord community: [https://discord.gg/nextjs](https://discord.gg/nextjs)
4. Contact your development team for further assistance
