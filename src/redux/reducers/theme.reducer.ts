import { handleActions, Action } from "redux-actions"
import { constantsTheme } from "../constants"
import { typeInitialTheme } from "../../@types"
const initialState:typeInitialTheme = {
  themeIsDark: false
}
const themeReducer = handleActions(
    new Map([
      [
        constantsTheme.SET_THEME,
        (state = initialState, action:Action<boolean>) => {
            return {
                ...state,
                themeIsDark: action.payload,
                type: action.type
            }
        } 
      ]
    ]) as any, initialState
  )
  export default themeReducer