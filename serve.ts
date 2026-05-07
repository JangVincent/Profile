#!/usr/bin/env bun
/**
 * Tiny static server for local dev — solves the file:// CORS issue
 * when index.html fetches profile.json.
 *
 * Usage:
 *   bun serve.ts             # starts on http://localhost:3000
 *   bun serve.ts --port 8080 # custom port
 *   bun serve.ts --open      # auto-open in browser
 */

import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const portArgIdx = args.indexOf('--port');
const port = portArgIdx >= 0 ? Number(args[portArgIdx + 1]) : 3000;
const shouldOpen = args.includes('--open');

const root = resolve(import.meta.dir);

const MIME: Record<string, string> = {
  html: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  woff: 'font/woff',
  woff2: 'font/woff2',
};

const server = Bun.serve({
  port,
  development: true,
  async fetch(req) {
    const url = new URL(req.url);
    let path = decodeURIComponent(url.pathname);
    if (path === '/' || path === '') path = '/index.html';

    const filePath = join(root, path);
    if (!filePath.startsWith(root) || !existsSync(filePath)) {
      return new Response(`404 Not Found: ${path}`, { status: 404 });
    }

    const ext = path.split('.').pop()?.toLowerCase() ?? '';
    const contentType = MIME[ext] ?? 'application/octet-stream';

    return new Response(Bun.file(filePath), {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
      },
    });
  },
});

const url = `http://localhost:${server.port}`;
console.log(`▶ Serving ${root}`);
console.log(`▶ ${url}`);

if (shouldOpen) {
  Bun.spawn(['open', url]);
}
