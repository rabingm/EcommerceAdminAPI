import ConSchema from "./Contact.schema.js";

export const getMessage = () => {
  return new Promise(async(resolve, reject) => {
    try {
      const result = await ConSchema.find()
       
      resolve(result)
    } catch (error) {
      reject(error);
    }
  });
};

// export const getUserById = (_id) => {
//   return new Promise((resolve, reject) => {
//     try {
//       ClientUsers.findById(_id)
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };