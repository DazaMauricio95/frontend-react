import { FormikHelpers } from "formik";
import { Dispatch } from "redux";
import { typeFormRegister } from "../../@types";
import { constantsAlert, constantsRegister } from "../constants";
import { servicesRegister } from "../services";
function registerUser(
  values: typeFormRegister,
  actionsFormik: FormikHelpers<typeFormRegister>,
  setImgProfile: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | null>
  >
) {
  return async (dispatch: Dispatch) => {
    dispatch(constantsRegister.BEGIN_REGISTER());
    try {
      const response = await servicesRegister.register(values);
      if (typeof response.isAxiosError === "undefined") {
        dispatch(constantsRegister.SUCCESS_REGISTER(response));
        dispatch(
          constantsAlert.VIEW({
            message: response.message,
            description: "",
            duration: 5,
            placement: "topRight",
            type: "success",
          })
        );
        actionsFormik.resetForm();
        setImgProfile(
          "https://www.lciacademy.com/wp-content/uploads/2017/09/default-avatar-300x300.png"
        );
      } else {
        dispatch(constantsRegister.FAILURE_REGISTER());
      }
    } catch (err) {
      dispatch(constantsRegister.FAILURE_REGISTER());
      throw err;
    }
  };
}
export const actionsRegister = {
  registerUser,
};
