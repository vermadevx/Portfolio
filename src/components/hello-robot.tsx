export function HelloRobot() {
  return (
    <div className="hello-robot" role="status" aria-label="A cute robot waves and says Hello World">
      <span className="robot-greeting">Hello World</span>
      <svg className="robot-character" viewBox="0 0 140 80" width="126" height="72" aria-hidden="true">
        <ellipse className="robot-shadow" cx="67" cy="74" rx="26" ry="3" />
        <g className="robot-float">
          <path className="robot-antenna" d="M67 17V9" />
          <circle className="robot-beacon" cx="67" cy="7" r="3" />
          <rect className="robot-shell" x="39" y="17" width="56" height="33" rx="12" />
          <rect className="robot-face" x="45" y="23" width="44" height="21" rx="8" />
          <g className="robot-eyes"><circle cx="57" cy="32" r="3" /><circle cx="77" cy="32" r="3" /></g>
          <path className="robot-smile" d="M62 37Q67 42 72 37" />
          <rect className="robot-shell" x="51" y="53" width="32" height="15" rx="6" />
          <path className="robot-limb" d="M43 54L37 63M58 69V72M76 69V72" />
          <path className="robot-heart" d="M67 64l-4-4a2.5 2.5 0 0 1 4-3 2.5 2.5 0 0 1 4 3Z" />
          <g className="robot-wave"><path className="robot-limb" d="M89 57L102 46L104 35" /><path className="robot-fingers" d="M104 35L98 30M104 35V27M104 35L110 29" /></g>
          <path className="robot-spark robot-spark-one" d="M118 19v8m-4-4h8" />
          <path className="robot-spark robot-spark-two" d="M24 36v6m-3-3h6" />
        </g>
      </svg>
    </div>
  );
}