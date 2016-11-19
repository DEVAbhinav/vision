 // app/routes.js
 // grab the fortis model we just created
 var fortis = require('./models/fortis');
 module.exports = function(app) {
   // server routes ===========================================================
   // handle things like api calls
   // authentication routes
   // sample api route    
   app.post('/fortis', function(req, res) {
       
        // var aadhar_No = req.query.aadhar_No;
        // var aadhar_No = req.query.aadhar_No;
       console.log('Someones calling the fortis');
       // use mongoose to get all nerds in the database
       //res.sendfile('.',{root : })

       fortis.find(function(err, nerds) {
         // if there is an error retrieving, send the error. 
         // nothing after res.send(err) will execute
         if (err) res.send(err);
         res.json(nerds); // return all nerds in JSON format

       });
     })
     .post('/api/nerds', function(req, res) {
       var fortis = new fortis(); // create a new instance of the fortis model
       fortis.name = req.body.name; // set the nerds name (comes from the request)
       fortis.superpower = req.body.superpower; 
       // save the fortis and check for errors
       fortis.save(function(err) {
         if (err) res.send(err);
         console.log("fortis created!");
         res.json({ message: 'fortis created!' });
       });
     })
     // route to handle creating goes here (app.post)
     // route to handle delete goes here (app.delete)
     // frontend routes =========================================================
     // route to handle all angular requests
     .get('*', function(req, res) {
       res.sendfile('./public/views/index.html'); // load our public/index.html file
     });
};
