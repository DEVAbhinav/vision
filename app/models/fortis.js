// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('fortis', 
  {
    
    medicalinformation: [
        // {
        //     test: [
        //         {
        //             date: Date,
        //             status: String,
        //             pharmacy: String,
        //             type: String,
        //             report: String
        //         }
        //     ],
        //     type: String,
        //     medicine: [
        //         String
        //     ],
        //     date: String,
        //     symptoms: [
        //         String
        //     ],
        //     organ: String,
        //     doctor: String
        // }
    ],
    name: String,
    address: [
        {
            state: String,
            city: String,
            pincode: Number,
            locality: [
                // {
                //     latitude: Number,
                //     longitude: Number
                // }
            ]
        }
    ],
    phno: Number,
    aadhar: Number



});
//mongoose.connect('mongodb://nibble:ncs@ds159237.mlab.com:59237/vision');
