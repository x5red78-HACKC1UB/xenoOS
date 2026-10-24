const express = require("express"); // Load the express lib
const app=express();//thing to m=configure server


app.use(express.json()) // lets server read json data
app.use(express.static(".")) // runs files from folders

app.get("/api/search", async (req,res)=>{ // tells express what to do on a request
const query=req.query.q;// someone search "cats" then .q is "cats"
if(!query){
    return res.status(400).json({ // what happen if nothing is searched and request started
error:"Search smth up"
    });
}
res.json({
message:"XenoOS backend works...", //Json data 
query:query
});
});

app.listen(3000,()=>{
console.log("XenoOS search running on  http://localhost:3000") // message when server's live
});

//process: someone types seaweed
// app get handles the request
// req=request info
// res= servers response
//res.json what the server sends lol