import { Grid, Typography, Button, TextField, CircularProgress, LinearProgress } from "@material-ui/core";
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import { UseHookLogin } from "../../hooks"
import UseStyles from "../../styles"
const index = () => {
    const classes = UseStyles()
    const { disabledLogin, loadingLogin, formLogin, schemaLogin, submitLogin } = UseHookLogin();
    return (
        <div>
            {loadingLogin && <LinearProgress style={{ width: "100%", zIndex: 1 }} />}
            <Grid container className={classes.containerLogin}>
                <div className={classes.logoContainerLogin}>
                    <Typography className={classes.logoTextLogin}>Mi Biblioteca</Typography>
                </div>
                <div className={classes.formContainer}>
                    <div className={classes.form}>
                        <Typography variant="h5" className={classes.greeting} color="textPrimary">
                            Iniciar Sesión
                        </Typography>
                        <Formik enableReinitialize
                            initialValues={{ ...formLogin }}
                            onSubmit={submitLogin}
                            validationSchema={schemaLogin}
                        >
                            {({ values, setFieldValue, errors }) => (
                                <Form>
                                    <TextField
                                        id="email"
                                        InputProps={{
                                            classes: {
                                                underline: classes.textFieldUnderline,
                                                input: classes.textField,
                                            },
                                        }}
                                        value={values.email}
                                        onChange={e => setFieldValue("email", e.target.value)}
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
                                        onChange={e => setFieldValue("password", e.target.value)}
                                        margin="normal"
                                        placeholder="Contraseña"
                                        type="password"
                                        fullWidth
                                        error={errors.password ? true : false}
                                        helperText={errors.password ? errors.password : ""}
                                    />
                                    <div className={classes.formButtons}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            type="submit"
                                            className={classes.button}
                                            disabled={disabledLogin}
                                        >
                                            Iniciar Sesión{" "}{loadingLogin && <CircularProgress size={14} />}
                                        </Button>
                                    </div>
                                    <Link to="/register" style={{ marginTop: 20 }}>
                                        <Typography variant="caption" component="span">Registrate</Typography>
                                    </Link>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default index
