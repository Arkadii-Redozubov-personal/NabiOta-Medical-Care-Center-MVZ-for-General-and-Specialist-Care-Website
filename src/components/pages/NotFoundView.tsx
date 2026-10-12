import React from "react";
import Link from "next/link";
import { type Locale, locales, localeLabels, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";

interface NotFoundViewProps {
  locale?: Locale;
}

export function NotFoundView({ locale = "de" }: NotFoundViewProps) {
  const dict = getDictionary(locale);

  return (
    <div className="not-found">
      <div style={{ maxWidth: "600px" }}>
        <span className="not-found__code">404</span>
        <h1 className="h2" style={{ marginBlock: "1rem 0.5rem" }}>
          {dict.notFound.title}
        </h1>
        <p className="lead" style={{ marginBlockEnd: "2rem" }}>
          {dict.notFound.text}
        </p>

        <Link href={localePath(locale, "")} className="btn btn--primary">
          <Icon name="arrow" size={18} />
          <span>{dict.notFound.cta}</span>
        </Link>

        <div className="not-found__langs">
          {locales.map((l) => (
            <Link
              key={l}
              href={localePath(l, "")}
              className="pill"
              style={{ background: "var(--white)", border: "1px solid var(--border)" }}
            >
              {localeLabels[l].native} ({localeLabels[l].short})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
