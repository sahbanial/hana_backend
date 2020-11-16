import { FivePointModel, PostModel } from "../../../../models";
import { NotficationModel } from "../../../../models/notifications.model";
export default {
  getPosts: (root, { project, tag }) =>
    new Promise((resolve, reject) => {
      console.log({ project, tag });
      let query: any = { project };
      PostModel.find(query)
        .sort({ createdAt: -1 })
        .then((forms) => {
            
          if (tag) {
            return resolve(
              forms?.filter((p: any) =>
              p?.comments?.some(
                (cm: any) => cm?.body?.includes(tag)
              )
              )
            );
          }
          resolve(forms);
        });
    }),
    getNotifications:(root,{},{user})=>{
        return new Promise((resolve,reject)=>{
            NotficationModel.find({userWall:user?.id}).sort({createdAt:-1}).then(notifs=>{
                return resolve(notifs);
            })
        })
    },
    getFivePoints:(r,{project})=>{
        return FivePointModel.find({project});
    },
    getMyProfile:(r,{},{user})=>{
        return user;
    }
};
