import { handleActions, Action } from "redux-actions";
import { responseCategories, typeInitialCategoriesReducer } from "../../@types"
import { constantsCategories  } from "../constants"
const initialResponse:responseCategories = {
    current_page  : 1,
    data          : [],
    first_page_url: "",
    from          : null,
    last_page     : 1,
    last_page_url : "",
    links: [
        {
            url: null,
            label: "&laquo; Previous",
            active: false
        },
        {
            url: "",
            label: "1",
            active: true
        },
        {
            url: null,
            label: "Next &raquo;",
            active: false
        }
    ],
    next_page_url : null,
    path          : "",
    per_page      : 10,
    prev_page_url : null,
    to            : null,
    total         : 0
}
const initialState:typeInitialCategoriesReducer = { 
    loadingCategory  : false,
    disabledCategory : false,
    responseCategories : initialResponse,
    dataCategories    : []
}  

const categoriesReducer = handleActions(
    new Map([ 
        [
            constantsCategories.BEGIN_CATEGORY,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingCategory  : true,
                disabledCategory : true,  
            })
        ],
        [
            constantsCategories.PAGINATION_CATEGORIES,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingCategory     : false,
                disabledCategory    : false,
                responseCategories  : action.payload, 
            })
        ], 
        [
            constantsCategories.ALL_CATEGORIES,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingCategory   : false,
                disabledCategory  : false, 
                dataCategories    : action.payload, 
            })
        ], 
        [
            constantsCategories.FAILURE_CATEGORY,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingCategory   : false,
                disabledCategory  : false,  
            })
        ]
    ]) as any, initialState
); 
export default categoriesReducer