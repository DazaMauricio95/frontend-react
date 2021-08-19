import { withRouter } from "react-router-dom";
import {
  Grid,
  IconButton,
  Tooltip,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Pagination } from "@material-ui/lab";
import { Add as AddIcon } from "@material-ui/icons";
import { UseHookBooks, UseHookCategories, UseHookRentals } from "../../hooks";
import UseStyles from "../../styles";
import { useEffect } from "react";
import ModalAdd from "./modal.add";
import ModalEdit from "./modal.edit";
import ModalRent from "./modal.rent";
const BooksModule = () => {
  const classes = UseStyles();
  const {
    loadingBook,
    responseBooks,
    columns,
    numPage,
    handleNextPage,
    callbackBooks,
    openModal,
    handleCloseModal,
    handleOpenModal,
    formDataBook,
    formSchemaBook,
    formAddBook,
    formEditBook,
    idBook,
  } = UseHookBooks();
  const { optionsCategories, callbackAllCategories, loadingCategory } =
    UseHookCategories();
  const { loadingRental, formAddRent, formDataRent, formSchemaRent } =
    UseHookRentals();
  useEffect(() => {
    callbackBooks();
  }, [callbackBooks]);
  return (
    <Grid container className={classes.rootPage}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MUIDataTable
          data={responseBooks.data}
          columns={columns}
          title={
            <div style={{ display: "flex" }}>
              <Typography>Libros</Typography>{" "}
              {loadingBook && <CircularProgress color="inherit" />}
            </div>
          }
          options={{
            responsive: "standard",
            filter: true,
            print: false,
            download: false,
            filterType: "dropdown",
            pagination: false,
            searchPlaceholder: "Buscar...",
            fixedHeader: true,
            fixedSelectColumn: false,
            tableBodyHeight: 450 + "px",
            selectableRows: undefined,
            textLabels: {
              body: {
                noMatch: loadingBook ? (
                  <Typography>Cargando...</Typography>
                ) : (
                  "Lo sentimos, no hay datos coincidentes para mostrar."
                ),
                toolTip: "Clasificar",
                columnHeaderTooltip: (column) =>
                  `Clasificar para ${column.label}`,
              },
              toolbar: {
                search: "Buscar",
                downloadCsv: "Descargar CSV",
                print: "Imprimir",
                viewColumns: "Ver Columnas",
                filterTable: "Filtrar",
              },
              viewColumns: {
                title: "Ver Columnas",
                titleAria: "Mostrar/Ocultar columnas de tabla",
              },
              selectedRows: {
                text: "fila(s) seleccionada",
                delete: "Eliminar",
                deleteAria: "Eliminar filas seleccionadas",
              },
              filter: {
                title: "filtrar",
              },
              pagination: {
                rowsPerPage: "Filas por página",
                displayRows: "de",
                previous: "Página anterior",
                next: "Siguiente Página",
                jumpToPage: "Saltar a la página",
              },
            },
            customToolbar: () => {
              return (
                <Tooltip title="Agregar un libro">
                  <IconButton
                    size="medium"
                    onClick={() => handleOpenModal("add")}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              );
            },
            customFooter: () => {
              return (
                <tfoot>
                  <tr>
                    <td>
                      <Grid component="div">
                        <Pagination
                          page={numPage}
                          count={responseBooks.last_page}
                          onChange={handleNextPage}
                          variant="outlined"
                          color="secondary"
                          shape="rounded"
                          style={{
                            float: "right",
                            padding: 10,
                            position: "relative",
                          }}
                        />
                      </Grid>
                    </td>
                  </tr>
                </tfoot>
              );
            },
          }}
        />
      </Grid>
      {openModal.type === "add" ? (
        <ModalAdd
          openModal={openModal.open}
          handleCloseModal={() => handleCloseModal("add")}
          formAddBook={formAddBook}
          formSchemaBook={formSchemaBook}
          formDataBook={formDataBook}
          loadingCategory={loadingCategory}
          callbackAllCategories={callbackAllCategories}
          optionsCategories={optionsCategories}
          loadingBook={loadingBook}
        />
      ) : openModal.type === "edit" ? (
        <ModalEdit
          openModal={openModal.open}
          handleCloseModal={() => handleCloseModal("edit")}
          formEditBook={formEditBook}
          formSchemaBook={formSchemaBook}
          formDataBook={formDataBook}
          loadingCategory={loadingCategory}
          callbackAllCategories={callbackAllCategories}
          optionsCategories={optionsCategories}
          idBook={idBook}
          loadingBook={loadingBook}
        />
      ) : (
        <ModalRent
          openModal={openModal.open}
          handleCloseModal={() => handleCloseModal("rent")}
          loadingRental={loadingRental}
          formAddRent={formAddRent}
          formDataRent={formDataRent}
          formSchemaRent={formSchemaRent}
        />
      )}
    </Grid>
  );
};

export default withRouter(BooksModule);
