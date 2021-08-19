import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";

const index = () => {
  return (
    <div>
      <Typography component="p">Home Module</Typography>
    </div>
  );
};
export default withRouter(index);
