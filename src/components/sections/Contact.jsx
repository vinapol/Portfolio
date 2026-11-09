import { Button } from "@/components/ui/Button";
import { EmailCopyBox } from "@/components/ui/EmailCopyBox";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { useToast } from "@/context/toast-context";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n";
import { useId, useState } from "react";
const initial = { name: "", email: "", message: "" };
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "email";
  }
  if (values.message.trim().length < 20) errors.message = "message";
  return errors;
}
export function Contact() {
  const { notify } = useToast();
  const { t } = useI18n();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const subject = encodeURIComponent(`${t.contact.subject} — ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}\n${values.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    notify(t.contact.prepared);
    setValues(initial);
  };
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact">
      <SiteWrapper>
        <div className="contact__panel">
          <div className="contact__grid">
            <div>
              <h2 id="contact-title" className="contact__title">
                {t.contact.title}
              </h2>
              <p className="contact__intro">{t.contact.intro}</p>
              <div className="contact__channels">
                <EmailCopyBox email={profile.email} />
                <p className="contact__social">
                  <a href={profile.links[0]?.href}>
                    {t.contact.github} / @{profile.githubHandle}
                  </a>
                  <span className="contact__sep">·</span>
                  <a href={profile.links[1]?.href}>
                    {t.contact.linkedin} / {profile.linkedinHandle}
                  </a>
                  <span className="contact__sep">·</span>
                  <a href={profile.cvUrl}>{t.contact.cv}</a>
                  <span className="contact__sep">·</span>
                  <a href={profile.offersUrl}>{t.contact.offers}</a>
                </p>
              </div>
            </div>

            <form noValidate onSubmit={onSubmit} className="contact__form">
              <Field
                id={nameId}
                label={t.contact.name}
                error={errors.name ? t.contact.nameError : undefined}
                value={values.name}
                placeholder={t.contact.namePlaceholder}
                onChange={(value) =>
                  setValues((current) => ({ ...current, name: value }))
                }
              />
              <Field
                id={emailId}
                label={t.contact.email}
                type="email"
                error={errors.email ? t.contact.emailError : undefined}
                value={values.email}
                placeholder={t.contact.emailPlaceholder}
                onChange={(value) =>
                  setValues((current) => ({ ...current, email: value }))
                }
              />
              <Field
                id={messageId}
                label={t.contact.message}
                multiline
                error={errors.message ? t.contact.messageError : undefined}
                value={values.message}
                placeholder={t.contact.messagePlaceholder}
                onChange={(value) =>
                  setValues((current) => ({ ...current, message: value }))
                }
              />
              <Button type="submit" variant="secondary" className="btn--submit">
                {t.contact.submit}
              </Button>
            </form>
          </div>
        </div>
      </SiteWrapper>
    </section>
  );
}
function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  multiline,
}) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(event) => onChange(event.target.value)}
          className="field__control field__control--area"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(event) => onChange(event.target.value)}
          className="field__control"
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
