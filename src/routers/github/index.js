import express from "express";

import MyGithubRoutes from "./me/index.js";

const router = express.Router();

router.use('/me', new MyGithubRoutes().router);

export default router;