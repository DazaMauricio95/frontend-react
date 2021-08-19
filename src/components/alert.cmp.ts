import { notification } from "antd";
import { stateAlert } from "../@types";
export function openAlert({ ...props }: stateAlert) {
  const { message, description, duration, type, placement } = props;
  notification.open({
    message: message,
    description: description,
    duration: duration,
    type: type,
    placement: placement,
  });
}
