import { Dispatch } from "redux"
import { typeFormLogin } from "../../@types"
import { modelUser } from "../../models"
import { constantsLogin } from "../constants"
import { servicesLogin } from "../services"
function loginUser( values: typeFormLogin) {
    return async (dispatch: Dispatch) => {
        dispatch(constantsLogin.BEGIN_LOGIN())
        try {
            const response = await servicesLogin.login(values)
            if( typeof response.isAxiosError === "undefined"){ 
                const {user }= response
                const { token, email, lastname, name, photo, id } = user
                modelUser.id            = id
                modelUser.token         = token
                modelUser.email         = email
                modelUser.name          = name 
                modelUser.lastname      = lastname 
                modelUser.photo         = photo
                localStorage.setItem('@token', token !== null  ? token : "" ) 
                localStorage.setItem('@userData', JSON.stringify(user) )
                dispatch(constantsLogin.SUCCESS_LOGIN(token))
            }
            else{
                dispatch(constantsLogin.FAILURE_LOGIN())
                console.log("login response data error: ", response.response)
            } 
        } catch (error) { 
            dispatch(constantsLogin.FAILURE_LOGIN()) 
            throw error
        } 
    }
}
function logoutUser(){
    return async(dispatch: Dispatch) => {
        try {
            const response = await servicesLogin.logout()
            if( typeof response.isAxiosError === "undefined"){  
                localStorage.removeItem("@token")
                localStorage.removeItem("@userData")  
                clearLogout()
                dispatch( constantsLogin.LOGOUT_LOGIN() ) 
            }
            else{
                dispatch(constantsLogin.FAILURE_LOGIN())
                console.log("AXIOS ERROR: ",response)
            }
        } catch (error) {
            throw error
        }
    }
}
function clearLogout(){ 
    modelUser.id            = null
    modelUser.token         = ""
    modelUser.email         = ""
    modelUser.name          = "" 
    modelUser.lastname      = "" 
    modelUser.photo         = "" 
}
export const actionsLogin = {
    loginUser,
    logoutUser
}