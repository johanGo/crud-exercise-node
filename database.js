const mysql=require('mysql');
const conn = mysql.createConnection({
    host:'localhost', 
    user:'root',
    password:'12345',
    database:'nodeapp'
});
conn.connect((err,res)=>{
    if(err) throw err;
    console.log('la base de datos esta conectada')
});
module.exports=conn;