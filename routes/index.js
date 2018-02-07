const express          = require('express') 
var router             = express.Router();

var accounts              = require('./accounts.js');

router.get('/', accounts.getAccount);
router.post('/', accounts.postAccount);
router.put('/:id', accounts.putAccount);
router.delete('/:id', accounts.deleteAccount);

module.exports = router;