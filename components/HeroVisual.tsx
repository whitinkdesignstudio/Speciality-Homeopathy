import { ReactNode } from 'react';

interface Badge {
  className?: string;
  icon: ReactNode;
  text: string;
}

interface HeroVisualProps {
  centerIcon: ReactNode;
  badges?: Badge[];
  children?: ReactNode;
}

export default function HeroVisual({ centerIcon, badges, children }: HeroVisualProps) {
  if (children) {
    return <div className="hero-visual">{children}</div>;
  }

  return (
    <div className="hero-visual">
      <div className="hv-stage">
        <div className="hv-glow"></div>
        <svg className="hv-ring" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" />
        </svg>
        <div className="hv-center">{centerIcon}</div>
        {badges?.map((badge, i) => (
          <div key={i} className={`hv-badge hv-badge-${i + 1} ${badge.className || ''}`}>
            <span className="bi">{badge.icon}</span>
            {badge.text}
          </div>
        ))}
      </div>
    </div>
  );
}
