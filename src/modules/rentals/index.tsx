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
import UseStyles from "../../styles";
import { UseHookRentals } from "../../hooks";

const index = () => {
  const classes = UseStyles();
  const { responseRentals, columns, loadingRental, numPage, handleNextPage } =
    UseHookRentals();
  return (
    <Grid container className={classes.rootPage}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MUIDataTable
          data={responseRentals.data}
          columns={columns}
          title={
            <div style={{ display: "flex" }}>
              <Typography>Alquileres</Typography>{" "}
              {loadingRental && <CircularProgress color="inherit" />}
            </div>
          }
          options={{
            responsive: "standard",
            filter: false,
            filterType: "dropdown",
            pagination: false,
            searchPlaceholder: "Buscar...",
            fixedHeader: true,
            fixedSelectColumn: false,
            tableBodyHeight: 600 + "px",
            selectableRows: undefined,
            textLabels: {
              body: {
                noMatch: loadingRental ? (
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
                <Tooltip title="Alquelar libro">
                  <IconButton
                    size="medium"
                    // onClick={handleOpenFullMdl}
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
                          count={responseRentals.last_page}
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
    </Grid>
  );
};

export default withRouter(index);
