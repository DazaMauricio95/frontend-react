import { handleActions, Action } from "redux-actions"
import { typeInitialLoginReducer } from "../../@types"
import { constantsLogin } from "../constants"

const token = localStorage.getItem("@token") ? localStorage.getItem("@token") : null
const authentication = localStorage.getItem("@token") ? true : false

const initialState: typeInitialLoginReducer = {
    authentication: authentication,
    token: token,
    loadingLogin: false,
    disabledLogin: false
}
const loginReducer = handleActions(
    new Map([
        [
            constantsLogin.BEGIN_LOGIN,
            (state: any = initialState, action: Action<{}>) => ({
                ...state,
                loadingLogin: true,
                disabledLogin: true,
                values: action.payload,
                action: action.type
            })
        ],
        [
            constantsLogin.SUCCESS_LOGIN,
            (state: any = initialState, action: Action<{}>) => ({
                ...state,
                authentication  : true,
                loadingLogin    : false,
                disabledLogin   : false,
                token           : action.payload,
                action: action.type
            })
        ],
        [
            constantsLogin.LOGOUT_LOGIN,
            (state: any = initialState, action: Action<{}>) => ({
                ...state,
                authentication: false,
                loadingLogin: false,
                disabledLogin: false,
                action: action.type
            })
        ],
        [
            constantsLogin.FAILURE_LOGIN,
            (state: any = initialState, action: Action<{}>) => ({
                ...state,
                loadingLogin: false,
                disabledLogin: false,
                action: action.type
            })
        ]
    ]) as any, initialState
);
export default loginReducer;