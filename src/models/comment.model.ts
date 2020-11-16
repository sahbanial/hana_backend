import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";
const commentSchema = new Schema({
    id:String,
    body:{
        type:String,
        default:''
    },
    media:{
        type:String,
        
    },
    subComments:{
        type:[String],
        ref:"comments",
        autopopulate:true,
        default:[]
    },
    likes:{
        type:[String],
        default:[]
    },
    createdBy:{
        type:String,
        ref:"usersWall",
        autopopulate:true
    },
    post:{
        type:String,
        default:null,
    },
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});


createdAt(commentSchema);

export const CommentModel = model("comments", commentSchema);