import { useDispatch, useSelector } from "react-redux"
import * as Yup from 'yup'
import { stateSelector, typeFormLogin } from "../@types"
import { actionsLogin } from "../redux/actions"
export const UseHookLogin = () => {
    const dispatch = useDispatch()
    const { disabledLogin,
        loadingLogin,
        authentication,
        token
    } = useSelector((state: stateSelector) => state.loginReducer)
    const formLogin: typeFormLogin = {
        email: "",
        password: ""
    }
    const schemaLogin = Yup.object().shape({
        email: Yup.string().email('Email Inválido').required('Email Requerido'),
        password: Yup.string().required('Contraseña Requerida').min(4, '¡Demasiado corto!'),
    });
    function submitLogin(values: typeFormLogin) {
        dispatch(actionsLogin.loginUser(values))
    }

    function logoutUser(){
        dispatch(actionsLogin.logoutUser())
    }

    return {
        disabledLogin,
        loadingLogin,
        authentication,
        token,
        formLogin,
        schemaLogin,
        submitLogin,
        logoutUser
    }
}