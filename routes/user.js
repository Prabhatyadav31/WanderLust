const express = require('express');
const router = express.Router();
const User = require('../models/user.js'); // Assuming you have a User model defined

router.get('/signup', (req, res) => {
  res.render('users/signup.ejs');
});

router.post('/signup', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email });

    const registeredUser = await User.register(newUser, password);

    req.flash('success', 'Welcome to Wanderlust!');
    res.redirect('/listings');

  } catch (err) {
    req.flash('error', err.message);
    res.redirect('/signup');
  }
});

module.exports = router;
