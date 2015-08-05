var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
  // add any additional properties here as well as routes/auth.js and routes/profile.js
  // newProperty: String,
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  username: String,
  email: String,
  truck: Boolean,
  active: Boolean,
  truckLocation: {address: String, coords: {latitude: Number, longitude: Number}},
  truckTime: String,
  truckImage: String,
  truckName: String,
  truckDescription: String,
  truckCategories: String,
  truckWebsite: String,
  truckReviews: Array,
  truckLikes: Number,
  phone: String,
  picture: String,
  facebook: String,
  google: String,
  twitter: String
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;
