// 1. Modify the "getImage" function to fetch an image by calling Unsplash API, https://source.unsplash.com/random
// 2. Print out a response returned from Unsplash API
// Bonus: Rewrite the code snippet using Promise

const API_URL = "https://source.unsplash.com/random";

function ImageAPI(url = "https://source.unsplash.com/random") {
  fetch(url).then((data) => console.log(data));
}

async function getImage() {
  await ImageAPI();
  await ImageAPI();
  await ImageAPI();
}

getImage();
