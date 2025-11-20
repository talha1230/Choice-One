# Deployment Guide

## Quick Start

This PSA presentation can be deployed in multiple ways:

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Production Build

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/talha1230/Choice-One/tree/main/examples/psa-slides)

1. Click the "Deploy" button above
2. Sign in to Vercel (or create an account)
3. Import the repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"
6. Your presentation will be live in minutes!

## Deploy to Netlify

1. Push this code to a GitHub repository
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Deploy!

## Static Export (Optional)

To generate a fully static version:

1. Add this to `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
   };
   ```

2. Build:
   ```bash
   npm run build
   ```

3. The static files will be in the `out` directory

4. Serve with any static host (GitHub Pages, Netlify, etc.)

## Environment Requirements

- Node.js 18.0 or later
- npm, yarn, or pnpm package manager

## Browser Compatibility

This presentation works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Keyboard Shortcuts

- **Right Arrow** or **Next Button**: Next slide
- **Left Arrow** or **Previous Button**: Previous slide

## Presentation Mode

For full-screen presentation mode, press **F11** in most browsers (or **Cmd+Ctrl+F** on Mac).

## Customization

To customize the presentation:

1. Edit `/app/page.tsx` to modify slides content
2. Adjust the `styles` object for different colors/spacing
3. Replace icons by modifying the SVG icon components
4. Change the gradient by updating the `container` background style

## Support

For issues or questions:
- Check the [README.md](./README.md) for basic information
- See [SLIDES_OVERVIEW.md](./SLIDES_OVERVIEW.md) for slide details
- Review the code in `/app/page.tsx` for implementation details

## Credits

Created by Talha Muhammad for MPU 2323 PSA
Built with Next.js and React
