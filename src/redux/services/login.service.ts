import { typeFormLogin } from "../../@types";
import { API } from "../../config";
async function login(values: typeFormLogin) {
    try {
        let json = JSON.stringify(values);
        const response = await API.post('loginUser', { json: json });
        return response.data;
    } catch (error) {
        return error;
    }
}
async function logout(){ 
    try {
        const response = await API.post('auth/profile/logoutUser'); 
        return response.data; 
    } catch (error) {
        return error;
    }
}
export const servicesLogin = {
    login,
    logout
}