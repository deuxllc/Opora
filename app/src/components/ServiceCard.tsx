interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <div
      className="service-card bg-white rounded-2xl p-8 cursor-default"
      style={{ boxShadow: '0 4px 24px rgba(45, 42, 38, 0.06)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
        style={{ backgroundColor: 'var(--bg-accent-soft)' }}
      >
        {icon}
      </div>
      <h3
        className="font-body text-lg font-semibold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
      <p
        className="font-body text-[15px] leading-[1.65]"
        style={{ color: 'var(--text-secondary)' }}
      >
        {desc}
      </p>
    </div>
  );
}
