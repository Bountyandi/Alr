import express from 'express';
import path from 'path';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import isUrl from 'is-url'


import request from 'request'
import cheerio from 'cheerio'

const PORT = 3000;

const PUBLIC_PATH = __dirname + '/public';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://127.0.0.1/allerdb';

// ---------------------------- Webpack
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
else {
  app.use(express.static(PUBLIC_PATH));
}
// ---------------------------- /Webpack


mongodb.MongoClient.connect(dbUrl, function(err, db) {

  app.get('/api/article/*', function(req, res) {
    let url = req.params[0];

    if (isUrl(url)) {
      let parsedResult = parsePage(url);

      parsedResult
        .then((data) => {
          data.articleUrl = url;
          res.json(data);
      })
        .catch((err)  => console.log(err))

    } else {

      res
        .status(409)
        .send('Please add valid URL')

    }
  });

  app.post('/api/paragraphs/', function(req, res){
    //isApproved
    console.log('GET')

    const { articleUrl, originalText, usersText } = req.body;

    db.collection('paragraphs').insert({ articleUrl, originalText, usersText }, (err, result) => {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong" }});
      } else {
        res.json({ paragraph: result.ops[0]})
      }
    })

  });

  app.get('/api/paragraphs/', function(req, res) {

    db.collection('paragraphs').find({}).toArray((err, paragraphs) => {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong" }});
      } else {
        res.json({ paragraphs });
      }
    })

  });

  app.put('/api/paragraphs/setApproved/', function(req, res){

    const { _id, isApproved } = req.body;

    db.collection('paragraphs').update(
      { _id: _id },
      { $set: { isApproved: isApproved } },
      (err, result) => {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong" }});
      } else {
        res.json({ _id });
      }
    })

  });


  app.put('/api/article/', function(req, res){
    const { _id, isApproved } = req.body;

    db.collection('paragraphs').update(
      { _id },
      { $set: { isApproved } },
      (err, result) => {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong" }});
      } else {
        res.json({ paragraph: result.ops[0]})
      }
    })
  });

});


app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});

function parsePage(url){
  if (!url) { return }
  let promise = new Promise(function(resolve, reject) {

    request(
      url,
      function(err, res, page) {
        let $ = cheerio.load(page);
        let pArray = $( 'p' ).toArray();
        let title = $( 'title' ).text();
        let paragraphs = [];

        for (let item of pArray) {
          paragraphs.push($(item).text());
        }

        resolve({ title, paragraphs });
      }
    )
  });

  return promise
}

function parseHandler(err, res, page){
  let $ = cheerio.load(page);
  let pArray = $( 'p' ).toArray();
  let title = $( 'title' ).text();
  let paragraphs = [];

  for (let item of pArray) {
    paragraphs.push($(item).text());
  }

  return { title, paragraphs }
}
