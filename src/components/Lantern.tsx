import { useId } from 'react'

/**
 * The refined paper lantern from the design mockup — drawn as SVG with a
 * warm amber→rose body. Used as the brand mark and as ambient floaters.
 */
export default function Lantern({
  width = 64,
  className = '',
  glow = false,
}: {
  width?: number
  className?: string
  glow?: boolean
}) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      viewBox="0 0 120 168"
      width={width}
      className={className}
      style={glow ? { filter: 'drop-shadow(0 0 18px rgba(233,168,87,0.45))' } : undefined}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`lbody-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4C079" />
          <stop offset="52%" stopColor="#E9A857" />
          <stop offset="100%" stopColor="#D97D86" />
        </linearGradient>
      </defs>
      <rect x="52" y="8" width="16" height="7" rx="2.5" fill="#2A1C14" />
      <rect x="56" y="2" width="8" height="7" rx="2" fill="#2A1C14" />
      <path
        d="M26 80 Q26 30 60 30 Q94 30 94 80 Q94 130 60 130 Q26 130 26 80 Z"
        fill={`url(#lbody-${id})`}
      />
      <g stroke="rgba(42,24,16,0.22)" strokeWidth="1.4" fill="none">
        <path d="M27 64 Q60 56 93 64" />
        <path d="M26 80 Q60 73 94 80" />
        <path d="M27 96 Q60 104 93 96" />
      </g>
      <ellipse cx="60" cy="80" rx="34" ry="50" fill="none" stroke="rgba(244,234,219,0.18)" strokeWidth="1" />
      <line x1="60" y1="130" x2="60" y2="150" stroke="#2A1C14" strokeWidth="2.4" />
      <path d="M55 150 L60 162 L65 150 Z" fill="#D97D86" />
    </svg>
  )
}
