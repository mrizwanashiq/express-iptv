import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controllers.getAll);
router.get("/:id", authenticate, controllers.getById);
router.post("/", authenticate, validate(authValidation.add), controllers.add);
router.post("/login", validate(authValidation.login), controllers.login);
router.post("/registration", validate(authValidation.registration), controllers.registration);
router.patch("/:id", authenticate, validate(authValidation.patch), controllers.patch);
router.delete("/:id", authenticate, validate(authValidation.delete), controllers.delete);

export default router;
