import express from "express";
import { home } from "../controller/controller";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
