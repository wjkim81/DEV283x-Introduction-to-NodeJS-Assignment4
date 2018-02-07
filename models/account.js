const mongoose         = require('mongoose');


accountSchema = mongoose.Schema({
  name: String,
  balance: Number
});

module.exports = mongoose.model('Account', accountSchema);