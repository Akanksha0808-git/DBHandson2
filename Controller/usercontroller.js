const {database}=require("../config/db")
const employee2=database.collection("employee2");
const employeeData=require("../DataStore/Data")

// Queries 1

const addNewUser = async (req, res)=>{
    try {
        
        const data = await employee2.insertMany(employeeData)
        console.log(`${data.insertedCount} employee records inserted`)
      res.send({msg:"added successfully" ,data:data})
        
    }
    catch (error) {
        console.log("Error while inserting data", error);
      res.send({msg:"error occured",error})
    }
}
// Queries 2

const salarymorethanthirty=async (req,res)=>{
    try {
        const data = await employee2.find({ salary: { $gt: "30000" } }).toArray();
        res.send({msg:"added successfully" ,data:data})

      } catch (error) {
        res.status(400).json({
          success: false,
          error,
        });
      }
    };
    
// Queries 3

const experiencemorethan2=async (req,res)=>{
    try {
        const data = await employee2.find({ overallExp: { $gt: "2" } }).toArray();
        res.send({msg:"added successfully" ,data:data})

      } catch (error) {
        res.status(400).json({
          success: false,
          error,
        });
      }
}
// Queries 4

const twocondition=async (req,res)=>{
    try {
        const data = await employee2.find({ overallExp: { $gt: "1" } ,yearGrad:{ $gt: "2015" } }).toArray();
        res.send({msg:"added successfully" ,data:data})

      } catch (error) {
        res.status(400).json({
          success: false,
          error,
        });
      }
}
// Queries 5

const update=async (req,res)=>{
    try {
        const data = await employee2.updateOne({"salary":"70000"},{$set:{"salary":"65000"}});
        res.send({msg:"added successfully" ,data:data})

      } catch (error) {
        res.status(400).json({
          success: false,
          error,
        });
      }
}
// Queries 6

const deletequery =async(req,res)=>{
    try {
        const data = await employee2.deleteMany({"lastCompany":"Y"});
        res.send({msg:"deleted successfull" ,data:data})

      } catch (error) {
        res.status(400).json({
          success: false,
          error,
        });
      }
}

module.exports={addNewUser,salarymorethanthirty,experiencemorethan2,twocondition,update,deletequery}