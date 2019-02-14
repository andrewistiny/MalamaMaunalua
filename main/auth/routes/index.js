const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

//AAP
router.get('/aap', ensureAuthenticated, (req, res) =>
  res.render('aap', {
    user: req.user
  })
);

//Organizations
router.get('/org', ensureAuthenticated, (req, res) =>
  res.render('org', {
    user: req.user
  })
);

//FMP
router.get('/fmp', ensureAuthenticated, (req, res) =>
  res.render('fmp', {
    user: req.user
  })
);

//Huki
router.get('/huki', ensureAuthenticated, (req, res) =>
  res.render('huki', {
    user: req.user
  })
);

module.exports = router;
