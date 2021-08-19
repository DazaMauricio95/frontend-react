import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Button,
  Typography,
  List,
  ListItem,
  TextField,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Close as CloseIcon } from "@material-ui/icons";
import { Formik, Form, FormikHelpers } from "formik";
import { typeOption, typeValuesBook } from "../../@types";
import UseStyles from "../../styles";
import { filterOptions, Transition } from "../../utils";
import { useEffect, useState } from "react";
import { memo } from "react";
type ModalProps = {
  openModal: boolean;
  handleCloseModal: (type: string) => void;
  formDataBook: typeValuesBook;
  formSchemaBook: any;
  formAddBook: (
    values: typeValuesBook,
    actionFormik: FormikHelpers<typeValuesBook>,
    handleCloseModal: any
  ) => void;
  loadingCategory: boolean;
  optionsCategories: typeOption[];
  callbackAllCategories: () => Promise<void>;
  loadingBook: boolean;
};
const ModalAdd = ({ ...props }: ModalProps) => {
  const classes = UseStyles();
  const [openSelect, setOpenSelect] = useState(false);
  const {
    openModal,
    handleCloseModal,
    formDataBook,
    formAddBook,
    formSchemaBook,
    optionsCategories,
    callbackAllCategories,
    loadingCategory,
    loadingBook,
  } = props;
  useEffect(() => {
    if (openSelect) {
      callbackAllCategories();
    }
  }, [openSelect, callbackAllCategories]);

  return (
    <Dialog
      fullScreen
      open={openModal}
      onClose={() => handleCloseModal("add")}
      TransitionComponent={Transition}
    >
      <Formik
        enableReinitialize
        initialValues={{ ...formDataBook }}
        onSubmit={(values, actions) =>
          formAddBook(values, actions, handleCloseModal)
        }
        validationSchema={formSchemaBook}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <AppBar className={classes.appBar} style={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => handleCloseModal("add")}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography component="p" style={{ flex: 1 }}>
                  Nuevo libro
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loadingBook}
                >
                  Guardar {loadingBook && <CircularProgress color="inherit" />}
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem>
                <TextField
                  id="nameBook"
                  label="Nombre del libro"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.nameBook}
                  onChange={(e) => setFieldValue("nameBook", e.target.value)}
                  error={errors.nameBook ? true : false}
                  helperText={errors.nameBook}
                  autoComplete="off"
                  type="text"
                  inputProps={{
                    autoComplete: "off",
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <TextField
                  id="author"
                  label="Autor"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.author}
                  onChange={(e) => setFieldValue("author", e.target.value)}
                  error={errors.author ? true : false}
                  helperText={errors.author}
                  autoComplete="off"
                  type="text"
                  inputProps={{
                    autoComplete: "off",
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <TextField
                  id="publicationDate"
                  label="Fecha de publicación"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.publicationDate}
                  onChange={(e) =>
                    setFieldValue("publicationDate", e.target.value)
                  }
                  error={errors.publicationDate ? true : false}
                  helperText={errors.publicationDate}
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
                <Autocomplete
                  id="Fkidcategory"
                  options={optionsCategories}
                  open={openSelect}
                  onOpen={() => setOpenSelect(true)}
                  onClose={() => setOpenSelect(false)}
                  getOptionLabel={(option) => option.text}
                  getOptionSelected={(option, value) =>
                    option.text === value.text
                  }
                  noOptionsText="No hay valores"
                  loading={loadingCategory}
                  loadingText="Cargando categorias..."
                  filterOptions={filterOptions}
                  value={
                    typeof values.valueCategory != "undefined"
                      ? (values.valueCategory as typeOption)
                      : null
                  }
                  onChange={(event, value) => {
                    setFieldValue("valueCategory", value);
                    setFieldValue("Fkidcategory", value?.value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Seleccionar una categoría"
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loadingCategory ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                      error={errors.Fkidcategory ? true : false}
                      helperText={errors.Fkidcategory}
                    />
                  )}
                  fullWidth
                />
              </ListItem>
            </List>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
export default memo(ModalAdd);
