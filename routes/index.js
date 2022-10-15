import express from "express";

// routes
import userRoute from "./user/index.js";
import streamRoute from './stream/index.js'
import genreRoute from './genre/index.js'
import seriesRoute from './series/index.js'
import seasonRoute from './season/index.js'
import episodeRoute from './episode/index.js'

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/stream", streamRoute);
protectedRouter.use("/genre", genreRoute);
protectedRouter.use("/series", seriesRoute);
protectedRouter.use("/season", seasonRoute);
protectedRouter.use("/episode", episodeRoute);

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);

export { protectedRouter, unProtectedRouter };
