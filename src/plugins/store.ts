import { createStore } from "vuex";
import { v4 as uuid } from "uuid";

const dbTables = ["teste"];
const dbName = "wtsdb";
const delay = 60000;

function buildTableName(tableName: string): string {
  return `${dbName}->${tableName}`;
}

function findByIndex(list: any[], item: any): number | undefined | null {
  return list.findIndex((el: any) => el.id === item.id);
}

const state = () => ({
  tables: {},
});

const mutations = {
  loadTables(state: any, { tableName, data }: any) {
    state.tables[tableName] = data;
  },

  insert(state: any, { tableName, item }: any) {
    state.tables[tableName].push(item);
  },

  update(state: any, { tableName, item }: any) {
    const index: number | undefined | null = findByIndex(state.tables[tableName], item);

    if (index !== undefined && index !== null && index > -1) {
      state.tables[tableName][index] = item;
    }
  },

  delete(state: any, { tableName, item }: any) {
    const index: number | undefined | null = findByIndex(state.tables[tableName], item);

    if (index !== undefined && index !== null && index > -1) {
      state.tables[tableName].splice(index, 1);
    }
  },
};

const actions = {
  initDB: (act: any) => {
    dbTables.forEach((tableName: string) => {
      const item: string | null = localStorage.getItem(buildTableName(tableName));
      const data: any[] = item ? JSON.parse(item) : [];
      act.commit("loadTables", { tableName, data });
    });

    act.dispatch("autoStoreDB");
  },

  storeTable(act: any, tableName: string) {
    const data: string = JSON.stringify(act.state.tables[tableName]);
    localStorage.setItem(buildTableName(tableName), data);
  },

  storeDB: (act: any) => {
    dbTables.forEach((tableName: string) => {
      act.dispatch("storeTable", tableName);
    });
  },

  autoStoreDB: (act: any) => {
    setTimeout(() => {
      act.dispatch("storeDB");
      act.dispatch("autoStoreDB");
    }, delay);
  },

  save: (act: any, { tableName, item }: any) => {
    let mutation = "update";
    if (item.id === undefined) {
      mutation = "insert";
      item.id = uuid();
    }
    act.commit(mutation, { tableName, item });
  },

  delete: (act: any, { tableName, item }: any) => {
    act.commit("delete", { tableName, item });
  },
};

const getters = {
  all: (state: any) => (tableName: string) => {
    return state.tables[tableName];
  },

  get: (state: any) => (tableName: string, id: string) => {
    return state.tables[tableName].find((el: any) => el.id === id);
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
