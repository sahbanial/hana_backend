import { ProjectModel } from "../../../models";

export default{
    projects:(_)=>ProjectModel.find({level:_?.id})
}