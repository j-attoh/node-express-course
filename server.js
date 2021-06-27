const express = require("express")
const app = express() 
const bodyParser = require("body-parser")

app.use(bodyParser.json() )

const mockData = [
	{name: "Mark"},
	{name: "Jill"}
]

app.get("/users", (req, res)=>{
	res.json( {
		success:true , 
		message: "successfuly got users. Nice!", 
		users: mockData 
	})

})	

app.get("/users/:id", ( req, res) => {
	res.json( {
		success:true,
		message: "got one user", 
		user: req.params.id 
	})	

})

app.post("/login", (req, res) => {
	const username  = req.body.username 
	const password = req.body.password 

	const mockUsername = "prokwekz"
	const mockPassword = "#gt68682" 

	if ( username  === mockUsername && password === mockPassword ){
		res.json({ 
			success: true, 
			message: "password and username match!",
			token: "encrypted token goes here"
		})
	}else {
		res.json({
			success: false , 
			message: "password and username don't match!"
		})
	}

})

app.listen(8080, ()=> {
	console.log("server is running")
})
