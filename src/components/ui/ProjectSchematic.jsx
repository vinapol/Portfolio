import { cn } from "@/lib/cn";
export function ProjectSchematic({ kind }) {
  return (
    <div className="schematic">
      <div aria-hidden="true" className="schematic__grid" />
      <div
        className={cn(
          "schematic__panel",
          kind === "buffer" && "schematic__panel--center",
        )}
      >
        {kind === "bars" ? <Bars /> : null}
        {kind === "nodes" ? <Nodes /> : null}
        {kind === "chart" ? <Chart /> : null}
        {kind === "buffer" ? <Buffer /> : null}
      </div>
    </div>
  );
}
function Bars() {
  return (
    <>
      <div>
        <div className="schematic__bar schematic__bar--accent schematic__bar--w40" />
        <div className="schematic__bar schematic__bar--w75" />
        <div className="schematic__bar schematic__bar--w30" />
      </div>
      <div className="schematic__dots">
        <span className="schematic__dot schematic__dot--on" />
        <span className="schematic__dot schematic__dot--on" />
        <span className="schematic__dot" />
        <span className="schematic__dot" />
      </div>
    </>
  );
}
function Nodes() {
  return (
    <>
      <div>
        <div className="schematic__bar schematic__bar--accent schematic__bar--w55" />
        <div className="schematic__bar schematic__bar--w40" />
      </div>
      <div className="schematic__dots">
        <span className="schematic__dot schematic__dot--on" />
        <span className="schematic__dot" />
        <span className="schematic__dot schematic__dot--on" />
      </div>
    </>
  );
}
function Chart() {
  return (
    <div className="schematic__chart">
      <div className="schematic__col schematic__col--mid" />
      <div className="schematic__col schematic__col--tall" />
      <div className="schematic__col schematic__col--short" />
      <div className="schematic__col schematic__col--full" />
    </div>
  );
}
function Buffer() {
  return <p className="schematic__buffer">BUFFER: 0.4ms // READY</p>;
}
