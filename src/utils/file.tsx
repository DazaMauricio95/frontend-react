import { RcFile } from "antd/lib/upload"
import { LocalDiningOutlined, PlusOneOutlined } from '@material-ui/icons';

export const getBase64 = (img:RcFile, callback:( result : string | ArrayBuffer | null ) => void) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
} 

export const uploadButton = (isLoading:any) => {
    return (
        <div>
            { isLoading ? <LocalDiningOutlined/> : <PlusOneOutlined/> }
            <div className="ant-upload-text">Upload</div>
        </div>
    )
}

export const onPreview = async (file:any) => {
    let src = file.url 
    if (!src ) {
        src = await new Promise(resolve => {
            const reader = new FileReader()  
            reader.readAsDataURL(  file.originFileObj )
            reader.onload = () => resolve(reader.result)
        })
    } 
    const image = new Image() 
    image.src = src 
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
}