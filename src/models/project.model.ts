import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";

const projectSchema = new Schema({
    id:String,
    name:{
        type:String
    },
    usersWall:{
        type:[String],
        default:[]
    },
    level:{
           type:String,
           ref:"departments",
           autopopulate:true         
    },
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});


createdAt(projectSchema);

export const ProjectModel = model("projects", projectSchema);