import { Button } from "@/components/ui/Button";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { navItems, profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "@/components/ui/Icons";
import { useState } from "react";
const sectionIds = navItems.map((item) => item.id);
export function Navbar() {
  const activeId = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a href="#contenu-principal" className="sr-only navbar__skip">
        Aller au contenu
      </a>
      <SiteWrapper>
        <div className="navbar__inner">
          <a href="#accueil" className="navbar__brand">
            <span className="navbar__identity">
              <span className="navbar__name">
                {profile.firstName} {profile.lastName}
              </span>
              <span className="navbar__role">{profile.role}</span>
            </span>
          </a>

          <div className="navbar__actions">
            <nav aria-label="Navigation principale">
              <ul className="navbar__links">
                {navItems.map((item) => (
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
                {open ? "Fermer le menu" : "Ouvrir le menu"}
              </span>
            </Button>
            <a href="#contact" className="navbar__cta">
              Me contacter
            </a>
          </div>
        </div>

        {open ? (
          <ul id="menu-mobile" className="navbar__mobile">
            {navItems.map((item) => (
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
                Me contacter
              </a>
            </li>
          </ul>
        ) : null}
      </SiteWrapper>
    </header>
  );
}
