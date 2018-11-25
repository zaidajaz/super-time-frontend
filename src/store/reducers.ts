import { ApplicationState, initialState } from "./ApplicationState";
import * as ApplicationActions from './actions';

export function reducer(state: ApplicationState = initialState, action: ApplicationActions.Actions){
    switch(action.type) {
        case ApplicationActions.ADD_NEW_STOCK_SEARCH_RES:
            state.stockList = action.payload;
            return state;
        case ApplicationActions.LOAD_CUSTOMERS:
            state.customerList = action.payload;
            return state;
        default:
            return state;
    }
}