import { ProjectModel, UserWallModel } from "../../../models";

export default{
    usersWall:(p)=> UserWallModel.find(),
    myRole:(p,{},{user})=> user?.projects?.find(pp=>pp?.project?.id ===p?.id)?.role
}