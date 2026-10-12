import de, { type Dictionary } from "./de";
import en from "./en";
import ru from "./ru";
import tr from "./tr";
import ar from "./ar";
import uz from "./uz";
import type { Locale } from "@/lib/i18n";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  de,
  en,
  ru,
  tr,
  ar,
  uz,
};

export function getDictionary(locale: Locale = "de"): Dictionary {
  return dictionaries[locale] ?? dictionaries.de;
}
