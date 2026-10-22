const express = require("express"); // Load the express lib
const { expectFailure } = require("node:test");
const app=express();//thing to m=configure server

app.use(express.json()) // lets server read json data
app.use(express.static(".")) // runs files from folders

app.get("api/search", async (req,res)=>{ // tells express what to do on a request
const query=req.query.q;
});