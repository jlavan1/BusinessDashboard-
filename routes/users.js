const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models');

const secret = 'mysecretsshhh';


users.post('/signup', (req, res) => {
  const today = new Date()
  const userData = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,

  }

      models.user_accounts.findOne({
    where: {
        email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          models.user_accounts.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/signin', (req, res) => {
    models.user_accounts.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, secret, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.post('/secure', function(req, res) {
    const token = jwt.sign({ user: { id: 1, name: 'ME!', role: 'average' } }, 'dsfklgj');
    console.log(token);
    res.json({ jwt: token });
});


// users.get('/profile', (req, res) => {
//   var decoded = jwt.verify(req.headers['authorization'], secret)

//   models.user_accounts.findOne({
//     where: {
//       id: decoded.id
//     }
//   })
//     .then(user => {
//         console.log(user)
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

module.exports = users