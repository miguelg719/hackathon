const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Follow
// Define collection and schema
let User = new Schema({
   name: {
      type: String
   },
   lastName: {
      type: String
   },
   email: {
      type: String
   },
}, {
   collection: 'users'
})

module.exports = mongoose.model('User', User)
