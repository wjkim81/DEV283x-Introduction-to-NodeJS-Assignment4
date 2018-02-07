const express          = require('express') 
const logger           = require('morgan')
const errorhandler     = require('errorhandler')

const bodyParser       = require('body-parser')
const router           = require('./routes')

let app = express();
app.use(logger('dev'))
app.use(bodyParser.json())


app.use('/accounts', router);

var port = process.env.PORT || 3000;


app.listen(port, function() {
  console.log("Live on port: " + port);
});
