import { FormikHelpers } from "formik";
import { Chip } from "@material-ui/core";
import { MUIDataTableColumnDef } from "mui-datatables";
import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { stateSelector, typeValuesRentals } from "../@types";
import { actionsRentals } from "../redux/actions";
import UseStyles from "../styles";
export const UseHookRentals = (idBook?: number | null) => {
  const classes = UseStyles();
  const dispatch = useDispatch();
  const {
    loadingRental,
    disabledRental,
    responseRentals,
    dataRentals,
    messageRental,
  } = useSelector((state: stateSelector) => state.rentalsReducer);
  const [numPage, setNumPage] = useState<number>(1);

  const callbackRentals = useCallback(
    async () => dispatch(actionsRentals.paginationRentals(numPage)),
    [dispatch, numPage]
  );

  const columns: MUIDataTableColumnDef[] = [
    {
      name: "nameUser",
      label: "Lector",
    },
    {
      name: "statusRent",
      label: "Estado",
      options: {
        customBodyRender: (value, tableMeta) => {
          if (value === 1) {
            return (
              <Chip
                label="En alquiler"
                className={classes.badgeDanger}
                variant="outlined"
              />
            );
          } else {
            return (
              <Chip
                label="Devuelto"
                className={classes.badgeSuccess}
                variant="outlined"
              />
            );
          }
        },
      },
    },
    {
      name: "nameBook",
      label: "Libro",
    },
    {
      name: "author",
      label: "Autor",
    },
    {
      name: "rentDate",
      label: "Fecha de alquiler",
    },
    {
      name: "returnDate",
      label: "Fecha de devolución",
    },
  ];

  function handleNextPage(event: ChangeEvent<unknown>, value: number) {
    setNumPage(value);
  }
  const d = new Date();

  var datestring =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2);

  const formDataRent: typeValuesRentals = {
    Fkidbook: typeof idBook !== "undefined" ? idBook : null,
    name: "",
    lastname: "",
    rentDate: datestring,
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
    dispatch(actionsRentals.addRental(values, actionFormik, handleCloseModal));
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
    callbackRentals,
  };
};
