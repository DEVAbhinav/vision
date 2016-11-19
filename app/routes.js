 // app/routes.js
 // grab the fortis model we just created
 var fortis = require('./models/fortis');
 module.exports = function(app) {
     // server routes ===========================================================
     // handle things like api calls
     // authentication routes
     // sample api route  
     app
     .get('/fortis', function(req, res) {

             var fname = ['ajay', 'vinay', 'mukesh', 'raju', 'vinod', 'deepak'];
             var lname = ['pandey', 'Singh', 'ramesh'];
             var disease = [{
                 name: dengue,
             }]



             var name = fname[Math.floor(Math.random() * 6)] + lname[Math.floor(Math.random() * 3)]
             var newRecord = new fortis({
                 {
                     "name": name,
                     "aadhar": 1000000000 + Math.floor(Math.random() * 150),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 70 + (Math.random() * 20),
                             "longitude": 70 + (Math.random() * 20)
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": 8889558665 + Math.floor(Math.random() * 150),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": Date.now(),
                             "report":
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b52ee28fb2074450f93f"),
                     "name": "Ravi Gupta",
                     "aadhar": NumberLong("418894281982"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 75.93347199179489,
                             "longitude": 78.78148874126211
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("7165028453"),
                     "medicalinformation": {
                         "type": "Dengue",
                         "test": [{
                             "type": "Dengue IgM",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }, {
                             "type": "Dengue IgG",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Acetaminophen (Tylenol) ",
                             "Naproxen sodium"
                         ],
                         "symptoms": [
                             "High Fever",
                             "Vomiting",
                             "Headache",
                             "Muscle pain"
                         ],
                         "organ": "Liver",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b52ee28fb2074450f940"),
                     "name": "Ravi Chaudhary",
                     "aadhar": NumberLong("756392376922"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 79.25836890700461,
                             "longitude": 82.68362583842128
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("7392945949"),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": "4/11/16",
                             "report": 94
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b52fe28fb2074450f941"),
                     "name": "Aakash Sharma",
                     "aadhar": NumberLong("861509898650"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 75.3638748440282,
                             "longitude": 65.31445918816837
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("7124949088"),
                     "medicalinformation": {
                         "type": "Dengue",
                         "test": [{
                             "type": "Dengue IgM",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }, {
                             "type": "Dengue IgG",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Acetaminophen (Tylenol) ",
                             "Naproxen sodium"
                         ],
                         "symptoms": [
                             "High Fever",
                             "Vomiting",
                             "Headache",
                             "Muscle pain"
                         ],
                         "organ": "Liver",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b52fe28fb2074450f942"),
                     "name": "Aakash Gupta",
                     "aadhar": NumberLong("579387828671"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 71.47268063574175,
                             "longitude": 83.9749972167009
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("7015415454"),
                     "medicalinformation": {
                         "type": "Dengue",
                         "test": [{
                             "type": "Dengue IgM",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }, {
                             "type": "Dengue IgG",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Acetaminophen (Tylenol) ",
                             "Naproxen sodium"
                         ],
                         "symptoms": [
                             "High Fever",
                             "Vomiting",
                             "Headache",
                             "Muscle pain"
                         ],
                         "organ": "Liver",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b52fe28fb2074450f943"),
                     "name": "Aakash Chaudhary",
                     "aadhar": NumberLong("753945274203"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 74.8012977405969,
                             "longitude": 63.80489871040761
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("9764051245"),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": "4/11/16",
                             "report": 199
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b530e28fb2074450f944"),
                     "name": "Mohit Sharma",
                     "aadhar": NumberLong("646095005156"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 71.07398611981986,
                             "longitude": 60.344528226767196
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("9052935216"),
                     "medicalinformation": {
                         "type": "Dengue",
                         "test": [{
                             "type": "Dengue IgM",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }, {
                             "type": "Dengue IgG",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Acetaminophen (Tylenol) ",
                             "Naproxen sodium"
                         ],
                         "symptoms": [
                             "High Fever",
                             "Vomiting",
                             "Headache",
                             "Muscle pain"
                         ],
                         "organ": "Liver",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b530e28fb2074450f945"),
                     "name": "Mohit Gupta",
                     "aadhar": NumberLong("504272678488"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 75.42580363387373,
                             "longitude": 74.26120658589284
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("9691398164"),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": "4/11/16",
                             "report": 86
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b530e28fb2074450f946"),
                     "name": "Mohit Chaudhary",
                     "aadhar": NumberLong("856614779001"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 62.48156033992653,
                             "longitude": 84.44885183446623
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("9931610285"),
                     "medicalinformation": {
                         "type": "Dengue",
                         "test": [{
                             "type": "Dengue IgM",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }, {
                             "type": "Dengue IgG",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Acetaminophen (Tylenol) ",
                             "Naproxen sodium"
                         ],
                         "symptoms": [
                             "High Fever",
                             "Vomiting",
                             "Headache",
                             "Muscle pain"
                         ],
                         "organ": "Liver",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b531e28fb2074450f947"),
                     "name": "Suresh Sharma",
                     "aadhar": NumberLong("445980243045"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 75.94672408899285,
                             "longitude": 71.11240520149245
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("9891096165"),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": "4/11/16",
                             "report": 77
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b531e28fb2074450f948"),
                     "name": "Suresh Gupta",
                     "aadhar": NumberLong("693284721703"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 75.40649781389867,
                             "longitude": 82.6637161047836
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("7414101972"),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": "4/11/16",
                             "report": 100
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b531e28fb2074450f949"),
                     "name": "Suresh Chaudhary",
                     "aadhar": NumberLong("412580162171"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 73.31850094641837,
                             "longitude": 84.15169570753906
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("7424992161"),
                     "medicalinformation": {
                         "type": "Dengue",
                         "test": [{
                             "type": "Dengue IgM",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }, {
                             "type": "Dengue IgG",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Acetaminophen (Tylenol) ",
                             "Naproxen sodium"
                         ],
                         "symptoms": [
                             "High Fever",
                             "Vomiting",
                             "Headache",
                             "Muscle pain"
                         ],
                         "organ": "Liver",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b532e28fb2074450f94a"),
                     "name": "Rajesh Sharma",
                     "aadhar": NumberLong("762373672076"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 79.48512891443713,
                             "longitude": 74.59915542189128
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("9748080140"),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": "4/11/16",
                             "report": 150
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b532e28fb2074450f94b"),
                     "name": "Rajesh Gupta",
                     "aadhar": NumberLong("360204952632"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 78.71280749255584,
                             "longitude": 61.50718221267457
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("7485481283"),
                     "medicalinformation": {
                         "type": "Diabetis",
                         "test": [{
                             "type": "Diabetis Test",
                             "pharmacy": "P Goyal",
                             "status": "+ve",
                             "date": "4/11/16",
                             "report": 169
                         }, {
                             "type": "heart rate",
                             "pharmacy": "P Goyal",
                             "status": "-ve",
                             "date": "4/11/16",
                             "report": "86"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Insulin",
                             "Alpha-glucosidase",
                             "Dopamine Agonist",
                             "Biguanides"
                         ],
                         "symptoms": [
                             "Blurred Vision",
                             "Weight loss",
                             "Vomiting",
                             "Feeling more tired"
                         ],
                         "organ": "Kidney",
                         "doctor": "P.K Yadav"
                     }
                 } {
                     "_id": ObjectId("5830b532e28fb2074450f94c"),
                     "name": "Rajesh Chaudhary",
                     "aadhar": NumberLong("181374928819"),
                     "address": [{
                         "pincode": 201301,
                         "locality": [{
                             "latitude": 76.79832909242867,
                             "longitude": 77.56984294792427
                         }],
                         "state": "Uttar Pradesh",
                         "city": "Noida"
                     }],
                     "phno": NumberLong("9001667035"),
                     "medicalinformation": {
                         "type": "Dengue",
                         "test": [{
                             "type": "Dengue IgM",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }, {
                             "type": "Dengue IgG",
                             "pharmacy": "P Goyal",
                             "date": "4/11/16",
                             "status": "+ve"
                         }],
                         "date": "2/11/16",
                         "medicine": [
                             "Acetaminophen (Tylenol) ",
                             "Naproxen sodium"
                         ],
                         "symptoms": [
                             "High Fever",
                             "Vomiting",
                             "Headache",
                             "Muscle pain"
                         ],
                         "organ": "Liver",
                         "doctor": "P.K Yadav"
                     }
                 }




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
