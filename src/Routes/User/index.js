import { Router } from "express";
import UserAuthenticationController from "../../controller/user/index.js";

const userAuthenticationRouter = Router();

userAuthenticationRouter.post("/SignUp",UserAuthenticationController.SignUp)

userAuthenticationRouter.post("/SignIn",UserAuthenticationController.SignIn);

export default userAuthenticationRouter;