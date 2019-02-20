const express = require('express');
const oauth = require('./oauth');
const db = require('./db');
var url = require('url');
var cookies = require('cookies')
const app = express();
const port = 3000;
var oauth_token_secret;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/connect', function (req, res) {
  oauth.getTemporaryCredentials(function (data) {
    db.getUser().oauth_token_secret = url.parse(data, true).query.oauth_token_secret;
    res.redirect(decodeURIComponent(data));
  });
});

app.get('/allow-access-callback', function (req, res1) {

  oauth.getTokenCredentials(
    req.query.oauth_token,
    db.getUser().oauth_token_secret, //cookies1.get('oauth_token_secret'), 
    req.query.oauth_verifier,
    function (err, res, data) {
      // oauth_token=xxx&oauth_token_secret=xxx
      db.getUser().oauth_token = data.split('&')[0].split('=')[1];
      db.getUser().oauth_token_secret = data.split('&')[1].split('=')[1];
      res1.sendFile(__dirname + '/success.html');

    })
});

app.get('/transactions', function (req, res) {
  //'shops/:shop_id/transactions'
    oauth.getSomething(
      'shops/zachietsytest/transactions',
      db.getUser().oauth_token,
      db.getUser().oauth_token_secret,
      function (err, res1, data) {
        var t = 0;
        res.json(data);
      })
}) 

app.get('/listings', function (req, res) {
  //'shops/:shop_id/transactions'
    oauth.getSomething(
      '/shops/zachietsytest/listings/active',
      db.getUser().oauth_token,
      db.getUser().oauth_token_secret,
      function (err, res1, data) {
        var t = 0;
        res.json(data);
      })
})

app.get('/shops', function (req, res) {
  //'shops/:shop_id/transactions'
    oauth.getSomething(
      'shops/zachietsytest',
      db.getUser().oauth_token,
      db.getUser().oauth_token_secret,
      function (err, res1, data) {
        var t = 0;
        res.json(data);
      })
}) 

app.get('/user', function (req, res) {
  //'shops/:shop_id/transactions'
    oauth.getSomething(
      'users/__SELF__',
      db.getUser().oauth_token,
      db.getUser().oauth_token_secret,
      function (err, res1, data) {
        var t = 0;
        res.json(data);
      })
}) 

app.get('/user-shops', function (req, res) {
  //'shops/:shop_id/transactions'
    oauth.getSomething(
      'users/__SELF__/shops',
      db.getUser().oauth_token,
      db.getUser().oauth_token_secret,
      function (err, res1, data) {
        var t = 0;
        res.json(data);
      })
}) 
