import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Serve HTML files from public/ in dev mode
// (Astro's dev server only routes src/pages/, this plugin
//  makes existing static HTML pages work during development)
function servePublicHtml() {
  return {
    name: 'serve-public-html',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        let urlPath = (req.url || '/').split('?')[0];
        if (urlPath === '/') urlPath = '/index.html';

        if (urlPath.endsWith('.html')) {
          const filePath = path.join(process.cwd(), 'public', urlPath);
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(fs.readFileSync(filePath, 'utf-8'));
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  site: 'https://pogoteams.app',
  integrations: [
    sitemap({
      customPages: [
        'https://pogoteams.app/',
        'https://pogoteams.app/support.html',
        'https://pogoteams.app/privacy.html',
      ],
    }),
  ],
  vite: {
    plugins: [servePublicHtml()],
  },
});
