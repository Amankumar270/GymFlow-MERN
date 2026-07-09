import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    description:{type:String, required:true},
    yearlyPlan  :{type:String, required:true},
    facilities:{type:String, required:true},

})

const membershipModel = mongoose.model("Memberships", membershipSchema)
export default membershipModel