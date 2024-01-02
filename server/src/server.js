const http = require("http");
const app = require("./app");

// PORT NUMBER
const PORT = 9000;

// Creating server
const server = http.createServer(app);

// Listening server
server.listen(PORT, () => {
  console.log(`[server]: server is listening on ${PORT}`);
});
