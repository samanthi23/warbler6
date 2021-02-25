const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next) {
  // finding a user
  // then check if password matches 
  // and then if it all matches log them in
  // signing or creating a JSON web token
  // and sending it back in the response
  
  try {
    // using db.User.findOne
    // await for that promise to resolve
    
    let user = await db.User.findOne({
      email: req.body.email
    });
    // destructure 
    let { id, username, profileImageUrl } = user;
    // result of our user.compare function
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      // if successful password match then ...
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password."
      });
    }
  } catch (e) {
    return next({ status: 400, message: "Invalid Email/Password." });
  }
};

exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};
