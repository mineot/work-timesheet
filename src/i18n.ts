import { createI18n } from "vue-i18n";
import pt from "locales/pt";
import en from "locales/en";

const messages = {
  en,
  pt,
  "en-us": en,
  "pt-br": pt,
};

const language = navigator.language.toLowerCase();

export default createI18n({
  locale: language,
  fallbackLocale: "en",
  messages,
});
