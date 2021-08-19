import { typeValuesRentals } from "../../@types";
import { API } from "../../config";

async function postRentals(values:typeValuesRentals) {
    try {
        let json = JSON.stringify(values);
        const response = await API.post('auth/rentails', { json: json });
        return response.data;
    } catch (error) {
        return error;
    }
}

async function getRentals(page:number|'all') {
    try { 
        const response = await API.get('auth/rentails?page='+page);
        return response.data;
    } catch (error) {
        return error;
    }
}
export const servicesRentals = {
    postRentals,
    getRentals
}