import { createAction } from "redux-actions";
import { stateAlert } from "../../@types";
export const constantsAlert = {
  VIEW: createAction<stateAlert>("NOTIFICATION_VIEW"),
  CLEAR: createAction("NOTIFICATION_CLEAR"),
};
