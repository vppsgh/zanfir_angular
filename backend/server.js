var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

var messages = [{text : "some text", owner : "s_vova"}, {text : "another text", owner : "s_vovan"}];

var api = express.Router();

api.get('/messages', (req, res) => {
    res.send(messages);
})

api.post('/messages', (req, res) => {
    console.log(req.body);
    messages.push(req.body);
    // res.sendStatus(200);
    res.send(req.body);
})

app.use('/api', api);

app.listen(63145);
