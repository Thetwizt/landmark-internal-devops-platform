const http = require('http');

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "unknown";
const NODE_ENV = process.env.NODE_ENV || "development";

const server = http.createServer((req, res) => {

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      status: "healthy",
      version: APP_VERSION
    }));
  }

  if (req.url === '/version') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      version: APP_VERSION,
      environment: NODE_ENV
    }));
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Landmark Internal Platform - Web App Running (v${APP_VERSION})\n`);
});

server.listen(PORT, () => {
  console.log(JSON.stringify({
    level: "info",
    message: "Server started",
    port: PORT,
    version: APP_VERSION,
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  }));
});