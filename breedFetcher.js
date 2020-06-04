const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let searchString = 'https://api.thecatapi.com/v1/breeds/search' + '?q=' + breedName;

  request(searchString, (error, response, body) => {

    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback(null, "Breed not found in database");
      } else {
        callback(null, data[0]['description']);
      }
    }

  });
};

module.exports = { fetchBreedDescription };