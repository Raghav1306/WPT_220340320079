let raghav=({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'raghav13',
	port:3306
});

const mysql = require('mysql2');
const con = mysql.createConnection(raghav);

const express=require("express");
const app=express();

app.use(express.static("abc"));

app.listen(8081,()=>{
console.log("server listening at 8081");
});

app.get('/book',(req,res)=>{
    console.log("bookid");
    let bookid=req.query.bookid;

    let output={status:false,book:{bookname:"",price:""}};
    con.query('select bookname,price from book where bookid=?',[bookid],
    (err,rows)=>{
        if (err) {
            console.log(err);
			
        } else {
            if(rows.length>0)
            console.log( rows);
        
          output.status=true;
          output.book.bookname=rows[0].bookname;
          output.book.price=rows[0].price;
          console.log( output.book);
    
            };
            res.send(output);
    
    });
			
       

});

    
    app.get('/updatebook',(req,res)=>{
        console.log(bookid);
        let bookdetail={bookid:req.query.bookid,bookname:req.query.bookname,price:req.query.price}
    
        let output={status:false};
        con.query('update book set price=? where bookid=?',[bookdetails.price,bookdetails.bookid],
        (err,rows)=>{
            if (err) {
                console.log(err);
                
            } else {
                if(rows.affectedRows>0)
              output.status=true;
              
                };
                res.send(output);
            
            });
                
           
    
    });