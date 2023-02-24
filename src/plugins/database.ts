import { createStore } from "vuex";

const dbTables = ["teste"];
const dbName = "wtsdb";
const delay = 60000;

function buildTableName(tableName: string): string {
  return `${dbName}->${tableName}`;
}

const state = () => ({
  tables: {}
});

const mutations = {
  loadTables(state: any, { key, data }: any) {
    state.tables[key] = data;
  }
};

const actions = {
  initDB: (act: any) => {
    dbTables.forEach((key: string) => {
      const item: string | null = localStorage.getItem(buildTableName(key));
      const data: any[] = item ? JSON.parse(item) : [];
      act.commit("loadTables", { key, data });
    });

    act.dispatch("autoStoreDB");
  },

  storeTable(act: any, tableName: string) {
    const data: string = JSON.stringify(act.state.tables[tableName]);
    localStorage.setItem(buildTableName(tableName), data);
  },

  storeDB: (act: any) => {
    dbTables.forEach((key: string) => {
      act.dispatch("storeTable", key);
    });
  },

  autoStoreDB: (act: any) => {
    setTimeout(() => {
      act.dispatch("storeDB");
      act.dispatch("autoStoreDB");
    }, delay);
  }
};

const getters = {};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
