import { Button } from "@/components/ui/button";

export function PortfolioLamp({ lit, onPull, intro = false }: { lit: boolean; onPull: () => void; intro?: boolean }) {
  return (
    <div className={`portfolio-lamp ${lit ? "is-lit" : ""} ${intro ? "intro-lamp" : ""}`}>
      <div className="lamp-wire" />
      <div className="lamp-light" />
      <svg className="lamp-shade" viewBox="0 0 240 145" role="img" aria-label={lit ? "Illuminated pendant lamp" : "Pendant lamp"}>
        <path className="shade-cap" d="M108 18 Q120 5 132 18 L136 31 H104Z" />
        <path className="shade-body" d="M103 29 Q120 23 137 29 L214 118 Q220 127 208 132 H32 Q20 127 26 118Z" />
        <path className="shade-highlight" d="M105 32 L43 115" />
        <ellipse className="shade-rim" cx="120" cy="126" rx="95" ry="9" />
        <ellipse className="lamp-bulb" cx="120" cy="126" rx="22" ry="6" />
      </svg>
      <Button variant="cord" className="pull-cord" onClick={onPull} aria-label={intro ? "Pull lamp cord to enter portfolio" : "Pull lamp cord"} title="Pull the cord">
        <span className="cord-thread" /><span className="cord-handle" />
      </Button>
    </div>
  );
}