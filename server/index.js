const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// var path = require('path');
const port=3000;

var router = express.Router();
  
// /Packages Imported

// Files Imported
const userRoutes = require('./routes/userRoutes')
const app = express()
app.use(cors())
// support parsing of application/json type post data
app.use(bodyParser.json());
 
// specify the folder
// app.use(express.static(path.join(__dirname, 'uploads')));

// Routes 

app.get('/', (req, res) => res.send('Success'),)

app.use('/admin', userRoutes)   
app.listen(port, () => {
    console.log(`Api listening on Port 3000`) 
  }) 
     

  
 

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 

router.post('/', function (req, res, next) {
  var path = '';
//   upload(req, res, function (err) {
//      if (err) { 
//        // An error occurred when uploading
//        console.log(err);
//        return res.status(422).send("an Error occured") 
//      }  
//     // No error occured.
//      path = req.file.path; 
//      return res.send("Upload Completed for "+path); 
// }); 
}) 
   
 