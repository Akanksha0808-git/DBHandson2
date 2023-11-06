const express=require("express");
const routes=require("./router/Router")
const {connection}=require("./config/db")
const app=express();
const cors=require("cors");

app.use(express.json());


const port=7000;

app.use(cors({
  origin:"*"
}))
app.use("/api",routes)



app.listen(port,async ()=>{
  try{ 
    await connection();
    console.log(`server started after making connection `,port)}
  catch(err){
    console.log(err,"error occured due to server start")
  }
 
})

