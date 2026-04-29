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
  i18n: {
    locales: ['en', 'pl', 'de', 'ja'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Backward-compat for `/privacy.html`, `/support.html`, `/thanks.html` is
  // handled by literal meta-refresh files in `public/` — Astro's `redirects`
  // config emits `<url>/index.html` (a directory), which 404s on GitHub Pages
  // when the old app webview requests the URL without a trailing slash.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          pl: 'pl-PL',
          de: 'de-DE',
          ja: 'ja-JP',
        },
      },
      // Exclude the legacy `*.html` redirect files — only real pages
      // (which use directory format and end in `/`) belong in the sitemap.
      filter: (page) => !/\.html$/.test(page),
    }),
  ],
  vite: {
    plugins: [servePublicHtml()],
  },
});
