interface AuthorAvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
}

const AVATAR_COLORS = [
  { bg: '#1a1a1a', text: '#ffffff' },
  { bg: '#404040', text: '#ffffff' },
  { bg: '#525252', text: '#ffffff' },
  { bg: '#6b7280', text: '#ffffff' },
  { bg: '#737373', text: '#ffffff' },
  { bg: '#374151', text: '#ffffff' },
  { bg: '#4b5563', text: '#ffffff' },
  { bg: '#1f2937', text: '#ffffff' },
];

function getColorForInitials(initials: string): { bg: string; text: string } {
  const charSum = initials.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return AVATAR_COLORS[charSum % AVATAR_COLORS.length];
}

export default function AuthorAvatar({ initials, size = 'md' }: AuthorAvatarProps) {
  const { bg, text } = getColorForInitials(initials);
  
  const sizes = {
    sm: { container: '56px', font: '16px' },
    md: { container: '72px', font: '20px' },
    lg: { container: '80px', font: '24px' },
  };

  const currentSize = sizes[size];

  return (
    <div
      style={{
        width: currentSize.container,
        height: currentSize.container,
        borderRadius: '50%',
        backgroundColor: bg,
        color: text,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        fontSize: currentSize.font,
        fontWeight: '600',
        letterSpacing: '0.05em',
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}
