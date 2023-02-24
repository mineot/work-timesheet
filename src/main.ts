import { createApp } from "vue";
import I18N from "@plugins/i18n";
import vuetify from "@plugins/vuetify";
import router from "@plugins/router";
import store from "@plugins/database";

import App from "@/App.vue";

const app = createApp(App);
app.use(I18N);
app.use(vuetify);
app.use(router);
app.use(store);
app.mount("#app");

store.dispatch("initDB");
