const mysql=require('mysql2')
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123",
    database:"sepg",
})
connection.connect(err=>{
    if(err){
        console.log('error')
    }else{
        console.log('database connected sucessfully')
    }
})

module.exports=connection