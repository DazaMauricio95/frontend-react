import { FormikHelpers } from "formik"
import { Dispatch } from "redux"
import { typeFormRegister } from "../../@types"
import { constantsRegister } from "../constants"
import { servicesRegister } from "../services"
function registerUser(values: typeFormRegister, actionsFormik: FormikHelpers<typeFormRegister>, setImgProfile: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>) {
    return async (dispatch: Dispatch) => {
        dispatch(constantsRegister.BEGIN_REGISTER())
        try {
            const response = await servicesRegister.register(values)
            dispatch(constantsRegister.SUCCESS_REGISTER(response))
            actionsFormik.resetForm()
            setImgProfile("https://www.lciacademy.com/wp-content/uploads/2017/09/default-avatar-300x300.png")
        } catch (err) {
            throw err
        }
    }
}
export const actionsRegister = {
    registerUser
}