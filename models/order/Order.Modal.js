import Odrschema from "./Order.schema.js";

export const getOders = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await Odrschema.find();

			resolve(result);

			console.log("from order",result)
		} catch (error) {
			reject(error);
		}
	});
};
