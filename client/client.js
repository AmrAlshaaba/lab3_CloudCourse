
const axios = require('axios')

const data = {
  data: "O Hi this a test Car River Deer Car Bear and"
};

axios.post('https://amralshaaba-server-lab3.herokuapp.com/', data)
  .then((res) => {
    console.log(data);
    console.log(console.table(res.data));

  }).catch((err) => {
    console.error(err)
  });