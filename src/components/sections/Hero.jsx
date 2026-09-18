import { ButtonLink } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { CropMarks } from "@/components/ui/CropMarks";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";
import { ChevronDown, MapPin } from "@/components/ui/Icons";
export function Hero() {
  const [city, region] = profile.location.split(",").map((part) => part.trim());
  return (
    <section id="accueil" aria-labelledby="hero-title" className="hero">
      <SiteWrapper>
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="text-frame">
              <h1 id="hero-title" className="hero__title">
                {profile.headline}
              </h1>
              <p className="hero__summary">{profile.summary}</p>
            </div>
            <div className="hero__ribbon">
              <p className="hero__place">
                <MapPin className="hero__pin" aria-hidden="true" />
                <span className="hero__city">{city}</span>
                <span aria-hidden="true">·</span>
                <span>{region}</span>
              </p>
              <ul className="hero__tech">
                {profile.stackHighlights.map((tech) => (
                  <li key={tech}>
                    <Chip>{tech}</Chip>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero__cta">
              <ButtonLink href="#projets" variant="primary">
                Explorer les projets
                <ChevronDown className="icon icon--14" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          <aside className="hero__portrait">
            <figure className="hero__figure">
              <div className="hero__frame">
                <CropMarks />
                <img
                  src={asset("portrait-640.webp")}
                  srcSet={`${asset("portrait-480.webp")} 480w, ${asset("portrait-640.webp")} 640w, ${asset("portrait-864.webp")} 864w`}
                  sizes="(min-width: 1024px) 36rem, 92vw"
                  width={640}
                  height={853}
                  alt={`Portrait de ${profile.firstName} ${profile.lastName}`}
                  className="hero__photo"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <figcaption className="hero__caption">
                <span className="hero__caption-name">
                  {profile.firstName} {profile.lastName}
                </span>
                <span className="hero__caption-role">{profile.role}</span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </SiteWrapper>
    </section>
  );
}
