var express = require("express");
var app = express();
const port = 3000

app.get("/", (req, res) =>{
	res.send("Hi there!");
});

app.listen(port, ()=>{
	console.log('example app listening at http://localhost:${port}')
})






