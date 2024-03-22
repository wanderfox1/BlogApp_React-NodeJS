import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title : {
        type : String, 
        required : true
    }, 
    text : {
        type : String, 
        required : true, 
        unique : true,
    }, 
    tags : {
        type : Array,
        default: [],

    }, 
    viewsCount: {
        type: Number, 
        default: 0,
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    }, 
    avatarUrl : String,
    }, 
    {
        timestamps : true, // всегда при создании прикрутит даты
    }
);

export default mongoose.model('Post', PostSchema); // made a model
// later mvc - model view controller

