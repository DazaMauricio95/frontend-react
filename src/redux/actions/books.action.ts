import { FormikHelpers } from "formik";
import { Dispatch } from "redux";
import { typeValuesBook } from "../../@types";
import { constantsAlert, constantsBooks } from "../constants";
import { servicesBooks } from "../services";

function paginationBooks(numPage: number) {
  return async (dispatch: Dispatch) => {
    dispatch(constantsBooks.BEGIN_BOOK());
    try {
      const response = await servicesBooks.getBooks(numPage);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(constantsBooks.PAGINATION_BOOKS(response.data));
      } else {
        dispatch(constantsBooks.FAILURE_BOOK());
      }
    } catch (error) {
      dispatch(constantsBooks.FAILURE_BOOK());
      throw error;
    }
  };
}

function addBook(
  values: typeValuesBook,
  actionFormik: FormikHelpers<typeValuesBook>,
  handleCloseModal: any
) {
  return async (dispatch: any) => {
    dispatch(constantsBooks.BEGIN_BOOK());
    try {
      const response = await servicesBooks.postBooks(values);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(constantsBooks.SUCCESS_BOOK(response));
        dispatch(paginationBooks(1));
        handleCloseModal("add");
        actionFormik.resetForm();
        dispatch(
          constantsAlert.VIEW({
            message: response.message,
            description: "",
            duration: 5,
            placement: "topRight",
            type: "success",
          })
        );
      } else {
        dispatch(constantsBooks.FAILURE_BOOK());
      }
    } catch (error) {
      dispatch(constantsBooks.FAILURE_BOOK());
      throw error;
    }
  };
}

function editBook(
  values: typeValuesBook,
  actionFormik: FormikHelpers<typeValuesBook>,
  id: number,
  handleCloseModal: any
) {
  return async (dispatch: any) => {
    dispatch(constantsBooks.BEGIN_BOOK());
    try {
      const response = await servicesBooks.putBooks(values, id);
      if (typeof response.isAxiosError === "undefined") {
        handleCloseModal("edit");
        dispatch(paginationBooks(1));
        dispatch(constantsBooks.SUCCESS_BOOK(response));
        dispatch(
          constantsAlert.VIEW({
            message: response.message,
            description: "",
            duration: 5,
            placement: "topRight",
            type: "success",
          })
        );
      } else {
        dispatch(constantsBooks.FAILURE_BOOK());
      }
    } catch (error) {
      dispatch(constantsBooks.FAILURE_BOOK());
      throw error;
    }
  };
}

function deleteBook(id: number) {
  return async (dispatch: any) => {
    dispatch(constantsBooks.BEGIN_BOOK());
    try {
      const response = await servicesBooks.deleteBooks(id);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(paginationBooks(1));
        dispatch(constantsBooks.SUCCESS_BOOK(response));
        dispatch(
          constantsAlert.VIEW({
            message: response.message,
            description: "",
            duration: 5,
            placement: "topRight",
            type: "success",
          })
        );
      } else {
        dispatch(constantsBooks.FAILURE_BOOK());
      }
    } catch (error) {
      dispatch(constantsBooks.FAILURE_BOOK());
      throw error;
    }
  };
}

function showBook(id: number, handleCloseModal: any) {
  return async (dispatch: Dispatch) => {
    dispatch(constantsBooks.BEGIN_BOOK());
    try {
      const response = await servicesBooks.showBooks(id);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(constantsBooks.SUCCESS_BOOK(response));
        handleCloseModal("edit");
      } else {
        dispatch(constantsBooks.FAILURE_BOOK());
      }
    } catch (error) {
      dispatch(constantsBooks.FAILURE_BOOK());
      throw error;
    }
  };
}
export const actionsBooks = {
  paginationBooks,
  addBook,
  editBook,
  deleteBook,
  showBook,
};
