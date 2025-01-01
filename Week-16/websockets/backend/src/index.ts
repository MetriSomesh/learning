import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async function (socket) {
  console.log("User connected");
  //   setInterval(() => {
  //     socket.send("Current price of sol is: " + Math.random());
  //   }, 1000);
  // socket.send("Current price of sol is: " + Math.random());

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
wss.on("error", async function () {});
