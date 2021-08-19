import { MUIDataTableColumnDef } from "mui-datatables";
import { Box, IconButton, Chip, Tooltip } from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  LibraryBooks as LibraryIcon,
} from "@material-ui/icons";
import * as Yup from "yup";
import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateSelector, typeValuesBook } from "../@types";
import { actionsBooks } from "../redux/actions";
import { modelUser } from "../models";
import { FormikHelpers } from "formik";
export const UseHookBooks = () => {
  const dispatch = useDispatch();
  const { loadingBook, disabledBook, responseBooks, dataBooks, messageBooks } =
    useSelector((state: stateSelector) => state.booksReducer);
  const [numPage, setNumPage] = useState<number>(1);
  const [idBook, setIdBook] = useState<number>(0);
  const [openModal, setOpenModal] = useState({ type: "", open: false });

  const callbackBooks = useCallback(
    async () => dispatch(actionsBooks.paginationBooks(numPage)),
    [dispatch, numPage]
  );
  function handleOpenModal(type: string) {
    setOpenModal({ type: type, open: true });
  }

  function handleCloseModal(type: string) {
    setOpenModal({ type: type, open: false });
  }

  function openModalEdit(id: number) {
    setIdBook(id);
    dispatch(actionsBooks.showBook(id, handleOpenModal));
  }

  const columns: MUIDataTableColumnDef[] = [
    {
      name: "nameBook",
      label: "Libro",
    },
    {
      name: "author",
      label: "Autor",
    },
    {
      name: "publicationDate",
      label: "Fecha publicación",
    },
    {
      name: "nameCategory",
      label: "Categoría",
    },
    {
      name: "statusRent",
      label: "Estado",
      options: {
        sort: false,
        filter: false,
        viewColumns: false,
        customBodyRender: (value, tableMeta) => {
          if (value === 1) {
            return <Chip label="Libre" color="primary" variant="outlined" />;
          } else {
            return (
              <Chip label="Alquilado" color="secondary" variant="outlined" />
            );
          }
        },
      },
    },
    {
      name: "nameUser",
      label: "Alquilado por:",
    },
    {
      name: "IdBook",
      label: "Acciones",
      options: {
        sort: false,
        filter: false,
        viewColumns: false,
        customBodyRender: (value, tableMeta) => {
          let nameBook = tableMeta.rowData[0];
          return (
            <Box display="flex">
              <Tooltip title={"Editar el libro " + nameBook}>
                <IconButton
                  size="small"
                  aria-label="edit"
                  onClick={() => openModalEdit(value)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Eliminar libro" + nameBook}>
                <IconButton
                  size="small"
                  aria-label="delete"
                  onClick={() => dispatch(actionsBooks.deleteBook(value))}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Alquilar " + nameBook}>
                <IconButton
                  size="small"
                  aria-label="rent"
                  onClick={() => {
                    console.log(value, tableMeta), handleOpenModal("rent");
                  }}
                >
                  <LibraryIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          );
        },
      },
    },
  ];

  function handleNextPage(event: ChangeEvent<unknown>, value: number) {
    setNumPage(value);
  }
  const formDataBook: typeValuesBook = {
    nameBook: openModal.type === "add" ? "" : messageBooks.data.nameBook,
    author: openModal.type === "add" ? "" : messageBooks.data.author,
    publicationDate:
      openModal.type === "add" ? "" : messageBooks.data.publicationDate,
    Fkidcategory:
      openModal.type === "add" ? null : messageBooks.data.Fkidcategory,
    Fkidcreador:
      openModal.type === "add" ? modelUser.id : messageBooks.data.Fkidcreador,
    valueCategory: {
      value: messageBooks.data.Fkidcategory,
      text: messageBooks.data.nameCategory,
    },
  };
  const formSchemaBook = Yup.object().shape({
    nameBook: Yup.string().required("Nombre del libro requerido."),
    author: Yup.string().required("Nombre del autor requerido."),
    publicationDate: Yup.string().required("Fecha de publicación requerido."),
    Fkidcategory: Yup.number().nullable().required("Seleccione la categoría"),
    Fkidcreador: Yup.number().nullable().required("Seleccione el creador"),
  });

  function formAddBook(
    values: typeValuesBook,
    actionFormik: FormikHelpers<typeValuesBook>,
    handleCloseModal: any
  ) {
    delete values.valueCategory;
    dispatch(actionsBooks.addBook(values, actionFormik, handleCloseModal));
  }

  function formEditBook(
    values: typeValuesBook,
    actionFormik: FormikHelpers<typeValuesBook>,
    id: number,
    handleCloseModal: any
  ) {
    delete values.valueCategory;
    dispatch(actionsBooks.editBook(values, actionFormik, id, handleCloseModal));
  }

  return {
    loadingBook,
    disabledBook,
    responseBooks,
    dataBooks,
    messageBooks,
    columns,
    numPage,
    handleNextPage,
    callbackBooks,
    openModal,
    handleOpenModal,
    handleCloseModal,
    formDataBook,
    formSchemaBook,
    formAddBook,
    formEditBook,
    idBook,
  };
};
