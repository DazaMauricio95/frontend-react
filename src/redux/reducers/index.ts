import { combineReducers } from "redux";
import themeReducer from "./theme.reducer";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";
import booksReducer from "./books.reducer";
import categoriesReducer from "./categories.reducer";
import rentalsReducer from "./rentals.reducer";
import alertReducer from "./alert.reducer";
const rootReducers = combineReducers({
  alertReducer,
  themeReducer,
  loginReducer,
  registerReducer,
  booksReducer,
  categoriesReducer,
  rentalsReducer,
});
export default rootReducers;
