import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamCard from './TeamCard';

gsap.registerPlugin(ScrollTrigger);

const members = [
  {
    initial: 'Н',
    name: 'Никита Бухтояров',
    role: 'Клинический психолог, нутрициолог',
    desc: 'Разработал комплексный метод, потому что сам проходил через тревогу, зависимости, поиски помощи. Отвечает за психологическое направление и нутрициологическую часть.',
  },
  {
    initial: 'К',
    name: 'Кристина Королёва',
    role: 'Клинический психолог',
    desc: 'Парная работа с Никитой. Телесно-ориентированные практики, работа с телом, с напряжением, которое мы не замечаем, но которое управляет нами.',
  },
  {
    initial: 'Д',
    name: 'Денис Хорлампенко',
    role: 'Психиатр',
    desc: 'Медикаментозная поддержка, когда это необходимо. Без принуждения, без «таблеток на всю жизнь» — только тогда, когда тело и психика не могут самостоятельно выйти из кризиса.',
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll('.team-card');
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      style={{ backgroundColor: 'var(--bg-cream)', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p className="section-label mb-4">Команда</p>
        <h2
          className="font-heading font-medium mb-3"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--text-primary)' }}
        >
          Три человека — один подход
        </h2>
        <p
          className="font-body leading-[1.7] mb-10"
          style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)' }}
        >
          Вы не один на один с незнакомым человеком
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {members.map((member) => (
            <TeamCard key={member.initial} {...member} />
          ))}
        </div>

        <p
          ref={textRef}
          className="font-body text-lg font-medium text-center mt-12 mx-auto leading-[1.7]"
          style={{ color: 'var(--text-primary)', maxWidth: 700 }}
        >
          Мы работаем вместе. Вы не один на один с незнакомым человеком — вы в поле внимания трёх специалистов, которые обсуждают ваш случай между собой.
        </p>
      </div>
    </section>
  );
}
