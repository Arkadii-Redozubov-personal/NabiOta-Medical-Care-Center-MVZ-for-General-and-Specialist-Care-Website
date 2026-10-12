"use client";

import React, { useState } from "react";
import Link from "next/link";
import { type Locale, localePath } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { activeSpecialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";

interface ContactFormProps {
  locale: Locale;
  dict: Dictionary;
  defaultSpecialty?: string;
}

export function ContactForm({ locale, dict, defaultSpecialty = "" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data?.error || dict.contactPage.form.error);
      }
    } catch {
      setStatus("error");
      setErrorMessage(dict.contactPage.form.error);
    } finally {
      setLoading(false);
    }
  };

  const formDict = dict.contactPage.form;

  return (
    <form className="form card" onSubmit={handleSubmit} noValidate>
      <h2>{formDict.title}</h2>

      {/* Honeypot field for bot protection */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this</label>
        <input type="text" id="hp_field" name="hp_field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="user_name">{formDict.name} *</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            autoComplete="name"
            placeholder="z. B. Max Mustermann"
          />
        </div>

        <div className="field">
          <label htmlFor="user_email">{formDict.email} *</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            autoComplete="email"
            placeholder="ihre.adresse@example.de"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="user_phone">{formDict.phone}</label>
          <input
            type="tel"
            id="user_phone"
            name="user_phone"
            autoComplete="tel"
            placeholder="+49 (0) 123 456789"
          />
        </div>

        <div className="field">
          <label htmlFor="topic">{formDict.topic}</label>
          <select id="topic" name="topic" defaultValue={formDict.topics[0]}>
            {formDict.topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="specialty">{formDict.specialty}</label>
        <select id="specialty" name="specialty" defaultValue={defaultSpecialty}>
          <option value="">— {dict.common.overview} —</option>
          {activeSpecialties.map((spec) => {
            const specName = dict.specialtyContent[spec.slug]?.name ?? spec.slug;
            return (
              <option key={spec.slug} value={specName}>
                {specName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">{formDict.message} *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Wie können wir Ihnen weiterhelfen?"
        />
      </div>

      <div className="consent">
        <input type="checkbox" id="privacy" name="privacy" required />
        <label htmlFor="privacy">
          {formDict.privacy}{" "}
          <Link href={localePath(locale, "datenschutz")}>
            ({dict.footer.privacy})
          </Link>
        </label>
      </div>

      {status === "success" && (
        <div className="form-status form-status--success" role="status">
          <Icon name="check" size={18} style={{ display: "inline", verticalAlign: "text-bottom" }} />{" "}
          {formDict.success}
        </div>
      )}

      {status === "error" && (
        <div className="form-status form-status--error" role="alert">
          <Icon name="alert" size={18} style={{ display: "inline", verticalAlign: "text-bottom" }} />{" "}
          {errorMessage || formDict.error}
        </div>
      )}

      <div>
        <button
          type="submit"
          className="btn btn--primary"
          disabled={loading}
          style={{ width: "100%" }}
        >
          {loading ? (
            <span>{formDict.sending}</span>
          ) : (
            <>
              <span>{formDict.submit}</span>
              <Icon name="arrow" size={18} />
            </>
          )}
        </button>
      </div>

      <div className="form-note">
        <Icon name="alert" size={16} style={{ color: "#d97706" }} />
        <span>{formDict.notice}</span>
      </div>
    </form>
  );
}
