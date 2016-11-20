
 // app/routes.js
 // grab the fortis model we just created
 var samvedna = require('./models/samvedna');
 var medanta = require('./models/medanta');
 var aaims = require('./models/aaims');
 module.exports = function(app) {
   // server routes ===========================================================
   // handle things like api calls
   // authentication routes
   // sample api route    
   app.get('/aaims', function(req, res) {
      
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
    var medicine = ["insuline","penicilin","carpol","doze"];
    var blood = ["a","ab", "b"];




     

    for(i=0;i<15;i++) {

    var ran = Math.floor(Math.random()*3);
    var report = Math.floor(Math.random()*300);
    var name = fname[Math.floor(Math.random()*6)] +" "+ lname[Math.floor(Math.random()*3)]
    

      var newRecord = new samvedna({
        
        "name" : name,
        "aadhar" : 1000000000+Math.floor(Math.random()*150),
      
        "address" : [
                {
                        "pincode" : 201301+Math.floor(Math.random()*40),
                        "locality" : [
                                {
                                        "latitude" : 20+(Math.random()*60),
                                        "longitude" : 30+(Math.random()*60)
                                }
                        ],
                        "state" : "Uttar Pradesh",
                        "city" : "Noida"
                }
        ],
        bloodgroup  : blood[Math.floor(Math.random()*3)],
        "phno" : 8800058665+Math.floor(Math.random()*1054)        
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
                "organdetails" : {'organ' : organ[Math.floor(Math.random()*4)], 'status' : Math.floor(Math.random()*3-1) },
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
    
    var aadhar =  req.body.aadhar||0;
    var bloodgroup = req.body.bloodgroup||'a';
    var location =  req.body.location||0;
    var organ =  req.body.organ||"lugs";
    var data =[];

    var map =  function(obj) {
        var lat = obj.address.locality.latitude;
        var longh = obj.address.locality.longitude;
        distance = Math.sqrt((location.latitude-lat)*(location.latitude-lat) - ((location.longitude-longh)*(location.longitude-longh)));
        return distance;
    }


    samvedna.find({'bloodgroup' : bloodgroup, medicalinformation : {$elemMatch : {'organdetails.organ' :  organ, 'organdetails.status': {$gte:0}}}},{name:1,phno:1,address:1}
        ,{limit: Math.floor(Math.random()*6)},function(err,result) { 
        console.log(result);
        data = data.concat(result);
        res.send(data);
     
    })
   })



     .post('findMatch', function(req, res) {
       
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
