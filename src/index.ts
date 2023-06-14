import http from "http";

const server = http.createServer((req: any, res: any) => {
  console.log({ res, req });
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
