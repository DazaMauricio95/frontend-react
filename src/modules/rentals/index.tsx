import { withRouter } from "react-router-dom";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Pagination } from "@material-ui/lab";
import UseStyles from "../../styles";
import { UseHookRentals } from "../../hooks";
import { useEffect } from "react";

const RentalsModules = () => {
  const classes = UseStyles();
  const {
    responseRentals,
    columns,
    loadingRental,
    numPage,
    handleNextPage,
    callbackRentals,
  } = UseHookRentals();
  useEffect(() => {
    callbackRentals();
  }, [callbackRentals]);
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
            print: false,
            download: false,
            viewColumns: false,
            filterType: "dropdown",
            pagination: false,
            searchPlaceholder: "Buscar...",
            fixedHeader: true,
            fixedSelectColumn: false,
            tableBodyHeight: 450 + "px",
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
              },
              pagination: {
                rowsPerPage: "Filas por página",
                displayRows: "de",
                previous: "Página anterior",
                next: "Siguiente Página",
                jumpToPage: "Saltar a la página",
              },
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

export default withRouter(RentalsModules);
