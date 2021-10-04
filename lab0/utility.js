const originalLog = console.log;
console.log = (message) => {
  const line = document.createElement("pre");
  line.innerText = `${new Date().toISOString()} >> ${message}`;
  document.getElementById("repl").appendChild(line);
  originalLog(message);
};
