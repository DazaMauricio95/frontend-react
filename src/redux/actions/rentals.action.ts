import { FormikHelpers } from "formik";
import { Dispatch } from "redux";
import { typeValuesRentals } from "../../@types";
import { constantsAlert, constantsRentals } from "../constants";
import { servicesRentals } from "../services";
import { actionsBooks } from "./books.action";

function paginationRentals(numPage: number) {
  return async (dispatch: Dispatch) => {
    dispatch(constantsRentals.BEGIN_RENTALS());
    try {
      const response = await servicesRentals.getRentals(numPage);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(constantsRentals.PAGINATION_RENTALS(response.data));
      } else {
        dispatch(constantsRentals.FAILURE_RENTALS());
      }
    } catch (error) {
      dispatch(constantsRentals.FAILURE_RENTALS());
      throw error;
    }
  };
}

function addRental(
  values: typeValuesRentals,
  actionFormik: FormikHelpers<typeValuesRentals>,
  handleCloseModal: any
) {
  return async (dispatch: any) => {
    dispatch(constantsRentals.BEGIN_RENTALS());
    try {
      const response = await servicesRentals.postRentals(values);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(actionsBooks.paginationBooks(1));
        dispatch(constantsRentals.SUCCESS_RENTALS(response));
        handleCloseModal("rent");
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
        dispatch(constantsRentals.FAILURE_RENTALS());
      }
    } catch (error) {
      dispatch(constantsRentals.FAILURE_RENTALS());
      throw error;
    }
  };
}

export const actionsRentals = {
  paginationRentals,
  addRental,
};
