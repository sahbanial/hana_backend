import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";

const reviewSchema = new Schema({
    userWall:{
        type:String,
        ref:"usersWall",
        autopopulate:true
    },
    rating:Number
})

const projectSchema = new Schema({
    id:String,
    question:{
        type:String
    },
    userWall:{
        type:String,
        default:""
    },
    project:{
        type:String,
        default:"",
        autopopulate:true
    },
    reviews:{
        type:[reviewSchema],
        default:[]
    },
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});


createdAt(projectSchema);

export const FivePointModel = model("fivepoints", projectSchema);