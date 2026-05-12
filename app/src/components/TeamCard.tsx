interface TeamCardProps {
  initial: string;
  name: string;
  role: string;
  desc: string;
}

export default function TeamCard({ initial, name, role, desc }: TeamCardProps) {
  return (
    <div
      className="team-card bg-white rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1.5"
      style={{ boxShadow: '0 4px 24px rgba(45, 42, 38, 0.06)' }}
    >
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-white font-heading text-[28px] font-semibold"
        style={{
          background: 'linear-gradient(135deg, #C25B45 0%, #D4846A 100%)',
        }}
      >
        {initial}
      </div>
      <h3
        className="font-body text-xl font-semibold mb-1"
        style={{ color: 'var(--text-primary)' }}
      >
        {name}
      </h3>
      <p
        className="font-body text-sm font-medium mb-4"
        style={{ color: 'var(--text-accent)' }}
      >
        {role}
      </p>
      <p
        className="font-body text-[15px] leading-[1.65]"
        style={{ color: 'var(--text-secondary)' }}
      >
        {desc}
      </p>
    </div>
  );
}
