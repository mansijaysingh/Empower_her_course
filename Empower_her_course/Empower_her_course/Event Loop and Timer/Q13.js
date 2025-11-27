const intervalId = setInterval(function() {
  console.log("Loading...");
}, 1000);

setTimeout(function() {
  clearInterval(intervalId);
  console.log("Loaded successfully!");
}, 5000);