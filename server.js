const express = require("express"); // Load the express lib
const console = require("node:console");
const { expectFailure } = require("node:test");
const app=express();//thing to m=configure server

const searchinput=document.getElementById("searchinput");
const searchbutton=document.getElementById("searchbutton");

app.use(express.json()) // lets server read json data
app.use(express.static(".")) // runs files from folders

app.get("/api/search", async (req,res)=>{ // tells express what to do on a request
const query=req.query.q;// someone search "cats" then req query is "cats"
if(!query){
    return res.status(400).json({ // what happen if nothing is searched and request started
error:"Search smth up"
    });
}
res.json({
message:"XenoOS backend works...", //Json data & messages
query:query
});
});

app.listen(3000,()=>{
console.log("XenoOS search running on  http://localhost:3000")
});

async function XenoSearch(){
    const search = searchinput.value.trim();
    if(!search) return;
    try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(search)}`// sends a request with the search txt safe to put in a url
    );
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.error("search failed:",error)
    }
}