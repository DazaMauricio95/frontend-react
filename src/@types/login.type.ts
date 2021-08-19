export type typeInitialLoginReducer = {
    authentication: Boolean
    token: string | null
    loadingLogin: boolean
    disabledLogin: boolean
}

export type typeFormLogin = {
    email: string
    password: string 
}

export type typeUser = {
    token       : string|null, 
    id          : number|null,
    name        : string, 
    lastname    : string, 
    email       : string, 
    photo       : string, 
}