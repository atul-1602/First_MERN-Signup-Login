const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

// Replace the connection string with the actual MongoDB URI
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((error) => res.json(error));
});

app.post('/login', (req, res) => {
    const {email,password}=req.body;
    EmployeeModel.findOne({email}).then((employee)=>{
        if(employee){
            if(employee.password===password){
                res.json("login success")
            }
            else{
                res.json("login failed")
            }
        }else{
            res.json("No record exist")
        }
       
    })
}
)

app.listen(3001, () => console.log("Server started on port 3001"));
