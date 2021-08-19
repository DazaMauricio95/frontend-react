import { ReactNode } from "react";
export type typeIconTypeAlert = "success" | "info" | "error" | "warning";
export type typePlacementAlert =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";
export interface stateAlert {
  message: ReactNode;
  description?: ReactNode;
  duration?: number | null | undefined;
  type?: typeIconTypeAlert;
  placement?: typePlacementAlert;
}
export type typeInitialAlertReducer = {
  valuesAlert: stateAlert | null;
};
