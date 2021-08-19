import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { Formik, Form, FormikHelpers } from "formik";
import { typeValuesRentals } from "../../@types";
import UseStyles from "../../styles";
import { Transition } from "../../utils";
type ModalProps = {
  openModal: boolean;
  handleCloseModal: (type: string) => void;
  loadingRental: boolean;
  formAddRent: (
    values: typeValuesRentals,
    actionFormik: FormikHelpers<typeValuesRentals>,
    handleCloseModal: any
  ) => void;
  formDataRent: typeValuesRentals;
  formSchemaRent: any;
};
const ModalRent = ({ ...props }: ModalProps) => {
  const classes = UseStyles();
  const {
    openModal,
    handleCloseModal,
    loadingRental,
    formAddRent,
    formDataRent,
    formSchemaRent,
  } = props;
  return (
    <Dialog
      fullScreen
      open={openModal}
      onClose={() => handleCloseModal("rent")}
      TransitionComponent={Transition}
    >
      <Formik
        enableReinitialize
        initialValues={{ ...formDataRent }}
        onSubmit={(values, actions) =>
          formAddRent(values, actions, handleCloseModal)
        }
        validationSchema={formSchemaRent}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <AppBar className={classes.appBar} style={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => handleCloseModal("rent")}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography component="p" style={{ flex: 1 }}>
                  Alquilar libro
                </Typography>
                <Button
                  disabled={loadingRental}
                  type="submit"
                  variant="contained"
                >
                  Guardar{" "}
                  {loadingRental && <CircularProgress color="inherit" />}
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem>
                <TextField
                  id="name"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  error={errors.name ? true : false}
                  margin="normal"
                  placeholder="Nombre"
                  type="name"
                  fullWidth
                  helperText={errors.name ? errors.name : ""}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <TextField
                  id="lastname"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={values.lastname}
                  onChange={(e) => setFieldValue("lastname", e.target.value)}
                  error={errors.lastname ? true : false}
                  margin="normal"
                  placeholder="Apellidos"
                  type="lastname"
                  fullWidth
                  helperText={errors.lastname ? errors.lastname : ""}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <TextField
                  id="rentDate"
                  label="Fecha de alquiler"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.rentDate}
                  onChange={(e) => setFieldValue("rentDate", e.target.value)}
                  error={errors.rentDate ? true : false}
                  helperText={errors.rentDate}
                  autoComplete="off"
                  type="date"
                  inputProps={{
                    autoComplete: "off",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <TextField
                  id="returnDate"
                  label="Fecha de devolución"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.returnDate}
                  onChange={(e) => setFieldValue("returnDate", e.target.value)}
                  error={errors.returnDate ? true : false}
                  helperText={errors.returnDate}
                  autoComplete="off"
                  type="date"
                  inputProps={{
                    autoComplete: "off",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </ListItem>
            </List>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ModalRent;
