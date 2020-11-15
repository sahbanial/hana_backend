import { UserModel } from "./user.model";
import { AdminModel } from "./admin.model";
import { UserWallModel } from "./userWall.model";
import { PostModel } from "./post.model";
import { CommentModel } from "./comment.model";
import { OrganisationModel } from "./organisation.model";
import { DepartmentModel } from "./departement.model";
import {ProjectModel} from "./project.model"
import {FivePointModel} from "./fivepoints.model";
const seedsData = () => {
  AdminModel.countDocuments((err, count) => {
    if (!err && count === 0) {
      new UserModel({
        email: "admin@gmail.com",
        password: "123456",
        ref: "admins",
      })
        .save()
        .then((user) =>
          new AdminModel({ profile: user.id }).save().then((admin) => admin)
        );
    }
  });

  UserWallModel.countDocuments((err, count) => {
    if (!err && count === 0) {
      new UserModel({
        email: "client@gmail.com",
        password: "123456",
        ref: "usersWall",
      })
        .save()
        .then((user) => {
          new UserWallModel({
            firstName: "sahbani",
            lastName: "wael",
            profile: user.id,
          }).save();
        });
    }
  });
  OrganisationModel.countDocuments((err,count)=>{
	  if(!err && count===0){
		  new OrganisationModel({name:"Informatique",photoUrl:"tes"}).save((errc,org)=>{
			  new DepartmentModel({name:"SI"}).save();
		  })
	  }
  })
};

seedsData();
export {
  UserModel,
  AdminModel,
  UserWallModel,
  PostModel,
  CommentModel,
  OrganisationModel,
  DepartmentModel,
  ProjectModel,
  FivePointModel
};
