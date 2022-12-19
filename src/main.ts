// @ts-check

import { createApp } from 'vue';
import PrimeVue from "primevue/config";
import "primevue/resources/themes/arya-orange/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";

import App from "@/App.vue";
import { i18n } from "@/i18n";

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Times from "@/components/times/Times.vue";
import Links from "@/components/links/Links.vue";
import Notes from "@/components/notes/Notes.vue";

const comps = [
  { name: "app-times", item: Times },
  { name: "app-links", item: Links },
  { name: "app-notes", item: Notes },
  { name: "p-tab-panel", item: TabPanel },
  { name: "p-tab-view", item: TabView },
];

const app = createApp(App);
app.use(PrimeVue);
app.use(i18n);
comps.forEach(comp => app.component(comp.name, comp.item));
app.mount('#app');
