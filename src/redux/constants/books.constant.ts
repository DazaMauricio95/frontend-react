import { createAction } from "redux-actions"
export const constantsBooks = {
    BEGIN_BOOK          : createAction("BEGIN_BOOK"), 
    PAGINATION_BOOKS    : createAction("PAGINATION_BOOKS"),
    ALL_BOOKS           : createAction("ALL_BOOKS"), 
    FAILURE_BOOK        : createAction("FAILURE_BOOK"), 
    SUCCESS_BOOK        : createAction("SUCCESS_BOOK"), 
}