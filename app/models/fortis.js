// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
  name: {
    type: String,
    default: ''
  },
  superpower : {
    type: String,
    default: ''
  },
  strength : {
    type: String,
    default: '5'
  }
});
//mongoose.connect('mongodb://nibble:ncs@ds159237.mlab.com:59237/vision');
