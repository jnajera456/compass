import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';

const root = resolve('build');
const basePath = '/compass';
const port = 4173;

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

function sendFile(filePath, response) {
  response.writeHead(200, {
    'Content-Type':
      contentTypes[extname(filePath).toLowerCase()] ||
      'application/octet-stream',
  });
  const stream = createReadStream(filePath);
  stream.on('error', error => {
    console.error(`Failed to read ${filePath}:`, error);
    if (!response.headersSent) {
      response.writeHead(500);
    }
    response.end('Internal server error');
  });
  stream.pipe(response);
}

const server = createServer((request, response) => {
  let url;
  let pathname;

  try {
    url = new URL(request.url || '/', `http://127.0.0.1:${port}`);
    pathname = decodeURIComponent(url.pathname);
  } catch (error) {
    console.error('Invalid request path:', error);
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  if (pathname === basePath) {
    response.writeHead(302, { Location: `${basePath}/` });
    response.end();
    return;
  }

  if (!pathname.startsWith(`${basePath}/`)) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  const relativePath = pathname.slice(basePath.length + 1);
  let filePath = join(root, relativePath);

  if (!filePath.startsWith(`${root}${sep}`) && filePath !== root) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  }

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(root, 'index.html');
  }

  sendFile(filePath, response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving Compass at http://127.0.0.1:${port}${basePath}/`);
});

function shutdown() {
  server.close(error => {
    if (error) {
      console.error('Failed to close test server:', error);
      process.exitCode = 1;
    }
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
