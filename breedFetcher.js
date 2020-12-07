const https = require('request');


  const fetchBreedDescription = function(breedName, callback) {
  https.get("https://vcahospitals.com/know-your-pet/cat-breeds/siberian", (resp) => {
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

};


module.exports = { fetchBreedDescription };