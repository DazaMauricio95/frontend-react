import { FormikHelpers } from "formik";
import { MUIDataTableColumnDef } from "mui-datatables";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { stateSelector, typeValuesRentals } from "../@types";
export const UseHookRentals = () => {
  const {
    loadingRental,
    disabledRental,
    responseRentals,
    dataRentals,
    messageRental,
  } = useSelector((state: stateSelector) => state.rentalsReducer);
  const [numPage, setNumPage] = useState<number>(1);
  // IdRent: number
  // Fkidbook: number
  // Fkiduser: number
  // rentDate: string
  // returnDate: string
  // statusRent: number
  // created_at: string
  // updated_at: string
  // nameUser: string
  // nameBook: string
  // author: string
  // publicationDate: string
  const columns: MUIDataTableColumnDef[] = [
    {
      name: "nameUser",
      label: "Usuario Prestamo",
      options: {
        display: false,
        filter: false,
        viewColumns: false,
      },
    },
  ];

  function handleNextPage(event: ChangeEvent<unknown>, value: number) {
    setNumPage(value);
  }

  const formDataRent: typeValuesRentals = {
    Fkidbook: null,
    name: "",
    lastname: "",
    rentDate: "",
    returnDate: "",
  };

  const formSchemaRent = Yup.object().shape({
    Fkidbook: Yup.number()
      .nullable()
      .required("El libro no ha sido seleccionado."),
    name: Yup.string().required("Nombre del usuario requerido."),
    lastname: Yup.string().required("Apellido del usuario requerido."),
    rentDate: Yup.string().required("Fecha de alquiler requerido."),
    returnDate: Yup.string().required("Fecha de devolución requerido."),
  });

  function formAddRent(
    values: typeValuesRentals,
    actionFormik: FormikHelpers<typeValuesRentals>,
    handleCloseModal: any
  ) {
    console.log("handle rent:", values);
    // delete values.valueCategory;
    // dispatch(actionsBooks.addBook(values, actionFormik, handleCloseModal));
  }

  return {
    loadingRental,
    disabledRental,
    responseRentals,
    dataRentals,
    messageRental,
    numPage,
    columns,
    handleNextPage,
    formDataRent,
    formSchemaRent,
    formAddRent,
  };
};
