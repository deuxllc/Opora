import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Бесплатный курс поддержки',
  'Парная работа двух психологов',
  'Телесные практики',
  'Медикаментозная поддержка при необходимости',
  'Нутрициологическое сопровождение',
];

interface SpecialProgramProps {
  onNavigate: (target: string) => void;
}

export default function SpecialProgram({ onNavigate }: SpecialProgramProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(imgRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="svo"
      style={{
        background: 'linear-gradient(135deg, rgba(194, 91, 69, 0.08) 0%, var(--bg-cream) 100%)',
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
      }}
    >
      <div className="mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12" style={{ maxWidth: 1200 }}>
        {/* Text */}
        <div ref={textRef} className="flex-1">
          <p className="section-label mb-4">Специальная программа</p>
          <h2
            className="font-heading font-medium mb-5"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--text-primary)' }}
          >
            Если вы потеряли близкого на службе
          </h2>
          <p
            className="font-body leading-[1.75] mb-6"
            style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)' }}
          >
            Мы не говорим «время лечит». Мы работаем с тем, что происходит сейчас: со сном, с телом, с чувством, что жизнь остановилась.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--text-accent)' }}
                />
                <span
                  className="font-body text-base leading-8"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onNavigate('#contacts')}
            className="font-body text-base font-medium transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--btn-primary)',
              color: 'var(--btn-text)',
              padding: '14px 36px',
              borderRadius: 12,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--btn-primary-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--btn-primary)')}
          >
            Получить бесплатную помощь
          </button>
        </div>

        {/* Illustration */}
        <div ref={imgRef} className="flex-shrink-0 w-full md:w-auto flex justify-center">
          <img
            src="/assets/calm-warm-illustration.png"
            alt="Поддержка"
            className="w-full max-w-[280px] md:max-w-[360px] h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
