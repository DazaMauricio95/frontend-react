import { Dispatch } from "redux"
import { constantsTheme } from "../constants"
const changeTheme = (theme:boolean) => (dispatch:Dispatch) => {
  dispatch(constantsTheme.SET_THEME(theme))
}
export const themeActions = {
  changeTheme
}