import { Button } from "@/components/ui/Button";
import { EmailCopyBox } from "@/components/ui/EmailCopyBox";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { useToast } from "@/context/toast-context";
import { profile } from "@/data/profile";
import { useId, useState } from "react";
const initial = { name: "", email: "", message: "" };
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Indiquez un nom d'au moins 2 caractères.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Indiquez une adresse email valide.";
  }
  if (values.message.trim().length < 20) {
    errors.message = "Le message doit contenir au moins 20 caractères.";
  }
  return errors;
}
export function Contact() {
  const { notify } = useToast();
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
    const subject = encodeURIComponent(`Contact portfolio — ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}\n${values.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    notify("Message préparé. Votre client mail devrait s'ouvrir.");
    setValues(initial);
  };
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact">
      <SiteWrapper>
        <div className="contact__panel">
          <div className="contact__grid">
            <div>
              <h2 id="contact-title" className="contact__title">
                Construisons une interface d'exception ensemble.
              </h2>
              <p className="contact__intro">
                Refonte, design system, accessibilité ou mise en production :
                écrivez-moi. Le formulaire valide les champs, puis ouvre votre
                client mail.
              </p>
              <div className="contact__channels">
                <EmailCopyBox email={profile.email} />
                <p className="contact__social">
                  <a href={profile.links[0]?.href}>
                    GitHub / @{profile.githubHandle}
                  </a>
                  <span className="contact__sep">·</span>
                  <a href={profile.links[1]?.href}>
                    LinkedIn / {profile.linkedinHandle}
                  </a>
                  <span className="contact__sep">·</span>
                  <a href={profile.cvUrl}>Télécharger le CV (PDF)</a>
                </p>
              </div>
            </div>

            <form noValidate onSubmit={onSubmit} className="contact__form">
              <Field
                id={nameId}
                label="Votre nom ou entité"
                error={errors.name}
                value={values.name}
                placeholder="ex. Agence Studio / Marie Dupont"
                onChange={(value) =>
                  setValues((current) => ({ ...current, name: value }))
                }
              />
              <Field
                id={emailId}
                label="Adresse e-mail de contact"
                type="email"
                error={errors.email}
                value={values.email}
                placeholder="marie@entreprise.com"
                onChange={(value) =>
                  setValues((current) => ({ ...current, email: value }))
                }
              />
              <Field
                id={messageId}
                label="Projet ou besoin"
                multiline
                error={errors.message}
                value={values.message}
                placeholder="Décrivez succinctement les objectifs ou le calendrier envisagé..."
                onChange={(value) =>
                  setValues((current) => ({ ...current, message: value }))
                }
              />
              <Button type="submit" variant="secondary" className="btn--submit">
                Transmettre le message
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
