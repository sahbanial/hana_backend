import { uploadFile } from "../../../../helpers/function";
import { FivePointModel, PostModel } from "../../../../models";
import { CommentModel } from "../../../../models/comment.model";
import { NotficationModel } from "../../../../models/notifications.model";
export default {
  addPost: (root, { input }, { user, role }) =>
    new Promise((resolve, reject) => {
      const { media, body, project } = input;
      let inputs: any = { body, createdBy: user?.id, project };
      if (media) {
        const filename = `posts/${Date.now()}.jpg`;
        const path = `uploads/${filename}`;
        uploadFile(media, path);
        inputs = {
          ...inputs,
          media: `${process.env.MEDIA_ENDPOINT}/${filename}`,
        };
      }
      new PostModel({ ...inputs }).save((err, post) => {
        if (err) return reject(err);
        return resolve(post);
      });
    }),
  addComment: (root, { input }, { user, role }) => {
    return new Promise((resolve, reject) => {
      if (!!!input.post) return reject("POST NOT FOUND");
      new CommentModel({ ...input, createdBy: user.id }).save(
        (err, comment) => {
          if (err || !!!comment) return reject(err);
          const { post } = input;
          PostModel.updateOne(
            { id: post },
            {
              $push: { comments: comment.id },
            }
          ).exec((errP, PostComment) => {
            PostModel.findById(post).then((posti: any) => {
              let body = `${user.lastName} ${user.firstName} commented your post on ${posti.project?.name}`;
              const inputNotif = { body, userWall: posti?.createdBy?.id,project:posti?.project?.id };
              if(user.id !== posti?.createdBy?.id)
              {new NotficationModel(inputNotif).save();}
              return resolve(comment);
            });
          });
        }
      );
    });
  },
  deleteComment: (r, { id }) => {
    CommentModel.findById(id).then((comm: any) => {
      comm.remove();
    });
  },
  updateComment: (r, { id, input }) => {
    CommentModel.findById(id).then((comm: any) => {
      comm.body = input.body;
      comm.save();
    });
  },
  addLike: (root, { post }, { user, role }) => {
    return new Promise((resolve, reject) => {
      if (!!!post) return reject("POST NOT FOUND");
      PostModel.updateOne(
        { id: post },
        {
          $push: { likes: user.id },
        }
      ).exec((err, res) => {
        resolve(PostModel.findOne({ id: post }));
      });
    });
  },
  deletePost: (root, { post }, { user, role }) => {
    console.log({post});
    return PostModel.findById(post).then((post: any) => {
      return post.remove();
    });
  },
  updatePost: (root, { id, input }, { user, role }) => {
    PostModel.findById(id).then((post: any) => {
      post.body = input.body;
      post.save();
    });
  },
  updateNotifications:(r,{},{user})=>{
      NotficationModel.updateMany({
        userWall:user?.id
      },{
        $set:{
          readed:true
        }
      }).exec()
  },
  addQuestion:(r,{input},{user})=>new Promise((resolve,reject)=>{
    const {question,project} =input;
    let inputs :any={question,project,userWall:user?.id};
    new FivePointModel({
      ...inputs
    }).save((err,ques)=>{
        if(err) return reject(err);
        return resolve(ques);
    })
  })
};
