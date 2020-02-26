var express = require('express');
var router = express.Router();
const mysql = require('mysql'); 




var connection= mysql.createConnection ({
    host: 'localhost',
    database: 'angulargourmand',    
    user: 'root',  
    password: '',
});

// Accessing user details from token    
router.post('/save',(req, res) => {     
    
//connection.connect() 
    console.log(req.body); 
    //res.json(req.body); 

    var sql="INSERT INTO `angulargourmandtable`(`name`, `number`, `email`)" + " VALUES ('"+req.body.name+"','"+req.body.number+"','"+req.body.email+"');";  
    connection.query(sql,function(err,result,field){   
        if(result!=null){
           // res.json({msg:"Inserted"}); 
           res.send("add success");
          
        }else{
           console.log("DB Error"); res.send("add failed");
           
        } 
    })  
    //connection.end()       
     

}) 

  
  connection.on('error', function(err) {
      console.log("[mysql error]",err);
  });    

module.exports = router    
  