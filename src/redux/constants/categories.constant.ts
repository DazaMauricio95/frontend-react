import { createAction } from "redux-actions"
export const constantsCategories = {
    BEGIN_CATEGORY          : createAction("BEGIN_CATEGORY"), 
    PAGINATION_CATEGORIES   : createAction("PAGINATION_CATEGORIES"),
    ALL_CATEGORIES          : createAction("ALL_CATEGORIES"), 
    FAILURE_CATEGORY        : createAction("FAILURE_CATEGORY"), 
    SUCCESS_CATEGORY        : createAction("SUCCESS_CATEGORY"), 
}