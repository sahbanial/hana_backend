import { model, Schema, Types } from 'mongoose';
import { createdAt } from './preSave';
const projectSchema= new Schema({
	project:{
		type:String,
		ref:"projects",
		autopopulate:true,
	},
	role:{
		type:String,
		enum:["MANAGER","OBSERVER","MENEGER"]
	}
});

const userWallSchema = new Schema(
	{
		id: String,
		profile: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'users',
			autopopulate:true
		},
		firstName: {
			type: String,
			required: true,
			trim: true,
			default: ''
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
			default: ''
		},
		userName:{
			type:String,
			default:""
		},
		tel: {
			type: String,
			trim: true,
			default: ''
		},
		address: {
			type: String,
			trim: true,
			default: ''
		},
		sexe: {
			type: String,
			default: 'Femme'
		},
		photoUrl: {
			type: String,
			default: ''
		},
		organisation:{
			type:String,
			ref:"organisations"
		},
		projects:{
			type:[projectSchema],
			default:[]

		},
		createdAt: Number,
		updatedAt: Number
	},{
		toObject: {
			virtuals: true
		},
		toJSON: { virtuals: true }
	}
);

createdAt(userWallSchema);
export const UserWallModel = model('usersWall', userWallSchema);
