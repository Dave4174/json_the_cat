const request = require('request');
const breed = process.argv[2];
let searchString = 'https://api.thecatapi.com/v1/breeds/search' + '?q=' + breed;

request(searchString, (error, response, body) => {
  // error = 'xxx';

  if (error) {
    console.log("We're sorry but there was an error with your request. Please deal with your sick obsession with cats at another time.");
    console.log("Error details:", error);
  } else {
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log("We don't have that breed listed in our database. Maybe you should take up another interest.");
    } else {
      console.log(data[0]['name'] + ':');
      console.log(`The breed is ${data[0]['description']}`);
    }
  }

});