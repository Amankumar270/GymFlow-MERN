import mongoose from "mongoose"

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected");
        
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB