import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CourseCard from './CourseCard';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    number: '01',
    title: 'Серия психологических консультаций',
    desc: 'Индивидуальные встречи. Работа с тревогой, сном, самооценкой, зависимостями. Не шаблонно — под вашу ситуацию.',
  },
  {
    number: '02',
    title: 'Консультации врача-психиатра',
    desc: 'Назначение препаратов, когда это необходимо. Без принуждения, только по показаниям.',
  },
  {
    number: '03',
    title: 'Консультации нутрициолога',
    desc: 'Анализ питания, добавки, коррекция дефицитов. То, из чего строится ваше самочувствие.',
  },
  {
    number: '04',
    title: 'Аппаратный массаж',
    desc: 'Снятие нервно-мышечного напряжения. Когда тело зажато настолько, что не даёт уму отдохнуть.',
  },
  {
    number: '05',
    title: 'Телесные практики',
    desc: 'Работа с телом: дыхание, расслабление, осознание напряжения, которое мы не замечаем.',
  },
  {
    number: '06',
    title: 'Групповая комплексная терапия',
    desc: 'Парная работа психологов + групповая поддержка. Вы не одни.',
  },
];

export default function Course() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll('.course-card');
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
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
      id="course"
      style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p className="section-label mb-4">Комплексный курс</p>
        <h2
          className="font-heading font-medium mb-3"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--text-primary)' }}
        >
          Что входит в программу
        </h2>
        <p
          className="font-body leading-[1.7] mb-10"
          style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)' }}
        >
          Не отдельные услуги — а единый процесс, где всё связано
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <CourseCard key={course.number} {...course} />
          ))}
        </div>

        <p
          className="font-body text-[15px] italic mt-8 text-center"
          style={{ color: 'var(--text-muted)' }}
        >
          Всё это происходит по адресу: <em>г. Кемерово, ул. Рукавишникова, 9А</em>. В кабинете, а не онлайн.
        </p>
      </div>
    </section>
  );
}
