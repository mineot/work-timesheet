import { State, Table, TableRow } from "./facades";
import { StoreConstants } from "./constants";

export interface GetterParameter {
  tableName: string;
  rowId?: string;
}

export default {
  [StoreConstants.GETTERS.GET_TABLE]: (state: State) => (tableName: string): Table | undefined => {
    return Object.assign({}, state.tables.find((el: Table) => el.name == tableName));
  },
};
