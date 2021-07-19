import express from "express";
import {
  contactValidation,
} from "../middlewares/formValidation.middleware.js";

import { getMessage } from "../models/contact/Contact.modal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await getMessage();
    
    console.log("got hit", result);
      res.json({
        status: "success",
        message: "Message retrived successfully",
        result
      });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});

export default router;