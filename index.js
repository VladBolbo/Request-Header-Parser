let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let router = express.Router();
let port = 8080;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next();
  })

router.use(function(req, res, next) {
    console.log(req. method, req.url);
    next();
})

router.get('/myspec', (req, res) => {

    //let info = 
    let language = req.headers['accept-language'].split(',')[0];
    let soft = req.headers['user-agent'];
    let ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    
    let final = {
        software: soft,
        ip: ip,
        language: language
    }
    res.send(final);


    //console.log(123);
})

app.use('/app', router);

app.listen(port, console.log('We are on...'));