const express=require('express') // creates a const to the express framework
const app=express() //creates an instance of the express restful service
const port=3000 // creates a const with the port number for the service to listen on

//method creates a hook on the server for get requets in the root directory
app.get('/',(req,res)=>{
    res.send('Hello Virtual Machine!')
})

//method binds to the port specified in port const then console log when done 
app.listen(port,()=>{
    console.log(`Express Application  listening at port 3000`)
})