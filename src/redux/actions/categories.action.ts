import { Dispatch } from "redux";
import { constantsCategories } from "../constants";
import { servicesCategories } from "../services";

function paginationCategories(numPage: number) {
  return async (dispatch: Dispatch) => {
    dispatch(constantsCategories.BEGIN_CATEGORY());
    try {
      const response = await servicesCategories.getCategories(numPage);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(constantsCategories.PAGINATION_CATEGORIES(response.data));
      } else {
        dispatch(constantsCategories.FAILURE_CATEGORY());
      }
    } catch (error) {
      dispatch(constantsCategories.FAILURE_CATEGORY());
      throw error;
    }
  };
}

function getCategories() {
  return async (dispatch: Dispatch) => {
    dispatch(constantsCategories.BEGIN_CATEGORY());
    try {
      const response = await servicesCategories.getCategories("all");
      if (typeof response.isAxiosError === "undefined") {
        dispatch(constantsCategories.ALL_CATEGORIES(response.data));
      } else {
        dispatch(constantsCategories.FAILURE_CATEGORY());
      }
    } catch (error) {
      dispatch(constantsCategories.FAILURE_CATEGORY());
      throw error;
    }
  };
}

export const actionsCategories = {
  paginationCategories,
  getCategories,
};
