import { createAction } from "redux-actions"
export const constantsLogin = {
    BEGIN_LOGIN: createAction("BEGIN_LOGIN"),
    SUCCESS_LOGIN: createAction("SUCCESS_LOGIN"),
    LOGOUT_LOGIN: createAction("LOGOUT_LOGIN"),
    FAILURE_LOGIN: createAction("FAILURE_LOGIN"),
    CLEAR_LOGIN: createAction("CLEAR_LOGIN"),
}