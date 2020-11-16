import { Router } from "express";
import Token from "../tools/token";
import { UserRole } from "../tools/constant";
import { UserModel, UserWallModel } from "../models";
import ErrorMsg from "../../errorMessages";
export const AuthRouter = Router();
AuthRouter.post("/login/visitor", (req, res, next) => {
  Token.generate({ role: UserRole.VISITOR }).then((token) => {
    res.end(JSON.stringify({ success: true, token }, null, 5));
  });
});

AuthRouter.post("/login/admin", (req, res, next) => {
  let { email, password } = req.body;

  if (email && password) {
    email = email.trim();
    UserModel.findOne({ email, ref: "admins" }).then((user) => {
      if (!user) {
        return res.end(
          JSON.stringify(
            { success: false, message: ErrorMsg.userNotFound },
            null,
            5
          )
        );
      }
      if (!(user as any).isValidPassword(password)) {
        return res.end(
          JSON.stringify(
            { success: false, fieldError: ErrorMsg.auth.invalidPassword },
            null,
            5
          )
        );
      }
      Token.generate({ id: user.id, role: UserRole.ADMIN })
        .then((token) => {
          return res.end(JSON.stringify({ success: true, token }, null, 5));
        })
        .catch((err) => next(err));
    });
  } else {
    return res.end(
      JSON.stringify(
        { success: false, fieldError: ErrorMsg.invalidEmail },
        null,
        5
      )
    );
  }
});
AuthRouter.get("/regsiter/mail-exist",async (req, res, next) => {
  const {email} =req.body;
  UserModel.find

})
AuthRouter.post("/register/userWall", async (req, res, next) => {
  const body = req.body;
  if (body) {
    const { email, password, lastName, firstName, userName } = body;
    if (!email || !password) {
      return res.end(
        JSON.stringify({ success: false, error: "Email and password required" })
      );
    }
    const user = await UserModel.findOne({ email });
    if (user)
      return res.end(JSON.stringify({ succes: false, error: "Email exist" }));
    new UserModel({ email, password,ref:UserRole.usersWall}).save((err, user) => {
      if (err || !user) return res.end(JSON.stringify(err));
      new UserWallModel({ firstName, lastName, profile: user?.id }).save(
        (er, wall) => {
          if (er || !wall) return res.end(JSON.stringify(er));
          return res.end(JSON.stringify({ success: true, wall }));
        }
      );
    });
  }
});

AuthRouter.post("/login/userwall", (req, res, next) => {
  let { email, password } = req.body;
  if (email && password) {
    email = email.trim();
    UserModel.findOne({ email, ref: "usersWall" }).then(async (user) => {
      if (!user) {
        return res.end(
          JSON.stringify(
            { success: false, message: ErrorMsg.userNotFound },
            null,
            5
          )
        );
      }
      if (!(user as any).isValidPassword(password)) {
        return res.end(
          JSON.stringify(
            { success: false, fieldError: ErrorMsg.auth.invalidPassword },
            null,
            5
          )
        );
	  }
	  const wall =await UserWallModel.findOne({profile:user?.id})
      Token.generate({ id: user.id,userWallId:wall?.id, role: UserRole.usersWall })
        .then((token) => {
          return res.end(JSON.stringify({ success: true, token }, null, 5));
        })
        .catch((err) => next(err));
    });
  } else {
    return res.end(
      JSON.stringify(
        { success: false, fieldError: ErrorMsg.invalidEmail },
        null,
        5
      )
    );
  }
});
AuthRouter.post("/login/check-token", (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.sendStatus(401);
  }
  Token.ensure(token)
    .then((payload) => {
      return res.end(JSON.stringify({ success: true, payload }, null, 5));
    })
    .catch((err) => res.sendStatus(401));
});
export default AuthRouter;
