import { OrganisationModel } from "../../../../models"

export default {
    getOrganisations:(root,{})=>{
        return OrganisationModel.find({});
    }
}