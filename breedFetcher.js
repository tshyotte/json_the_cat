const https = require('https');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let searchBreed = process.argv.slice(2)[1];
let searchUrl = `${process.argv.slice(2)[0]}?q=${searchBreed}`;

https.get(searchUrl, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (body) => {
    data += body;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
rl.close();
