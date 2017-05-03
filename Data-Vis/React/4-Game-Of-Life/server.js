/**
 * Created by manishgiri on 5/2/17.
 */

var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('public'));
app.listen(3000, function () {
    console.log("Express server is up on port 3000");
});

