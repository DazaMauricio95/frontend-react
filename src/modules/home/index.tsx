import { withRouter } from "react-router-dom";
import { Typography, Grid, Box, Paper } from "@material-ui/core";
import UseStyles from "../../styles";
const index = () => {
  const classes = UseStyles();
  return (
    <Grid container className={classes.rootPage}>
      <Box component="div" width="100%" padding={10}>
        <Paper elevation={0} variant="outlined" square style={{ padding: 20 }}>
          <Typography component="p">Bienvenido a tu biblioteca.</Typography>
        </Paper>
      </Box>
    </Grid>
  );
};
export default withRouter(index);
