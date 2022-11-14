import express from "express";

import { getPhoto } from "../controllers/publicPhoto.js";

const router = express.Router();

router.get("/getPhoto", getPhoto);

export default router; 
