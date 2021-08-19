import {
  Grid,
  Typography,
  Button,
  TextField,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { UseHookRegister } from "../../hooks";
import UseStyles from "../../styles";
import { RcFile } from "antd/lib/upload";
import { onPreview, uploadButton } from "../../utils";

const index = () => {
  const classes = UseStyles();
  const {
    loadingRegister,
    disabledRegister,
    submitRegister,
    formRegister,
    schemaRegister,
    handleBeforeUpload,
    imgProfile,
  } = UseHookRegister();
  return (
    <div>
      {loadingRegister && (
        <LinearProgress style={{ width: "100%", zIndex: 1 }} />
      )}
      <Grid container className={classes.containerLogin}>
        <div className={classes.logoContainerLogin}>
          <Typography className={classes.logoTextLogin}>
            Mi Biblioteca
          </Typography>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.form}>
            <Typography
              variant="h5"
              className={classes.greeting}
              color="textPrimary"
            >
              Registrarse
            </Typography>
            <Formik
              enableReinitialize
              initialValues={{ ...formRegister }}
              onSubmit={submitRegister}
              validationSchema={schemaRegister}
            >
              {({ values, setFieldValue, errors }) => (
                <Form>
                  <Grid
                    component="div"
                    className={classes.contentAvatarProfile}
                  >
                    <ImgCrop rotate>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className={classes.avatarProfile}
                        showUploadList={false}
                        beforeUpload={(file: RcFile, fileList: RcFile[]) =>
                          handleBeforeUpload(file, fileList, setFieldValue)
                        }
                        onPreview={onPreview}
                      >
                        {imgProfile ? (
                          <img
                            src={imgProfile.toString()}
                            alt="avatar"
                            className={classes.avatarImgRegister}
                          />
                        ) : (
                          uploadButton
                        )}
                      </Upload>
                    </ImgCrop>
                    <Typography color="error">{errors.photo}</Typography>
                  </Grid>

                  <TextField
                    id="email"
                    InputProps={{
                      classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField,
                      },
                    }}
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    error={errors.email ? true : false}
                    margin="normal"
                    placeholder="Correo Electrónico"
                    type="email"
                    fullWidth
                    helperText={errors.email ? errors.email : ""}
                  />
                  <TextField
                    id="password"
                    InputProps={{
                      classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField,
                      },
                    }}
                    value={values.password}
                    onChange={(e) => setFieldValue("password", e.target.value)}
                    margin="normal"
                    placeholder="Contraseña"
                    type="password"
                    fullWidth
                    error={errors.password ? true : false}
                    helperText={errors.password ? errors.password : ""}
                  />
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
                  <div className={classes.formButtons}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      className={classes.button}
                      disabled={disabledRegister}
                    >
                      Registrarse{" "}
                      {loadingRegister && <CircularProgress size={14} />}
                    </Button>
                  </div>
                  <Link to="/login" style={{ marginTop: 20 }}>
                    <Typography variant="caption" component="span">
                      Iniciar Sesión
                    </Typography>
                  </Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default index;
