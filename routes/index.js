var http = require("http");
var express = require('express'); 
var router = express.Router();
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var port = 3000; 
const cors = require('cors') 

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });  
});  

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'angulargourmand'     
});   
 
connection.connect(function(err) {
    if (err) throw err 
    console.log('Yes You are now connected with mysql database...')
}) 
        

app.use(cors()) 

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true 
}));  
  

app.get('/', function (req, res) { 
    // res.sendFile(__dirname + '/public' + 'index.html');
    res.sendFile(path.join(__dirname+'index.html'));  

})     
   


// app.use('/contact', userRoutes)   
// // POST method route 
 
app.post('/post', function (req, res) {    
   // console.log(req.body);    
 
   
   console.log(req.body); 
   
   console.log(req.body.name); 
   console.log(req.body.number);  
   console.log(req.body.email); 
   
     //var sql="insert into angulargourmandtable values('"+req.body.name+"','"+req.body.number+"','"+req.body.email+"')"
    // res.send('POST request to the homepage')
   // var sql="insert into 'angulargourmandtable' ('name','number','email') "+" values('"+req.body.name+"','"+req.body.number+"','"+req.body.email+"')";
    
    var sql="INSERT INTO `angulargourmandtable`(`name`, `number`, `email`)" + " VALUES ('"+req.body.name+"','"+req.body.number+"','"+req.body.email+"');";   
    connection.query(sql, function (err,result) {     
        // if (err) throw err  
        // res.render('index',{title: 'Data saved',
        // message: 'Data saved successfully' }) 
        if(result!=null){
            // res.json({msg:"Inserted"});
            console.log('1');  
        }else{
            res.json({msg:"Not Inserted"});
            console.log('21'); 
        }   
    }) 
  
}) 

connection.end();   
 
app.listen(port, () => console.log(`Port is listening on port ${port}`))
   