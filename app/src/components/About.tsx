import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
      id="about"
      style={{ backgroundColor: 'var(--bg-warm)', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}
    >
      <div className="mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16" style={{ maxWidth: 1200 }}>
        {/* Text */}
        <div ref={textRef} className="flex-1 md:max-w-[55%]">
          <p className="section-label mb-4">О проекте</p>
          <h2
            className="font-heading font-medium mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--text-primary)' }}
          >
            Почему мы так работаем
          </h2>
          <p
            className="font-body leading-[1.75]"
            style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)' }}
          >
            Мы — команда, которая сложилась из собственного опыта поиска помощи. Один из нас проходил через тревогу, зависимости, бессонницу, разных специалистов и тупики. Другой — через выгорание и чувство, что тело перестало слушаться. Третий — через понимание, что медицина без психологии и психология без тела — это половины решения.
          </p>
          <p
            className="font-body leading-[1.75] mt-4"
            style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)' }}
          >
            Мы не придумали метод в академии. Мы собрали его из того, что реально помогло. И продолжаем собирать — с каждым человеком, который приходит к нам.
          </p>
        </div>

        {/* Illustration */}
        <div ref={imgRef} className="flex-shrink-0 w-full md:w-auto flex justify-center">
          <img
            src="/assets/cosy-warm-illustration.png"
            alt="Уютный кабинет"
            className="w-full max-w-[320px] md:max-w-[400px] h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
