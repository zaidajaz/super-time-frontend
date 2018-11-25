import { StockListSearchResults } from "src/modules/stock/stock.models/stock-list-search-results";
import { CustomerSearchResults } from "src/modules/customers/models/customer-search-results";

export interface ApplicationState {
    stockList: StockListSearchResults[];
    customerList: CustomerSearchResults[];
}

export const initialState: ApplicationState = {
    stockList: <StockListSearchResults[]> [],
    customerList: <CustomerSearchResults[]> []
}

// export const getStockListSearchResults = (state: ApplicationState) => state.stockList;