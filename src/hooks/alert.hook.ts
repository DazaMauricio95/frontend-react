import { useSelector } from "react-redux";
import { stateSelector } from "../@types";
export function UseHookAlert() {
  const { valuesAlert } = useSelector(
    (state: stateSelector) => state.alertReducer
  );
  return { valuesAlert };
}
