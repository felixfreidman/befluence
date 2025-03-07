import { FETCH_TABLEDATA_START, FETCH_TABLEDATA_SUCCESS, FETCH_TABLEDATA_ERROR } from '../actions/actionTypes'

const initState = {
    tableData: [],
    loading: true,
    error: false,
}

export default function tableReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_TABLEDATA_START:
            return {
                ...state, loading: true
            }
        case FETCH_TABLEDATA_SUCCESS:
            return {
                ...state, loading: false, tableData: action.tableData
            }
        case FETCH_TABLEDATA_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state
    }
}