import { Dispatch } from "redux";
import { constantsAlert } from "../constants";
import { stateAlert } from "../../@types";

function alertView({ ...props }: stateAlert) {
  return (dispatch: Dispatch) => {
    dispatch(constantsAlert.VIEW(props));
  };
}

function alertClear() {
  return (dispatch: Dispatch) => {
    dispatch(constantsAlert.CLEAR(null));
  };
}

export const actionsAlerts = {
  alertView,
  alertClear,
};
