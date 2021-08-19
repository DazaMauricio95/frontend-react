import { handleActions, Action } from "redux-actions";
import { typeInitialAlertReducer, stateAlert } from "../../@types";
import { constantsAlert } from "../constants";
const initialState: typeInitialAlertReducer = {
  valuesAlert: null,
};
const alertReducer = handleActions(
  new Map([
    [
      constantsAlert.VIEW,
      (state = initialState, action: Action<stateAlert>) => {
        return {
          ...state,
          valuesAlert: action.payload,
        };
      },
    ],
    [
      constantsAlert.CLEAR,
      (state = initialState, action: Action<stateAlert>) => {
        return {
          ...state,
          valuesAlert: action.payload,
        };
      },
    ],
  ]) as any,
  initialState
);
export default alertReducer;
