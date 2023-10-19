const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema); //  make a schema of EmployeeSchema type db named employees

module.exports = EmployeeModel;
