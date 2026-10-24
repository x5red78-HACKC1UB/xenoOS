require("dotenv").config(); // keeps my api safe!

const express = require("express"); // Load the express lib
const app=express();//thing to m=configure server


app.use(express.json()) // lets server read json data
app.use(express.static(".")) // runs files from folders

app.get("/api/search", async (req,res)=>{ // tells express what to do on a request
const query=req.query.q;// someone search "cats" then .q is "cats"
if(!query || !query.trim()){ // if query is empty / just white space
    return res.status(400).json({ // what happen if nothing is searched and request started
error:"Search smth up"
    });
}
const apikey = process.env.TAVILY_API_KEY; // secret ohohohoh

if(!apikey){ // if api key can't be found
return res.status(500).json({
error:"SEARCH API KEY IS MISSING :P"
});
}

try{
    const response = await fetch("https://api.tavily.com/search", { // sends request 2 tavily
method:"POST", // send data to the api
headers:{
    "Content-Type":"application/json" // basically says the request body is jSON
},
body:JSON.stringify({ // turn the js object into txt
api_key:apikey,
query:query.trim(),
search_depth:"basic",
max_results:10
})
    });


if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
}

const data=await response.json();
console.log(data.results)
res.json({
message:"XenoOS backend works...", //Json data 
query:query.trim(),
results:data.results.map(result =>({ // map turn each result(title, url etc) 2 an object
title:result.title,
url:result.url, // alla this is what getting send back
content:result.content,
}))

});
}catch(error){
    console.error("Search failed:", error.message);
    if (!res.headersSent) {
        res.status(502).json({
error:"Search failed :("
        });
    }
}
});
app.listen(3000,()=>{
console.log("XenoOS search running on  http://localhost:3000") // message when server's live
});

//process: someone types seaweed
// app get handles the request
// req=request info
// res= servers response
//res.json what the server sends 2 my front end
//response.json read tavily's response , easy to mess up res.response