import { FormikHelpers } from "formik";
import { Dispatch } from "redux";
import { typeValuesRentals } from "../../@types";
import { constantsRentals } from "../constants";
import { servicesRentals } from "../services";
import { actionsBooks } from "./books.action";
// import {} from "../constants";
// import {} from "../services";

function paginationRentals(numPage: number) {
  return async (dispatch: Dispatch) => {};
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
        console.log(response.message);
        dispatch(actionsBooks.paginationBooks(1));
        dispatch(constantsRentals.SUCCESS_RENTALS(response));
        handleCloseModal("rent");
        actionFormik.resetForm();
      } else {
        console.log("error", response.response.data.message);
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
