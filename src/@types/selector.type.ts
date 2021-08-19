import { typeInitialTheme, typeInitialLoginReducer, typeInitialRegisterReducer, typeInitialBooksReducer, typeInitialCategoriesReducer, typeInitialRentalsReducer } from "./";
export type stateSelector = {
    themeReducer: typeInitialTheme
    loginReducer: typeInitialLoginReducer
    registerReducer: typeInitialRegisterReducer
    booksReducer: typeInitialBooksReducer
    categoriesReducer : typeInitialCategoriesReducer
    rentalsReducer: typeInitialRentalsReducer
}