const mongoose         = require('mongoose');
const Account          = require('../models/account')

var url = 'mongodb://localhost:27017/edx-assignment4';

mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });

module.exports = {
  getAccount(req, res) {
    Account.find({}, (err, accounts) => {
      if (err)
        res.status(500).send('Error');
      else
        res.json(accounts);
    })
  },

  postAccount(req, res) {
    let newAccount = req.body;

    //console.log(newAccount.name);
    Account.findOne({"name": newAccount.name}, (err, account) => {
      //console.log(err);
      //console.log(account);
      if (err) {
        res.status(500).send(err);
      } else {
        if (account) {
          res.status(409).send(err);
        } else {
          let account = new Account(newAccount);
          account.save((err, result) => {
            console.log(result);
            if (err) res.status(500).send(err)
            else res.status(201).send(newAccount);
          })
        }
      }
      //res.status(201).send('test');
    })

  },

  putAccount(req, res) {
    var accountId = req.params.id;

    Account.findById(accountId, (err, account) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (account) {
          if (req.body.name) account.name = req.body.name;
          if (req.body.balance) account.balance = req.body.balance;

          account.save((err, result) => {
            if (err) res.status(500).send(err);
            else res.status(200).send(result);
          }) 
        } else {
          res.status(404).send(`No id with ${accountId}`)
        }
      }
    });
  },

  deleteAccount(req, res) {
    var accountId = req.params.id;
    console.log(accountId);

    Account.findById(accountId, (err, account) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(account);
        if (account) {
          account.remove((err, result) => {
            if (err) res.status(500).send(err);
            else res.status(200).send(result);
          }) 
        } else {
          res.status(404).send(`No id with ${accountId}`)
        }
      }
    });
  }
}