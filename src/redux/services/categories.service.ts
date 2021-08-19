import { API } from "../../config";
async function getCategories(page:number|'all') {
    try { 
        const response = await API.get('auth/categories?page='+page);
        return response.data;
    } catch (error) {
        return error;
    }
}
export const servicesCategories = {
    getCategories
}