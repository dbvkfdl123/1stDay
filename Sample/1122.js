var os = require('os');

console.log("HostName: ", os.hostname);
console.log("Memory: %d / %d", os.freemem(), os.totalmem());
console.log("CPU Info ---");
console.dir(os.cpus());
console.log("Network interface ---");
console.dir(os.networkInterfaces());

var d = new Date();
console.log("Date: %s", d);