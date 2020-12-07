

const {fetchDescription} = require('./breedFetcher');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let searchBreed = process.argv.slice(2)[1];
let searchUrl = `${process.argv.slice(2)[0]}?q=${searchBreed}`;

fetchBreedDescription(searchBreed, searchUrl);
rl.close();