export type typeInitialRentalsReducer = {
  loadingRental: boolean;
  disabledRental: boolean;
  responseRentals: responseRentals;
  dataRentals: dataRentals[];
  messageRental: typeMessageRental;
};

export type typeMessageRental = {
  message: string;
  data: dataRentals;
  updateBook: number;
};

export type dataRentals = {
  IdRent: number;
  Fkidbook: number;
  Fkiduser: number;
  rentDate: string;
  returnDate: string;
  statusRent: number;
  created_at: string;
  updated_at: string;
  nameUser: string;
  nameBook: string;
  author: string;
  publicationDate: string;
};
export type responseRentals = {
  current_page: number;
  data: dataRentals[];
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

export type typeValuesRentals = {
  Fkidbook: number | null;
  name: string;
  lastname: string;
  rentDate: string;
  returnDate: string;
};
