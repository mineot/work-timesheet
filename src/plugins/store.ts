import { createStore } from "vuex";
import { State } from "./store/facades";

import mutations from "./store/mutations";
import actions from "./store/actions";
import getters from "./store/getters";

const state: State = {
  tables: []
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
