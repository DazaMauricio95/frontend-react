import { handleActions, Action } from "redux-actions";
import { responseBooks, typeInitialBooksReducer } from "../../@types";
import { constantsBooks } from "../constants";
const initialResponse: responseBooks = {
  current_page: 1,
  data: [],
  first_page_url: "",
  from: null,
  last_page: 1,
  last_page_url: "",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "",
      label: "1",
      active: true,
    },
    {
      url: null,
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: null,
  path: "",
  per_page: 10,
  prev_page_url: null,
  to: null,
  total: 0,
};
const initialState: typeInitialBooksReducer = {
  loadingBook: false,
  disabledBook: false,
  responseBooks: initialResponse,
  dataBooks: [],
  messageBooks: {
    message: "",
    data: {
      IdBook: 0,
      nameBook: "",
      author: "",
      publicationDate: "",
      Fkidcategory: 0,
      Fkidcreador: 0,
      statusRent: 0,
      active: 0,
      created_at: "",
      updated_at: "",
      nameCategory: "",
      description: "",
      nameCreator: "",
      nameUser: "",
    },
  },
};
const booksReducer = handleActions(
  new Map([
    [
      constantsBooks.BEGIN_BOOK,
      (state = initialState, action: Action<any>) => ({
        ...state,
        loadingBook: true,
        disabledBook: true,
      }),
    ],
    [
      constantsBooks.PAGINATION_BOOKS,
      (state = initialState, action: Action<any>) => ({
        ...state,
        loadingBook: false,
        disabledBook: false,
        responseBooks: action.payload,
      }),
    ],
    [
      constantsBooks.ALL_BOOKS,
      (state = initialState, action: Action<any>) => ({
        ...state,
        loadingBook: false,
        disabledBook: false,
        dataBooks: action.payload,
      }),
    ],
    [
      constantsBooks.SUCCESS_BOOK,
      (state = initialState, action: Action<any>) => ({
        ...state,
        loadingBook: false,
        disabledBook: false,
        messageBooks: action.payload,
      }),
    ],
    [
      constantsBooks.FAILURE_BOOK,
      (state = initialState, action: Action<any>) => ({
        ...state,
        loadingBook: false,
        disabledBook: false,
      }),
    ],
  ]) as any,
  initialState
);
export default booksReducer;
