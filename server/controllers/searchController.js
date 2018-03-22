const axios = require('axios');

const searchController = {
  getPage: (req, res) => {
    console.log('search controller');
    const baseUrl = 'https://en.wikipedia.org/w/api/php?';
    options = {
      method: 'Get',
      url: baseUrl,
      dataType: 'json'
      
    }
    //axios(options)
    axios.get('https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&suggest=true&search=monty+python&format=json')
    .then(data => {
      console.log('Request success', data.data);
      res.send(data.data);
    })
    .catch((err) => {
      console.log('Wiki search failed, Error:', err)
      res.sendStatus(500);
    })
  }
}
module.exports = searchController;