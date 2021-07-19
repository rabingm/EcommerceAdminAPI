import express from "express";
import slugify from "slugify";
import { getOders } from "../models/order/Order.Modal.js"

const router = express.Router()

router.all("*", (req, res, next)=>{
    next()
    console.log("GOT HIT ON ORDER")
})

router.get("/", async (req, res) => {
	try {
		const result = await getOders();

		res.json({
			status: "success",
			message: "Here are all the orders",
			result,
		});
	} catch (error) {
		throw error;
	}
});

export default router