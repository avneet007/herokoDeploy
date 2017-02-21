var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var userSchema = new Schema({
 _id: { type: objectId, auto: true },
 email: { type: String, required: true },
 name: { type: String, required: true },
 age: { type: Number, required: true },
 gender: { type: String, required: true },
 profilepic :{ type: String, required: true }

}, {
 versionKey: false
});
 
var user = mongoose.model('users', userSchema);
 
module.exports = user;