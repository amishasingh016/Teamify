import mongoose, { Connection } from "mongoose";

let isConnected:Connection | boolean  = false;

const connectDB = async()=>{
    console.log("MONGO_URL:", process.env.MONGO_URL);
    if (isConnected){
        console.log("MongoDb already connected");
        return isConnected;
    }
    try{
        const res=await mongoose.connect (process.env.MONGO_URL !);
        isConnected=res.connection;
        console.log("MongoDb Connected.");
        return isConnected;
    }
    catch(error){
        console.log(error);
    }
    
}

export default connectDB;