export type Locale = (typeof locales)[number];

// for accept-language-parser loose pick more specific language should be earlier in the array
export const locales = ["ru", "en"] as const;
export const defaultLocale: Locale = "en";
