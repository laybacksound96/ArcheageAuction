import express from "express";
import morgan from "morgan";
import globalRouter from "./src/router/globalRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/view");
app.use(logger);
// app.use(express.urlencoded({ extended: true }));

app.get("/", globalRouter);

export default app;
