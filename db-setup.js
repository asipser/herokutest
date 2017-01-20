var mongo = require('mongodb').MongoClient;

var dbConnectionUrl = 'mongodb://testuser:pass@ds117919.mlab.com:17919/heroku_n54n38l8';

var collections = {};

mongo.connect(dbConnectionUrl, function (err, db) {
  if (err) {
    console.log('Can not connect to MongoDB. Did you run it?');
    console.log(err.message);
    return;
  }

  collections.people = db.collection('users');
});


module.exports = collections;
