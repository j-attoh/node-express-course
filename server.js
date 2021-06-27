const express = require("express")

const app = express() 

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

app.listen(8080, ()=> {
	console.log("server is running")
})
