type AgentBoxProps = {
  initial: string;
  className?: string;
};

/**
 * Stylized isometric product "box" rendered in SVG (Martes-style),
 * dark faces + glowing lime edges. Fallback for AI render.
 */
export default function AgentBox({ initial, className = "" }: AgentBoxProps) {
  return (
    <div className={`relative flex aspect-square items-center justify-center overflow-hidden ${className}`}>
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_45%,rgba(57,231,95,0.18),transparent_70%)]" />

      <svg viewBox="0 0 200 220" className="relative w-[68%] max-w-[200px]" fill="none">
        <defs>
          <linearGradient id="topFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22201a" />
            <stop offset="1" stopColor="#161510" />
          </linearGradient>
          <linearGradient id="leftFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#161510" />
            <stop offset="1" stopColor="#0e0d0a" />
          </linearGradient>
          <linearGradient id="rightFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1c1a14" />
            <stop offset="1" stopColor="#100f0b" />
          </linearGradient>
          <filter id="limeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faces */}
        <polygon points="100,30 165,67 100,104 35,67" fill="url(#topFace)" />
        <polygon points="35,67 100,104 100,180 35,143" fill="url(#leftFace)" />
        <polygon points="165,67 100,104 100,180 165,143" fill="url(#rightFace)" />

        {/* Glowing lime edges */}
        <g stroke="#39E75F" strokeWidth="1.6" strokeLinejoin="round" filter="url(#limeGlow)" opacity="0.95">
          <polygon points="100,30 165,67 100,104 35,67" fill="none" />
          <line x1="35" y1="67" x2="35" y2="143" />
          <line x1="100" y1="104" x2="100" y2="180" />
          <line x1="165" y1="67" x2="165" y2="143" />
          <line x1="35" y1="143" x2="100" y2="180" />
          <line x1="165" y1="143" x2="100" y2="180" />
        </g>

        {/* Monogram on top face (skewed onto the iso plane) */}
        <text
          x="100"
          y="74"
          textAnchor="middle"
          className="font-heading"
          fontSize="30"
          fontWeight="700"
          fill="#F5F5F0"
          opacity="0.92"
          transform="rotate(-1 100 70)"
        >
          {initial}
        </text>

        {/* small amber detail line */}
        <line x1="48" y1="120" x2="78" y2="138" stroke="#E8B341" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <line x1="122" y1="138" x2="152" y2="120" stroke="#39E75F" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
  );
}
