interface ReviewCardProps {
  initial: string;
  name: string;
  city: string;
  topic: string;
  text: string;
}

export default function ReviewCard({ initial, name, city, topic, text }: ReviewCardProps) {
  return (
    <div
      className="review-card bg-white rounded-2xl p-8"
      style={{ boxShadow: '0 4px 24px rgba(45, 42, 38, 0.06)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-heading text-lg font-semibold flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #C25B45 0%, #D4846A 100%)',
          }}
        >
          {initial}
        </div>
        <div>
          <p className="font-body text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            {name}
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
            {city}
          </p>
        </div>
      </div>

      {/* Topic tag */}
      <span
        className="inline-block font-body text-[13px] font-medium px-3 py-1 rounded-full mb-3"
        style={{ backgroundColor: 'var(--bg-accent-soft)', color: 'var(--text-accent)' }}
      >
        {topic}
      </span>

      {/* Text */}
      <p
        className="font-body text-[15px] leading-[1.7]"
        style={{ color: 'var(--text-secondary)' }}
      >
        {text}
      </p>
    </div>
  );
}
