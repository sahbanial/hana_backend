import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";

const postsSchema = new Schema({
    id:String,
    media:{
        type:String,
        default:"",
    },
    body:{
        type:String,
        default:''
    },
    comments:{
        type:[String],
        ref:"comments",
        autopopulate:true
    },
    likes:{
        type:[String],
        default:[]
    },
    createdBy:{
        type:String,
        autopopulate:true,
        ref:"usersWall"
    },
    project:{
        type:String,
        ref:"projects",
        autopopulate:true
    },
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});

createdAt(postsSchema);
export const PostModel = model("posts", postsSchema);