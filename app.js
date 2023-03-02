let express=require('express');
let app=express();
let port=process.env.PORT || 3000;
app.use('/assets', express.static(__dirname+'/public'));
app.use('/',function (req, res, next){console.log('Request URL:' + req.url),next()});
app.get('/', function (req, res) {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /><title>xd</title></head>
    <body><h1>Hola mundo!</h1></body></html>`)
});
app.listen(port);

app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person:' + req.params.id +'</h1></body></html>');
});
