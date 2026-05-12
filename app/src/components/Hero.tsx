import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import SparkleCanvas from './SparkleCanvas';

interface HeroProps {
  onNavigate: (target: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.from(labelRef.current, { opacity: 0, y: 15, duration: 0.4 }, 0.3)
      .from(headingRef.current, { opacity: 0, y: 30, duration: 0.7 }, 0.5)
      .from(subRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.9)
      .from(btnRef.current, { opacity: 0, y: 20, duration: 0.5 }, 1.2)
      .from(noteRef.current, { opacity: 0, duration: 0.4 }, 1.5)
      .from(arrowRef.current, { opacity: 0, duration: 0.3 }, 1.8);

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', backgroundColor: 'var(--bg-hero)' }}
    >
      <AuroraBackground />
      <SparkleCanvas />

      <div
        className="relative flex flex-col items-center text-center px-5"
        style={{ zIndex: 2, maxWidth: 720, paddingTop: 80 }}
      >
        {/* Label */}
        <p
          ref={labelRef}
          className="section-label mb-4"
        >
          Психологическая помощь в Кемерово
        </p>

        {/* H1 */}
        <h1
          ref={headingRef}
          className="font-heading font-medium leading-[1.15]"
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            color: 'var(--text-primary)',
            maxWidth: 700,
          }}
        >
          Когда внутри всё{' '}
          <br className="hidden sm:block" />
          сжимается —{' '}
          <em style={{ color: 'var(--text-hero-accent)', fontStyle: 'italic' }}>
            есть куда прийти
          </em>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="font-body mt-6 leading-[1.7]"
          style={{
            fontSize: 'clamp(16px, 1.8vw, 18px)',
            color: 'var(--text-secondary)',
            maxWidth: 520,
          }}
        >
          Три специалиста. Один кабинет. Психология, тело, питание и медицинская поддержка — когда нужно, а не когда положено.
        </p>

        {/* CTA Button */}
        <button
          ref={btnRef}
          onClick={() => onNavigate('#contacts')}
          className="animate-terracotta-pulse mt-9 font-body text-base font-medium transition-all duration-300 hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--btn-primary)',
            color: 'var(--btn-text)',
            padding: '14px 36px',
            borderRadius: 12,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--btn-primary-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--btn-primary)')}
        >
          Записаться на бесплатную консультацию
        </button>

        {/* Note under button */}
        <p
          ref={noteRef}
          className="font-body mt-3 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Или напишите нам в{' '}
          <a
            href="https://t.me/opora42"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors"
            style={{ color: 'var(--text-accent)' }}
          >
            Telegram
          </a>
          {' '}или{' '}
          <a
            href="https://wa.me/79130000000"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors"
            style={{ color: 'var(--text-accent)' }}
          >
            WhatsApp
          </a>
        </p>

        {/* Scroll down arrow */}
        <button
          ref={arrowRef}
          onClick={() => onNavigate('#about')}
          className="animate-bounce-arrow mt-12 flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="font-body text-sm">Узнать больше</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
