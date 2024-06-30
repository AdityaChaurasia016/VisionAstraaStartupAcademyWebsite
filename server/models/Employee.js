const mongoose=require('mongoose')

const EmployeesSchema= new mongoose.Schema({
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("mentormentees", EmployeesSchema)
module.exports =EmployeeModel
