import { Button } from "@/components/ui/Button";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n";
import { asset } from "@/lib/asset";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "@/components/ui/Icons";
import { useState } from "react";
const sectionIds = ["projets", "philosophie", "parcours"];
export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const activeId = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a href="#contenu-principal" className="sr-only navbar__skip">
        {t.skip}
      </a>
      <SiteWrapper>
        <div className="navbar__inner">
          <a href="#accueil" className="navbar__brand">
            <img
              className="navbar__logo"
              src={asset("favicon.svg")}
              width="36"
              height="36"
              alt=""
            />
            <span className="navbar__identity">
              <span className="navbar__name">
                {profile.firstName} {profile.lastName}
              </span>
              <span className="navbar__role">{t.role}</span>
            </span>
          </a>

          <div className="navbar__actions">
            <nav aria-label={t.navLabel}>
              <ul className="navbar__links">
                {t.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={
                        activeId === item.id ? "location" : undefined
                      }
                      className="navbar__link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <LangSwitch lang={lang} setLang={setLang} label={t.langLabel} />
            <Button
              type="button"
              className="btn--icon"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="icon icon--16" aria-hidden="true" />
              ) : (
                <Menu className="icon icon--16" aria-hidden="true" />
              )}
              <span className="sr-only">
                {open ? t.closeMenu : t.openMenu}
              </span>
            </Button>
            <a href="#contact" className="navbar__cta">
              {t.contactCta}
            </a>
          </div>
        </div>

        {open ? (
          <ul id="menu-mobile" className="navbar__mobile">
            {t.nav.map((item) => (
              <li key={item.id}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="navbar__mobile-cta"
                onClick={() => setOpen(false)}
              >
                {t.contactCta}
              </a>
            </li>
          </ul>
        ) : null}
      </SiteWrapper>
    </header>
  );
}

function LangSwitch({ lang, setLang, label }) {
  return (
    <div className="navbar__lang" role="group" aria-label={label}>
      <button
        type="button"
        className={lang === "fr" ? "is-active" : undefined}
        aria-pressed={lang === "fr"}
        onClick={() => setLang("fr")}
      >
        FR
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={lang === "en" ? "is-active" : undefined}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
