import express from "express";
import { AddImage, AllUploads } from "../controllers/upload.js";


const UploadRouter = express.Router()


UploadRouter.get("/", AllUploads)
UploadRouter.post("/add", AddImage)

export default UploadRouter