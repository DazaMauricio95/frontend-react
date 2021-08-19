import { RcFile } from "antd/lib/upload"
import { FormikHelpers } from "formik"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from 'yup'
import { stateSelector, typeFormRegister } from "../@types"
import { actionsRegister } from "../redux/actions"
import { getBase64 } from "../utils"
export const UseHookRegister = () => {
    const dispatch = useDispatch()
    const { loadingRegister, disabledRegister, payloadRegister } = useSelector((state: stateSelector) => state.registerReducer)
    const [imgProfile, setImgProfile] = useState<string|ArrayBuffer|null>("https://www.lciacademy.com/wp-content/uploads/2017/09/default-avatar-300x300.png")

    const formRegister: typeFormRegister = {
        email: "",
        password: "",
        name: "",
        lastname: "",
        photo: ""
    }

    const schemaRegister = Yup.object().shape({
        email: Yup.string().email('Email Inválido').required('Email Requerido'),
        password: Yup.string().required('Contraseña Requerida').min(4, '¡Demasiado corto!'),
        name: Yup.string().required('Nombre requerido'),
        lastname: Yup.string().required('Apellido requerido')
    })

    function submitRegister(values: typeFormRegister, actionsFormik: FormikHelpers<typeFormRegister>) { 
        dispatch(actionsRegister.registerUser(values, actionsFormik, setImgProfile))
    }

    function handleBeforeUpload (file:RcFile, fileList:RcFile[], setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' 
        if (!isJpgOrPng) { 
            console.log('Solo puede cargar archivos JPG / PNG!')
        }
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) { 
            console.log('¡La imagen debe tener un tamaño inferior a 2 MB!') 
        }  
        if(isJpgOrPng && isLt2M){ 
            getBase64(file, (imageUrl) => { 
                setImgProfile(imageUrl) 
                setFieldValue("photo", imageUrl) 
            })
        }
        return false
    }

    return {
        loadingRegister,
        disabledRegister,
        payloadRegister,
        formRegister,
        schemaRegister,
        submitRegister,
        handleBeforeUpload,
        imgProfile
    }
}