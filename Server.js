
const express = require('express');
const auth = require('./Autentica');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/autentica', async (req, res) => {    
  var ret = await auth(req.body);
  res.send("Ok");
});

app.listen(3001);