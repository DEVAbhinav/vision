 // app/routes.js
 // grab the fortis model we just created
 var fortis = require('./models/fortis');
 module.exports = function(app) {
   // server routes ===========================================================
   // handle things like api calls
   // authentication routes
   // sample api route    
   app.get('/fortis', function(req, res) {
      
    var fname = ['ajay','vinay','mukesh','raju','vinod','deepak'];
    var lname = ['pandey','Singh','ramesh'];
    var disease = [{
      name : 'dengue',
      base : 124},
      {
      name : 'hiv',
      base : 184},
      {
      name : 'Diabetis',
      base : 110
    }];
    var organ = ['Kidney',"liver", "lugs","eye"];


    status = ["ok","not OK"];
    var medicine = ["insuline","penicilin","carpol","doze"]




     

    for(i=0;i<15;i++) {

    var ran = Math.floor(Math.random()*3);
    var report = Math.floor(Math.random()*300);
    var name = fname[Math.floor(Math.random()*6)] +" "+ lname[Math.floor(Math.random()*3)]
    

      var newRecord = new fortis({
        
        "name" : name,
        "aadhar" : 1000000000+Math.floor(Math.random()*150),
      
        "address" : [
                {
                        "pincode" : 201301+Math.floor(Math.random()*40),
                        "locality" : [
                                {
                                        "latitude" : 70+(Math.random()*20),
                                        "longitude" : 70+(Math.random()*20)
                                }
                        ],
                        "state" : "Uttar Pradesh",
                        "city" : "Noida"
                }
        ],
        "phno" : 8889558665+Math.floor(Math.random()*150)        
      });
    newRecord.medicalinformation.push({
                type : disease[ran].name,
                test : [
                        {
                                type :  disease[ran].name +" Test",
                                pharmacy : "P Goyal",
                                status : status[report>disease[ran].base],
                                date : Date.now(),
                                report : report
                        },
                        {
                                type : disease[Math.floor(Math.random()*3)].name+" Test",
                                pharmacy : "P Goyal",
                                status : status[(Math.random()*300)>150],
                                date : "4/11/16",
                                report  :  200
                        }
                ],
                date : Date.now(),
                medicine : [
                        medicine[Math.floor(Math.random()*4)],
                       medicine[Math.floor(Math.random()*4)],
                        medicine[Math.floor(Math.random()*4)],
                       medicine[Math.floor(Math.random()*4)]
                ],
                symptoms : [
                        "Blurred Vision",
                        "Weight loss",
                        "Vomiting",
                        "Feeling more tired"
                ],
                organ : organ[Math.floor(Math.random()*4)],
                doctor : "P.K Yadav"
        });
      console.log(newRecord);
      newRecord.save(function(err,result) {
        if(err)
            console.log(err);
        else
            console.log("Mission success!");
      });


    }
    res.send("Success!");


})
   .get('/find',function(req,res)  {
    fortis.find(function(err,result) {
        if (err)
            console.log(err);
        else
            console.log(result.medicalinformation);
            res.json(result);
    })
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
