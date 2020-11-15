import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";

const projectSchema = new Schema({
    id:String,
    body:{
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
    readed:{
        type:Boolean,
        default:false,
    },
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});


createdAt(projectSchema);

export const NotficationModel = model("notifications", projectSchema);