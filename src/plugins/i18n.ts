import { createI18n } from "vue-i18n";
import pt from "./locales/pt.json";
import en from "./locales/en.json";

const messages = {
  en,
  pt,
  "en-us": en,
  "pt-br": pt,
};

export default createI18n({
  locale: navigator.language.toLowerCase(),
  fallbackLocale: "en",
  messages,
});
