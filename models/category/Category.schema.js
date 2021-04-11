import mongoose from "mongoose"


const CategorySchema = mongoose.Schema({
name :{
    type:String,
    require:true,
    default:"",

},
parentCat :{
    type:String,
    require:true,
    default:"",
    
},
// childCats:[
//     {
//         name :{
//             type:String,
//             require:true,
//             default:"",
        
//         },
//     }
// ]

});
timestamps : true;


const catSchema = mongoose.model("Category", CategorySchema)


export default catSchema