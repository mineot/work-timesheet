import { createApp } from "vue";
import I18N from "@plugins/i18n";
import vuetify from "@plugins/vuetify";

import App from "@/App.vue";

const app = createApp(App);
app.use(I18N);
app.use(vuetify);
app.mount("#app");
