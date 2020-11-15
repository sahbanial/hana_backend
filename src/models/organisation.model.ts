import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";
const organisationSchema = new Schema({
    id:String,
    name:{
        type:String
    },
    photoUrl:String,
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});


createdAt(organisationSchema);

export const OrganisationModel = model("organisations", organisationSchema);