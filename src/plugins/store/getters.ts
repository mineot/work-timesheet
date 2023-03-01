import { MutationItem, MutationTable, ParamGetById, ParamTableName, State } from "./facades";
import { findItemById, findTable } from "./helpers";

export default {
  all: (state: State) => (param: ParamTableName): MutationItem[] => {
    const table: MutationTable | undefined = findTable(state, param);
    return table?.items || [];
  },

  get: (state: State) => (param: ParamGetById): MutationItem | undefined => {
    const table: MutationTable | undefined = findTable(state, param);
    const item: MutationItem | undefined = findItemById(table, param);
    return item;
  },
};
