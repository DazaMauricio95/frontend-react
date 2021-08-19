import { createFilterOptions } from "@material-ui/lab";
import { typeOption } from "../@types";

export * from "./theme";
export * from "./history";
export * from "./privateRoute";
export * from "./publicRoute";
export * from "./file";
export * from "./modal";

export const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: typeOption) => option.text,
});
