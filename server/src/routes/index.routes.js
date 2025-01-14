import { errorHandler, notFound } from "../middlewares/error.middleware.js";
import authRouter from "./auth.routes.js";

const initialRouter = (app) => {
  app.use("/api/auth", authRouter);

  app.use(notFound);
  app.use(errorHandler);
};

export default initialRouter;
