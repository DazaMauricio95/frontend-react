import { createAction } from "redux-actions"
export const constantsRentals = {
    BEGIN_RENTALS     : createAction("BEGIN_RENTALS"), 
    PAGINATION_RENTALS       : createAction("PAGINATION_RENTALS"),
    ALL_RENTALS       : createAction("ALL_RENTALS"), 
    FAILURE_RENTALS   : createAction("FAILURE_RENTALS"), 
    SUCCESS_RENTALS   : createAction("SUCCESS_RENTALS"), 
}