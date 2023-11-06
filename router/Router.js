const{addNewUser,salarymorethanthirty,experiencemorethan2,twocondition,update,deletequery}=require("../Controller/usercontroller")
const routes=require("express").Router();
routes.get("/Query1",addNewUser)
routes.get("/Query2",salarymorethanthirty)
routes.get("/Query3",experiencemorethan2)
routes.get("/Query4",twocondition)
routes.get("/Query5",update)
routes.get("/Query6",deletequery)
module.exports=routes