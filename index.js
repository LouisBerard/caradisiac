const express        = require('express');
const app            = express();
const port = 9292;



//populate
const {getModels} = require('node-car-api');

var json = '';
var id = 0;
var fs = require('fs');
async function print () {
  const models = await getModels('AUDI');
  models.forEach(function(element){
    json += '{ "index":{ "_id": "'+id+'"} }\n';
    json += JSON.stringify(element);
    json += '\n';
    id++;
  });
  console.log(json);
fs.writeFile("resultat.json", json, function(err) {
    if (err) {
        console.log(err);
    }
});
}

//routes
app.get('/populate', (req, res) => {
  res.send('Hello')
});

app.get('/suv', (req, res) => {
  res.send('Hello')
});

//listen ports
app.listen(port, () => {
  console.log('We are live on ' + port);
});
