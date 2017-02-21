var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://avneetk:hope1234@ds157439.mlab.com:57439/meanstacklab3');
 
module.exports = connection;