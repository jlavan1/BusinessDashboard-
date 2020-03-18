const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const models = require('../models');

const secret = 'mysecretsshhh';
import auth from './jwtConfig'


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

// function verifyToken(req, res, next) {
//     // Get auth header value
//     const bearerHeader = req.headers['authorization'];
//     // Check if bearer is undefined
//     if(typeof bearerHeader !== 'undefined') {
//       // Split at the space
//       const bearer = bearerHeader.split(' ');
//       // Get token from array
//       const bearerToken = bearer[1];
//       // Set the token
//       req.token = bearerToken;
//       // Next middleware
//       next();
//     } else {
//       // Forbidden
//       res.sendStatus(403);
//     }
  
//   }

  users.get('/user', auth, async (req, res) => {
    try {
      const user = await models.user_accounts.findById(req.user.id).select('password');
      if (!user) throw Error('User Does not exist');
      res.json(user);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

module.exports = users