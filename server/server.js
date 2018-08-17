/* eslint-disable */
const express = require('express');
const mongodb = require('mongodb');
const app = express();

const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect("mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge", (err, database) => {
    if(err) return console.error(err);

    db = database.db();
    
});

app.get("/turner", function(req, res, next) {
    db.collection("Titles").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(result));
        res.end();
    });
});

app.use(function(err, req, res){
   console.log('handle error here.  For example, logging and returning a friendly error page');
});

app.listen(process.env.PORT || 5000, () => {
    console.log('dev server listening on port 5000');
});
