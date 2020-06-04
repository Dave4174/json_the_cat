const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("We're sorry but there was a problem with your request. Please deal with your sick obsession with cats at another time.");
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});