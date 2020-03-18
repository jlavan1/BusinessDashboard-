//passport setup not in use 



var express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
var router = express.Router();
const models = require('../models');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); 
const withAuth = require('./middleware');
app.use(bodyParser.urlencoded({ extended: false }));
const secret = 'mysecretsshhh';
app.use(session({
  secret: "user_id",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//encrypting function 
var pbkdf2 = require('pbkdf2');
var salt = "4213426A433E1F9C29368F36F44F1";

function encryptionPassword(password) {
  var key = pbkdf2.pbkdf2Sync(
    password, salt, 36000, 256, 'sha256'
  );
  var hash = key.toString('hex')
  return hash;
}
// passport local 

const LocalStrategy = require('passport-local').Strategy

// Register User to the database 


router.post("/signup", function (req, res) {
  models.user_accounts.findOne({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    console.log(user)
    if (!user) {
      models.user_accounts.create({
        fullName: req.body.fullName,
        email: req.body.email,
        password: encryptionPassword(req.body.password)
      }).error(function (err) {
        console.log(err);
        res.render('signup', { error: 'The user is already created ' })
      });
    } else {
      res.render('signup', { error: 'The user is already created ' })
    }
    res.redirect("signin")
  })

});

//passport local strategy 

passport.use(new LocalStrategy(
  function (email, password, done) {
    models.user_accounts.findOne({
      where: {
        email: email
      }
    }).then(function (user) {
      if (!user) {
        console.log('email already taken')
        return done(null, false,{message: 'email already taken '})
      }
      if (user.password != encryptionPassword(password)) {
        return done(null, false)
      }
      return done(null, user);
    }).catch(function (error) {
      console.log(error)
      return done(error)
    })
  }
));
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  models.accounts.findOne({ where: { id: id } }).then(function (user) {
    done(null, user);
  });
});

app.get('/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});





// Using LocalStrategy with passport
router.post('/signin',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function (req, res) {
    res.redirect('/success?FullName=' + req.user.fullName)

  })

router.get('/success', function (req, res) {
  console.log(req.user)
  if (req.isAuthenticated()) {

    res.redirect('/profile')
  } else {
    res.redirect('/signup')
  }
});


// router.get('/profile', function (req, res) {
//   if (req.isAuthenticated()) {
//     console.log(req.user);
//     res.render("profile.ejs", { name: req.user, name: req.user })
//   } else {
//     res.redirect('/signup')
//   }


// });


router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});





module.exports = router