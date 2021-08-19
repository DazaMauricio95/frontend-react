import { handleActions, Action } from "redux-actions"
import { typeInitialRegisterReducer } from "../../@types"
import { constantsRegister } from "../constants"
const initialState: typeInitialRegisterReducer = {
    loadingRegister: false,
    disabledRegister: false,
    payloadRegister: {}
}
const registerReducer = handleActions(
    new Map([
        [
            constantsRegister.BEGIN_REGISTER,
            (state: any = initialState, action: Action<{}>) => ({
                ...state,
                loadingRegister: true,
                disabledRegister: true,
                action: action.type
            })
        ],
        [
            constantsRegister.SUCCESS_REGISTER,
            (state: any = initialState, action: Action<{}>) => ({
                ...state,
                loadingRegister: false,
                disabledRegister: false,
                payloadRegister: action.payload,
                action: action.type
            })
        ],
        [
            constantsRegister.FAILURE_REGISTER,
            (state: any = initialState, action: Action<{}>) => ({
                ...state,
                loadingRegister: false,
                disabledRegister: false,
                action: action.type
            })
        ]
    ]) as any, initialState
);
export default registerReducer;