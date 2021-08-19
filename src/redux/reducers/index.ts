import { combineReducers } from "redux"
import themeReducer from "./theme.reducer"
import loginReducer from './login.reducer'
import registerReducer from './register.reducer'
import booksReducer from "./books.reducer"
import categoriesReducer from "./categories.reducer"
import rentalsReducer from './rentals.reducer'
const rootReducers = combineReducers({
  themeReducer,
  loginReducer,
  registerReducer,
  booksReducer,
  categoriesReducer,
  rentalsReducer
})
export default rootReducers;