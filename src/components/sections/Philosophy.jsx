import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { profile } from "@/data/profile";
import { timeline } from "@/data/timeline";
import { skillGroups } from "@/data/skills";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/cn";
export function Philosophy() {
  return (
    <section
      id="philosophie"
      aria-labelledby="philosophie-title"
      className="philosophy"
    >
      <SiteWrapper>
        <div className="philosophy__stack">
          <div className="philosophy__intro">
            <div className="text-frame">
              <SectionHeader
                id="philosophie-title"
                title="L'amélioration continue appliquée au code"
                bordered={false}
              />
              <p className="philosophy__quote">{profile.philosophyQuote}</p>
              {profile.philosophyBody.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="philosophy__body">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="philosophy__principles">
              {profile.principles.map((item) => (
                <article key={item.title} className="philosophy__principle">
                  <p className="philosophy__principle-title">{item.title}</p>
                  <p className="philosophy__principle-body">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="philosophy__chips">
              {skillGroups.flatMap((group) =>
                group.items
                  .slice(0, 4)
                  .map((item) => <Chip key={item}>{item}</Chip>),
              )}
            </div>
          </div>

          <div id="parcours" className="timeline">
            <h2 className="timeline__title">Parcours & évolution</h2>
            <ol className="timeline__list">
              {timeline.map((event, index) => (
                <li key={event.id} className="timeline__item">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "timeline__dot",
                      index === 0 && "timeline__dot--current",
                    )}
                  />
                  <div className="timeline__heading">
                    <h3 className="timeline__name">{event.title}</h3>
                    <time className="timeline__period">{event.period}</time>
                  </div>
                  <p className="timeline__org">{event.organization}</p>
                  <p className="timeline__desc">{event.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SiteWrapper>
    </section>
  );
}
