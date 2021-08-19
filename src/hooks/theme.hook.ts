import { useDispatch, useSelector } from "react-redux"
import { themeActions } from "../redux/actions"
import { stateSelector } from "../@types"

export function UseHookTheme() {
  const dispatch = useDispatch()
  const { themeIsDark } = useSelector((state: stateSelector) => state.themeReducer)

  function changeTheme(value: boolean) {
    dispatch(themeActions.changeTheme(value))
  }

  return {
    themeIsDark,
    changeTheme
  }
}