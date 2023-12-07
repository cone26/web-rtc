const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const socket = new WebSocket(`ws://${window.location.host}`);
// open connection
socket.addEventListener("open", () => {
  console.log("Connected to Server !");
});

socket.addEventListener("message", (msg) => {
  console.log(`new message: ${msg.data}`);
});

socket.addEventListener("close", () => {
  console.log("The Connection is closed !");
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}
messageForm.addEventListener("submit", handleSubmit);
