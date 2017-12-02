var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db = {};
var uri = "mongodb://user:user1@honolulu-shard-00-00-kzhox.mongodb.net:27017,honolulu-shard-00-01-kzhox.mongodb.net:27017,honolulu-shard-00-02-kzhox.mongodb.net:27017/honolulu?ssl=true&replicaSet=Honolulu-shard-0&authSource=admin";

var response = {
    status: 200,
    data: [],
    message: null
};

router.get('/', (req, res) => {
    db.collection('awards').find({}).toArray().then((awards) => {
        response.data = awards;
        res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    });
});

MongoClient.connect(uri, (err, dbClient) => {
    if(err) {return console.log(err)}
    db = dbClient
});

module.exports = router;