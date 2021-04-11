import express from "express"
const router = express.Router()



router.all("*", (res, req, next) =>{
    next()
}) 
router.post("/", (req, res) =>{
    console.log(res.body)
    
    res.send({ message:"login requested" });
})
// router.post()

export default router