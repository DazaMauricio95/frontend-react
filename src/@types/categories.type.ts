export type typeInitialCategoriesReducer = {
    loadingCategory     : boolean,
    disabledCategory    : boolean,
    responseCategories   : responseCategories
    dataCategories       : dataCategories[]
}

export type dataCategories = {
    IdCategory: number
    nameCategory: string
    description: string
    active: number
    created_at: string
    updated_at: string
    countBooks: number
}

export type responseCategories = {
    current_page: number
    data: dataCategories[],
    first_page_url: string
    from: number|null
    last_page: number
    last_page_url: string
    links: [
        {
            url: string|null
            label: string
            active: boolean
        },
        {
            url: string
            label: string
            active: boolean
        },
        {
            url: string|null
            label: string,
            active: boolean
        }
    ],
    next_page_url: string|null
    path: string
    per_page: number
    prev_page_url: string|null
    to: number|null
    total: number
} 

export type typeValuesCategory = {
    nameCategory:string
    description:string
}