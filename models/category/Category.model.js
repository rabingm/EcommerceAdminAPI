import catSchema from "./Category.schema.js";


export const insertCategory  = catObj =>{
    return new Promise(async(resolve, reject)=>{

        try {
            const result = await catSchema(catObj).save()

            resolve(result)
        } catch (error) {
            reject(error)
            
        }
    }
    )}

    export const getCategory  = () =>{
        return new Promise(async(resolve, reject)=>{
    
            try {
                const result = await  catSchema.find()
    
                resolve(result)
            } catch (error) {
                reject(error)
                
            }
        }
        )}