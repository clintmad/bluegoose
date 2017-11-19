var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var uri = "mongodb://user:user1@honolulu-shard-00-00-kzhox.mongodb.net:27017,honolulu-shard-00-01-kzhox.mongodb.net:27017,honolulu-shard-00-02-kzhox.mongodb.net:27017/honolulu?ssl=true&replicaSet=Honolulu-shard-0&authSource=admin";

MongoClient.connect(uri, (err, db) => {
    assert.equal(null, err);

    router.get('/', (req, res) => {
        db.collection('ship').find({}).toArray((err, docs) => {
            res.json(docs);
        });
    });
});

module.exports = router;
