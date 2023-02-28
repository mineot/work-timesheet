import { createApp } from "vue";
import I18N from "@plugins/i18n";
import router from "@plugins/router";
import store from "@plugins/store";
import vuetify from "@plugins/vuetify";

import App from "@/App.vue";

const app = createApp(App);
app.use(I18N);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");

store.dispatch("initDB");

// store.dispatch("save", { tableName: "teste", item: { name: "Item 1" } });
// store.dispatch("save", { tableName: "teste", item: { name: "Item 2" } });
// store.dispatch("save", { tableName: "teste", item: { name: "Item 3" } });

// store.dispatch("save", { tableName: "teste", item: { name: "Item ABC", id: "c1a09d5e-190d-4b50-9492-ff04ef23eeeb" } });

// store.dispatch("delete", { tableName: "teste", item: { name: "Item ABC", id: "c1a09d5e-190d-4b50-9492-ff04ef23eeeb" } });
// store.dispatch("storeDB");

console.log(store.getters.all("teste"));
console.log(store.getters.get("teste", "a579eee1-00ff-4d95-a04a-f040b18f382a"));
