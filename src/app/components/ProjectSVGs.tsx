// Unified grid-based modular SVG system for OXX Studio projects
// All icons share a 160x160 viewBox with 20-unit grid modules

export function ShaperSVG() {
  // Interlocking angular form — algorithmic shaping
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Vertical spine */}
      <rect x="60" y="0" width="20" height="160" fill="currentColor" />
      {/* Horizontal arms — asymmetric */}
      <rect x="0" y="20" width="60" height="20" fill="currentColor" />
      <rect x="80" y="60" width="80" height="20" fill="currentColor" />
      <rect x="0" y="100" width="60" height="20" fill="currentColor" />
      <rect x="80" y="140" width="60" height="20" fill="currentColor" />
      {/* Accent blocks */}
      <rect x="120" y="20" width="20" height="20" fill="currentColor" />
      <rect x="20" y="60" width="20" height="20" fill="currentColor" />
      <rect x="140" y="120" width="20" height="20" fill="currentColor" />
    </svg>
  );
}

export function AIASVG() {
  // Structured cluster — computation in organized chaos
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Core diamond */}
      <rect x="60" y="40" width="40" height="40" fill="currentColor" />
      <rect x="40" y="60" width="20" height="20" fill="currentColor" />
      <rect x="100" y="60" width="20" height="20" fill="currentColor" />
      <rect x="60" y="80" width="20" height="20" fill="currentColor" />
      <rect x="80" y="20" width="20" height="20" fill="currentColor" />
      {/* Orbiting fragments */}
      <rect x="0" y="0" width="20" height="20" fill="currentColor" />
      <rect x="140" y="0" width="20" height="20" fill="currentColor" />
      <rect x="0" y="140" width="20" height="20" fill="currentColor" />
      <rect x="140" y="140" width="20" height="20" fill="currentColor" />
      {/* Mid satellites */}
      <rect x="0" y="80" width="20" height="20" fill="currentColor" />
      <rect x="140" y="60" width="20" height="20" fill="currentColor" />
      <rect x="20" y="120" width="20" height="20" fill="currentColor" />
      <rect x="120" y="120" width="20" height="20" fill="currentColor" />
    </svg>
  );
}

export function IntuitionEncoderSVG() {
  // Signal encoding — wide input narrowing to focused output
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Input band — left */}
      <rect x="0" y="0" width="20" height="20" fill="currentColor" />
      <rect x="0" y="40" width="20" height="20" fill="currentColor" />
      <rect x="0" y="80" width="20" height="20" fill="currentColor" />
      <rect x="0" y="120" width="20" height="20" fill="currentColor" />
      {/* Narrowing columns */}
      <rect x="40" y="20" width="20" height="20" fill="currentColor" />
      <rect x="40" y="60" width="20" height="20" fill="currentColor" />
      <rect x="40" y="100" width="20" height="20" fill="currentColor" />
      <rect x="80" y="40" width="20" height="20" fill="currentColor" />
      <rect x="80" y="80" width="20" height="20" fill="currentColor" />
      {/* Focus point */}
      <rect x="120" y="60" width="20" height="20" fill="currentColor" />
      {/* Output — right */}
      <rect x="140" y="60" width="20" height="40" fill="currentColor" />
    </svg>
  );
}

export function MamaVCRSVG() {
  // Nested frames with offset — cinematic depth
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Outer frame */}
      <rect x="0" y="0" width="120" height="20" fill="currentColor" />
      <rect x="0" y="0" width="20" height="120" fill="currentColor" />
      <rect x="100" y="0" width="20" height="100" fill="currentColor" />
      <rect x="0" y="100" width="120" height="20" fill="currentColor" />
      {/* Inner frame — offset */}
      <rect x="40" y="40" width="120" height="20" fill="currentColor" />
      <rect x="40" y="40" width="20" height="120" fill="currentColor" />
      <rect x="140" y="40" width="20" height="120" fill="currentColor" />
      <rect x="40" y="140" width="120" height="20" fill="currentColor" />
      {/* Center accent */}
      <rect x="80" y="80" width="20" height="20" fill="currentColor" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 9L0.499999 17.6603L0.5 0.339746L20 9Z" fill="currentColor" />
    </svg>
  );
}
