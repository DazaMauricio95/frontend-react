import { typeOption } from "./options.type";

export type typeInitialBooksReducer = {
  loadingBook: boolean;
  disabledBook: boolean;
  responseBooks: responseBooks;
  dataBooks: dataBooks[];
  messageBooks: typeMessageBook;
};

export type typeMessageBook = {
  message: string;
  data: dataBooks;
};

export type dataBooks = {
  IdBook: number;
  nameBook: string;
  author: string;
  publicationDate: string;
  Fkidcategory: number;
  Fkidcreador: number;
  statusRent: number;
  active: number;
  created_at: string;
  updated_at: string;
  nameCategory: string;
  description: string;
  nameCreator: string;
  nameUser: string;
};

export type responseBooks = {
  current_page: number;
  data: dataBooks[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: [
    {
      url: string | null;
      label: string;
      active: boolean;
    },
    {
      url: string;
      label: string;
      active: boolean;
    },
    {
      url: string | null;
      label: string;
      active: boolean;
    }
  ];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
};

export type typeValuesBook = {
  nameBook: string;
  author: string;
  publicationDate: string;
  Fkidcategory: number | null;
  Fkidcreador: number | null;
  valueCategory?: typeOption;
};
