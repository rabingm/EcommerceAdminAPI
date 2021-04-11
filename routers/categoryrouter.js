import express from "express"
const router = express.Router();



import { insertCategory, getCategory } from "../models/category/Category.model.js";

router.all("*", (res, req, next)=>{
    next()
})

router.get("/", async(req, res)=>{

try {
    const result = await getCategory()

    res.json({
        status:"success",
        messgae:"Fetching success",
        result,
    })
} catch (error) {
    console.log(error)
    throw new Error(error.messgae)
}

})

router.post("/", async(req, res)=>{

    try {
        const result = await insertCategory(
            req.body
        )
    
        res.json({
            status:"success",
            messgae:"Insert success",
            result,
        })
    } catch (error) {
        console.log(error)
        throw new Error(error.messgae)
    }
})

export default router;