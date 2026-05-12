interface CourseCardProps {
  number: string;
  title: string;
  desc: string;
}

export default function CourseCard({ number, title, desc }: CourseCardProps) {
  return (
    <div
      className="course-card bg-white rounded-2xl p-8"
    >
      <span
        className="font-heading text-5xl font-semibold block mb-2"
        style={{ color: 'var(--text-accent)' }}
      >
        {number}
      </span>
      <h3
        className="font-body text-xl font-semibold mb-3"
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
