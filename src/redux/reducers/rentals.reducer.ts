import { handleActions, Action } from "redux-actions";
import { responseRentals, typeInitialRentalsReducer } from "../../@types"
import { constantsRentals  } from "../constants"
const initialResponse:responseRentals = {
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

const initialState:typeInitialRentalsReducer = { 
    loadingRental   : false,
    disabledRental  : false,
    responseRentals : initialResponse,
    dataRentals     : [],
    messageRental : {
        message: "",
        data : {
            IdRent: 0,
            Fkidbook: 0,
            Fkiduser: 0,
            rentDate: "",
            returnDate: "",
            statusRent: 0,
            created_at: "",
            updated_at: "",
            nameUser: "",
            nameBook: "",
            author: "",
            publicationDate: "",
        },
        updateBook: 0
    }
} 

const rentalsReducer = handleActions(
    new Map([ 
        [
            constantsRentals.BEGIN_RENTALS,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingRental  : true,
                disabledRental : true,  
            })
        ],
        [
            constantsRentals.PAGINATION_RENTALS,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingRental   : false,
                disabledRental  : false,
                responseRentals : action.payload, 
            })
        ],  
        [
            constantsRentals.SUCCESS_RENTALS,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingRental   : false,
                disabledRental  : false,
                messageRental  : action.payload  
            })
        ], 
        [
            constantsRentals.FAILURE_RENTALS,
            (state = initialState, action: Action<any>) =>({
                ...state,
                loadingRental   : false,
                disabledRental  : false,  
            })
        ]
    ]) as any, initialState
); 
export default rentalsReducer