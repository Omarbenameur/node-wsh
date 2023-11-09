console.log("test");
const fs = require("fs");
console.log("start");
let data = fs.readFileSync("welcome.txt");
console.log(data);
console.log("finish");
