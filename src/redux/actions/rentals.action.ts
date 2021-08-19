import { Dispatch } from "redux";
import { typeValuesRentals } from "../../@types";
import { constantsRentals } from "../constants";
// import {} from "../constants";
// import {} from "../services";

function paginationRentals(numPage: number) {
  return async (dispatch: Dispatch) => {};
}

function addRental(value: typeValuesRentals) {
  return async (dispatch: Dispatch) => {
    dispatch(constantsRentals.BEGIN_RENTALS());
  };
}

export const actionsRentals = {
  paginationRentals,
  addRental,
};
