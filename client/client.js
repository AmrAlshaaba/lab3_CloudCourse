// Importing express module to create a web server called app
const express = require('express')
// Importing path module for handling and transforming file paths
const path = require("path")
// Creating web server 
const app = express()
// Importing library to make HTTP requests from node. js 
//or XMLHttpRequests from the browser
const axios = require('axios')
// The Port that web server should start on
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log('Listening on http://localhost:' + port));

// Setting the pathes to web server that we made to use 
app.set('views', path.join(__dirname, "view"));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const response = await axios.post('https://amralshaaba-server-lab3.herokuapp.com/', { data: "O Hi this a test Car River Deer Car Bear and" });
  const word = response.data;
  //console.log(wf)
  res.render("index", {
    l1: 1, n1: word[1],
    l2: 2, n2: word[2],
    l3: 3, n3: word[3],
    l4: 4, n4: word[4],
    l5: 5, n5: word[5],
    l6: 6, n6: word[6],
    l7: 7, n7: word[7],
    l8: 8, n8: word[8],
    l9: 9, n9: word[9],
    l10: 10, n10: word[10],

  });
})