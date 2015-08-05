var express = require('express');
var router = express.Router();
var User = require('../entities/User');
var config = require('../config');
var ensureAuthenticated = require('./helpers').ensureAuthenticated;
var _ = require('../app/vendor/underscore/underscore-min.js');
/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
router.param('truckId', function(req, res, next, truckId) {
  next()
})


router.route('/allUsers')
 .get(function (req, res) {
   User.find({}, function (err, users) {
     res.send(users);
   });
 });

router.route('/me')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      res.send(user);
    });
  })
  .put(function(req, res) {
    User.findById(req.user, function(err, user) {
      if (!user) {
        return res.status(400).send({ message: 'User not found' });
      }
      // add any new user properties here as well as entities/User.js and routes/profile.js
      // user.newProperty = req.body.newProperty || user.newProperty
      user.displayName = req.body.displayName || user.displayName;
      user.email = req.body.email || user.email;
      user.username = req.body.username || user.username;
      user.truckLocation = req.body.truckLocation || user.truckLocation;
      user.truckTime = req.body.truckTime || user.truckTime;
      user.truckImage = req.body.truckImage || user.truckImage;
      user.truckName = req.body.truckName || user.truckName;
      user.truckDescription = req.body.truckDescription || user.truckDescription;
      user.truckCategories = req.body.truckCategories || user.truckCategories;
      user.truckWebsite = req.body.truckWebsite || user.truckWebsite;
      user.phone = req.body.phone || user.phone;
      user.active =  req.body.active
      user.save(function(err) {
        console.log('I HAVE MESSED UP', err);
        res.status(200).end();
      });
    });
  });

  ////////get only trucks///////////
   router.route('/trucks')
    .get(function (req, res) {
      User.find({}, function (err,users) {
        var trucks = users.filter(function(el) {
          return el.truck === true;
        });
        res.send(trucks);
      });
    });

  ////////get only active trucks///////////
  router.route('/activeTrucks')
   .get(function (req, res) {
     User.find({}, function (err,users) {
       var trucks = users.filter(function(el) {
         return el.active === true;
       });
       res.send(trucks);
     });
   });

   ////////get only active trucks///////////
   router.route('/inactiveTrucks')
    .get(function (req, res) {
      User.find({}, function (err,users) {
        var trucks = users.filter(function(el) {
          return el.active === false;
        });
        res.send(trucks);
      });
    });

    ////////get only trucks///////////
     router.route('/trucks/:truckId')
      .get(function (req, res) {
        User.findById(req.params.truckId, function(err, truck) {
          // console.log('truck in router', truck);
          res.send(truck);
        });
      })
        .put(function (req, res) {
          User.findById(req.params.truckId, function(err, truck) {
            console.log('truck in router', truck);
            console.log('req.body', req.body);
            if (req.body.rating) {
              truck.truckReviews.push(req.body);
            } else {
              truck.truckLikes = req.body.truckLikes;
            };
            truck.save(function(err) {
              console.log("ERROR IN SAVE", err);
              res.status(200).end();
            });
            console.log("ERROR", err)
          });
        })

        .delete(function (req, res) {
          User.findById(req.params.truckId, function(err, truck) {
            console.log('truck in router', truck);
            truck.truckReviews = []
            truck.save(function() {
              res.status(200).end();
            })
          });
        });



module.exports = router;
