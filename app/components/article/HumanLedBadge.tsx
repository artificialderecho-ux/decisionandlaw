'use client';

interface HumanLedBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const sizeMap = {
  sm: { icon: 14, fontSize: '10px', padding: '3px 8px' },
  md: { icon: 16, fontSize: '11px', padding: '4px 10px' },
  lg: { icon: 20, fontSize: '12px', padding: '5px 12px' },
};

export default function HumanLedBadge({ size = 'md', showLabel = true }: HumanLedBadgeProps) {
  const s = sizeMap[size];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: s.padding,
        fontSize: s.fontSize,
        fontWeight: '600',
        letterSpacing: '0.02em',
        color: '#555',
        backgroundColor: '#f4f4f5',
        border: '1px solid #e5e5e5',
        borderRadius: '9999px',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
      title="Human-Led, AI-Assisted — DFF HMC Classification"
    >
      <svg
        width={s.icon}
        height={Math.round(s.icon * 509.93 / 447.25)}
        viewBox="0 0 447.25 509.93"
        fill="#555"
        aria-hidden="true"
      >
        <path d="M223.59,21.93c14.98,0,29.96,5.72,41.39,17.15l102.04,102.04c36.71,36.71,59.41,87.42,59.41,143.43,0,112.03-90.82,202.84-202.84,202.84S20.74,396.57,20.74,284.55c0-56.01,22.7-106.72,59.41-143.43l102.04-102.04c11.43-11.43,26.41-17.15,41.39-17.15M223.59,6.93c-19.64,0-38.11,7.65-52,21.54l-102.04,102.04c-20,20-35.71,43.3-46.68,69.24-11.36,26.87-17.13,55.4-17.13,84.8s5.76,57.93,17.13,84.8c10.97,25.94,26.68,49.24,46.68,69.24,20,20,43.3,35.71,69.24,46.68,26.87,11.36,55.4,17.13,84.8,17.13s57.93-5.76,84.8-17.13c25.94-10.97,49.24-26.68,69.24-46.68,20-20,35.71-43.3,46.68-69.24,11.36-26.87,17.13-55.4,17.13-84.8s-5.76-57.93-17.13-84.8c-10.97-25.94-26.68-49.24-46.68-69.24l-102.04-102.04c-13.89-13.89-32.36-21.54-52-21.54h0Z" />
      </svg>
      {showLabel && <span>Human-Led · AI-Assisted</span>}
    </span>
  );
}
