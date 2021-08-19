import {
  typeInitialTheme,
  typeInitialLoginReducer,
  typeInitialRegisterReducer,
  typeInitialBooksReducer,
  typeInitialCategoriesReducer,
  typeInitialRentalsReducer,
  typeInitialAlertReducer,
} from "./";
export type stateSelector = {
  themeReducer: typeInitialTheme;
  loginReducer: typeInitialLoginReducer;
  registerReducer: typeInitialRegisterReducer;
  booksReducer: typeInitialBooksReducer;
  categoriesReducer: typeInitialCategoriesReducer;
  rentalsReducer: typeInitialRentalsReducer;
  alertReducer: typeInitialAlertReducer;
};
