import { DepartmentModel } from "../../../models";

export default {
    levels :(_)=> DepartmentModel.find({organisation:_?.id})
 };
 