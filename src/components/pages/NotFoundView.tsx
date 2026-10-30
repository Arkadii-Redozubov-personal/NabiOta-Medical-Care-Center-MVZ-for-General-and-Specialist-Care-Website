import React from "react";
import Link from "next/link";
import { type Locale, locales, localeLabels, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import styles from "./NotFoundView.module.css";

interface NotFoundViewProps {
  locale?: Locale;
}

export function NotFoundView({ locale = "de" }: NotFoundViewProps) {
  const dict = getDictionary(locale);

  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundContent}>
        <span className={styles.notFoundCode}>404</span>
        <h1 className={`h2 ${styles.notFoundTitle}`}>
          {dict.notFound.title}
        </h1>
        <p className={`lead ${styles.notFoundLead}`}>
          {dict.notFound.text}
        </p>

        <Link href={localePath(locale, "")} className="btn btn--primary">
          <Icon name="arrow" size={18} />
          <span>{dict.notFound.cta}</span>
        </Link>

        <div className={styles.notFoundLangs}>
          {locales.map((l) => (
            <Link
              key={l}
              href={localePath(l, "")}
              className={`pill ${styles.langPill}`}
            >
              {localeLabels[l].native} ({localeLabels[l].short})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
