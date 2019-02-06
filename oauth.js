var request = require('request');
var OAuth = require('oauth-1.0a');
var url = require('url');
var consumer = require("./etsy-consumer.json");


exports.getTemporaryCredentials = (callback) => {

  var oauth = new OAuth(consumer);
  var request_data = {
    url: 'https://openapi.etsy.com/v2/oauth/request_token?scope=transactions_r',
    method: 'POST',
    data: {
      oauth_callback: 'http://localhost:3000/allow-access-callback'
    }
  };
  request({
    url: request_data.url,
    method: request_data.method,
    form: oauth.authorize(request_data),
    json: true //parse respone as json 

  }, function (err, res, data) {
    data = decodeURIComponent(data.replace('login_url=', ''))
    console.log(data);
    callback(data);
  });
}

exports.getTokenCredentials = (oauth_token, oauth_token_secret, oauth_verifier, callback) => {
  var oauth = new OAuth(consumer);
  var request_data = {
    url: 'https://openapi.etsy.com/v2/oauth/access_token',
    method: 'POST',
    data: {
      oauth_verifier: oauth_verifier,
      oauth_token: oauth_token,
      oauth_token_secret: oauth_token_secret
    }
  };
  var token = {
    public: oauth_token,
    secret: oauth_token_secret
  }
  request({
    url: request_data.url,
    method: request_data.method,
    form: oauth.authorize(request_data, token)
  }, callback)
}

exports.getSomething = (url, oauth_token, oauth_token_secret, callback) => {
  var oauth = new OAuth(consumer);
  var request_data = {
    url: 'https://openapi.etsy.com/v2/' + url,//'https://openapi.etsy.com/v2/users/__SELF__',
    method: 'GET',
    data: {
     
      oauth_token: oauth_token,
      oauth_token_secret: oauth_token_secret
    }
  };
  var token = {
    public: oauth_token,
    secret: oauth_token_secret
  }
  request({
    url: request_data.url,
    qs: oauth.authorize(request_data, token),
    json: true
  }, callback);

}