const socket = new WebSocket(`ws://${window.location.host}`);
// open connection
socket.addEventListener("open", () => {
  console.log("Connected to Server !");
});

socket.addEventListener("message", (msg) => {
  console.log(msg.data);
});

socket.addEventListener("close", () => {
  console.log("The Connection is closed !");
});

setTimeout(() => {
  socket.send("I'm here !");
}, 5000);
