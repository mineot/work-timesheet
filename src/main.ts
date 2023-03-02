import { StoreConstants } from "./plugins/store/constants";
import { Table } from "./plugins/store/facades";

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

store.dispatch(StoreConstants.ACTIONS.RESTORE_DB);
