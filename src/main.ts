import { createApp } from "vue";
import I18N from "@plugins/i18n";

import App from "@/App.vue";

const app = createApp(App);
app.use(I18N);
app.mount("#app");
