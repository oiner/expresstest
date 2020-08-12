var express = require("express");
var app = express();
const port = 3000

app.get("/", (req, res) =>{
	res.send("Hello World!");
});

app.get("/bye", (req, res) => {
	res.send("Goodbye, Cruel World!");
})

app.get("/meow", (req, res) =>{
	console.log("I am a Cat. Meow.")
	res.send("meow");
})



app.get("/r/:Pagename" , (req, res) =>{
	console.log(req.params.Pagename);	
	var pageTitle = req.params.Pagename;
		res.send("Welcome to the" + req.params.Pagename + "subreddit")})




app.get("*" ,  function(req, res){
	res.send("You are my shining star");
})




app.listen(port, ()=>{
	console.log('example app listening at http://localhost:${port}')
})






