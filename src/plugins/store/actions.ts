import { StoreConstants } from "./constants";
import { State, Table } from "./facades";
import { restore, store, autoStoreDelay, updateTableDelay } from "./helpers";

export interface Parameter {
  state: State;
  commit(name: string, param: any): void;
  dispatch(name: string, param?: any): void;
}

export default {
  [StoreConstants.ACTIONS.RESTORE_DB]: (action: Parameter) => {
    action.commit(StoreConstants.MUTATIONS.RESTORE_DB, restore());
  },

  [StoreConstants.ACTIONS.STORE_DB]: (action: Parameter) => {
    store(action.state.tables);
  },

  [StoreConstants.ACTIONS.AUTO_STORE_DB]: (action: Parameter) => {
    setTimeout(() => {
      action.dispatch(StoreConstants.ACTIONS.STORE_DB);
      action.dispatch(StoreConstants.ACTIONS.AUTO_STORE_DB);
    }, autoStoreDelay);
  },

  [StoreConstants.ACTIONS.UPDATE_TABLE]: (action: Parameter, table: Table) => {
    action.commit(StoreConstants.MUTATIONS.UPDATE_TABLE, table);
    setTimeout(() => action.dispatch(StoreConstants.ACTIONS.STORE_DB), updateTableDelay);
  }
};