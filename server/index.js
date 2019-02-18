const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://ebird.org/view/checklist/S39218537';

function init(url) {
  axios
    .get(url, {
      withCredentials: true,
      headers: { 'cache-control': 'no-cache' }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

init(url);
