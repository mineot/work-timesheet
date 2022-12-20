// @ts-check

// VUE
import { createApp } from "vue";

// PLUGINS
import PrimeVue from "primevue/config";
import I18N from "src/i18n";

// PLUGIN CONFIG
import "primevue/resources/themes/arya-orange/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";

// PUGLINS COMPONENTS
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

// APP COMPONENTS
import App from "src/App.vue";
import Registers from "components/registers/Registers.vue";
import Links from "components/links/Links.vue";
import Notes from "components/notes/Notes.vue";

// LIST AVAILABLE COMPONETS
const comps = [
  { name: "app-registers", item: Registers },
  { name: "app-links", item: Links },
  { name: "app-notes", item: Notes },
  { name: "p-tab-panel", item: TabPanel },
  { name: "p-tab-view", item: TabView },
];

// APP INIT
const app = createApp(App);

// SETUP PLUGINS
app.use(PrimeVue);
app.use(I18N);

// SETUP COMPONENTS
comps.forEach((comp) => app.component(comp.name, comp.item));

// START APP
app.mount("#app");
