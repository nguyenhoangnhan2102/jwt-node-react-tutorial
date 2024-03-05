import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */

const initWebRoute = (app) => {
    router.get("/", homeController.handleHellWorld)
    router.get("/user", homeController.handleUserPage)

    return app.use("/", router);
};

export default initWebRoute;