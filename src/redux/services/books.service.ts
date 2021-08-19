import { typeValuesBook } from "../../@types";
import { API } from "../../config";

async function postBooks(values: typeValuesBook) {
  try {
    let json = JSON.stringify(values);
    const response = await API.post("auth/books", { json: json });
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getBooks(page: number | "all") {
  try {
    const response = await API.get("auth/books?page=" + page);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function showBooks(id: number) {
  try {
    const response = await API.get("auth/books/" + id);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function putBooks(values: typeValuesBook, id: number) {
  try {
    let json = JSON.stringify(values);
    // return json;
    const response = await API.put("auth/books/" + id, { json: json });
    return response.data;
  } catch (error) {
    return error;
  }
}

async function deleteBooks(id: number) {
  try {
    const response = await API.delete("auth/books/" + id);
    return response.data;
  } catch (error) {
    return error;
  }
}
export const servicesBooks = {
  postBooks,
  getBooks,
  showBooks,
  putBooks,
  deleteBooks,
};
