import { createAction } from "redux-actions"
export const constantsRegister = {
    BEGIN_REGISTER: createAction("BEGIN_REGISTER"),
    SUCCESS_REGISTER: createAction("SUCCESS_REGISTER"),
    FAILURE_REGISTER: createAction("FAILURE_REGISTER")
}