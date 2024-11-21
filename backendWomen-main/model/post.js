import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    
    myFile:{
    type : String
    }
});

export default mongoose.model("post", PostSchema);