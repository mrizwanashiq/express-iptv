import express from "express";
import validationSchema from "../../validations/stream.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controllers.getAll);
router.get("/getAllEpisodeSeasonSeriesGenre", authenticate, controllers.getAllEpisodeSeasonSeriesGenre);
router.get("/:id", authenticate, validate(validationSchema.getById), controllers.getById);
router.post("/", authenticate, validate(validationSchema.add), controllers.add);
router.patch("/:id", authenticate, validate(validationSchema.patch), controllers.patch);
router.delete("/:id", authenticate, validate(validationSchema.delete), controllers.delete);

export default router;
