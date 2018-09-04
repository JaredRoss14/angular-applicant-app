const express = require('express');
const router = express.Router();

const Applicant = require('../models/applicants');

// Retrieving All Applicants
router.get('/applicant', (req, res, next) => {
  Applicant.find(function (err, applicants) {
    res.json(applicants);
  })
});

// Update applicant 
router.put('/applicant/:id', (req, res, next) => {
  Applicant.findByIdAndUpdate({
    _id: req.params.id
  }, req.body).then(function () {
    Applicant.findOne({
      _id: req.params.id
    }).then(function (applicant) {
      res.send(applicant);
      console.log("updated to: " + applicant)
    })
  })
})

// Delete applicant
router.delete('/applicant/:id', (req, res, next) => {
  Applicant.remove({
    _id: req.params.id
  }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;