const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const root = path.join(__dirname, "out");
const port = 8080;
const url = `http://localhost:${port}/`;

if (!fs.existsSync(path.join(root, "index.html"))) {
  console.error("Missing out/index.html. Build the static site first.");
  process.exit(1);
}

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function safePathFromUrl(requestUrl) {
  const parsed = new URL(requestUrl, url);
  let pathname = decodeURIComponent(parsed.pathname);

  if (pathname === "/") {
    pathname = "/index.html";
  }

  const localPath = path.normalize(path.join(root, pathname));
  if (!localPath.startsWith(root)) {
    return null;
  }

  return localPath;
}

const server = http.createServer((req, res) => {
  let localPath = safePathFromUrl(req.url || "/");

  if (!localPath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("403 Forbidden");
    return;
  }

  if (fs.existsSync(localPath) && fs.statSync(localPath).isDirectory()) {
    localPath = path.join(localPath, "index.html");
  }

  if (!fs.existsSync(localPath) || !fs.statSync(localPath).isFile()) {
    const fallbackPath = path.join(root, "404.html");
    if (fs.existsSync(fallbackPath)) {
      localPath = fallbackPath;
      res.statusCode = 404;
    } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
      return;
    }
  }

  const ext = path.extname(localPath).toLowerCase();
  const contentType = contentTypes[ext] || "application/octet-stream";

  res.setHeader("Content-Type", contentType);
  fs.createReadStream(localPath).pipe(res);
});

server.listen(port, () => {
  console.log("");
  console.log("Taiwan Buy Way site is running.");
  console.log(url);
  console.log("Close this window to stop the server.");
  console.log("");

  if (process.platform === "win32") {
    exec(`start "" "${url}"`);
  }
});

server.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});
