// @ts-check

import { createI18n } from "vue-i18n";
import { pt } from "@/locales/pt";
import { en } from "@/locales/en";

const messages = { en, pt };

console.log(messages);
console.log(navigator.language)

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages
});
