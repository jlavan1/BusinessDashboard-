const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const models = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());
// app.use(Cors);

app.use(
  session({
    secret: "user_id",
    resave: false,
    saveUninitialized: true
  })
);

// app.use(Cors(corsOptions));
app.use(logger("dev"));
// require('./routes/passport');
const auth = require("./routes/users");

// app.use('/users', Users)
app.use(auth);
app.use(express.static(path.join(__dirname, "build")));

app.get("/test", function(req, res) {
  res.send("test");
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

//
models.sequelize.sync().then(function() {
  const PORT = process.env.PORT || 4040;
  app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
  });
});
