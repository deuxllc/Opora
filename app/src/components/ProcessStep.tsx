interface ProcessStepProps {
  number: number;
  title: string;
  desc: string;
  isLast: boolean;
}

export default function ProcessStep({ number, title, desc, isLast }: ProcessStepProps) {
  return (
    <div className="process-step flex gap-6 pb-10 relative">
      {/* Circle number */}
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-body text-lg font-semibold z-10"
        style={{
          border: '2px solid var(--text-accent)',
          color: 'var(--text-accent)',
          backgroundColor: '#FFFFFF',
        }}
      >
        {number}
      </div>

      {/* Content */}
      <div className="pt-1">
        <h3
          className="font-body text-xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>
        <p
          className="font-body text-base leading-[1.65]"
          style={{ color: 'var(--text-secondary)' }}
        >
          {desc}
        </p>
      </div>

      {/* Connecting line for mobile */}
      {!isLast && (
        <div
          className="absolute left-[23px] top-14 w-0.5 h-full md:hidden"
          style={{ backgroundColor: 'var(--border-light)' }}
        />
      )}
    </div>
  );
}
