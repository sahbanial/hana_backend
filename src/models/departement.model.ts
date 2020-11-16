import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";
const depSchema = new Schema({
    id:String,
    name:{
        type:String
    },
    organisation:{
        type:String,
        ref:"organisations"

    },
    photoUrl:String,
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});


createdAt(depSchema);

export const DepartmentModel = model("departments", depSchema);