import { typeFormRegister } from "../../@types";
import { API } from "../../config";
async function register(values: typeFormRegister) {
    try {
        let json = JSON.stringify(values);
        const response = await API.post('registerUser', { json: json });
        return response.data;
    } catch (error) {
        return error;
    }
}
export const servicesRegister = {
    register
}