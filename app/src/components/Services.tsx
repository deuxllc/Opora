import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: '💓',
    title: 'Тревожность и панические атаки',
    desc: 'Когда сердце колотится, а воздуха не хватает. Когда супермаркет или лифт — испытание.',
  },
  {
    icon: '🌙',
    title: 'Проблемы со сном',
    desc: 'Не засыпаете до трёх, просыпаетесь в четыре, или спите двенадцать часов — и всё равно устали.',
  },
  {
    icon: '😰',
    title: 'Фобии',
    desc: 'Страх, который кажется нелогичным — но парализует. Мы не будем говорить «просто расслабьтесь».',
  },
  {
    icon: '🔄',
    title: 'Зависимости',
    desc: 'Никотин, алкоголь, еда, телефон — то, без чего «невозможно», но с чем невыносимо.',
  },
  {
    icon: '🪞',
    title: 'Проблемы с самооценкой',
    desc: '«Я недостаточно хорош». «Всё, что я делаю — фигня». Голос, который не даёт жить.',
  },
  {
    icon: '🌫️',
    title: 'Депрессия и апатия',
    desc: 'Не обязательно «не хочу жить». Иногда просто не хочется вставать с дивана. И это тоже депрессия.',
  },
  {
    icon: '⏳',
    title: 'Лень и прокрастинация',
    desc: 'Когда откладываете до последнего, а потом ненавидите себя. Это не лень — это тревожное избегание.',
  },
  {
    icon: '💪',
    title: 'Жизнь в напряжении',
    desc: 'Плечи у ушей, челюсть сводит, живот в комке. Тело кричит — а вы не слышите.',
  },
  {
    icon: '🕯️',
    title: 'Переживание утраты',
    desc: 'Когда мир разделился на «до» и «после». И «после» кажется бессмысленным.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll('.service-card');
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
      id="services"
      style={{ backgroundColor: 'var(--bg-cream)', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p className="section-label mb-4">С чем работаем</p>
        <h2
          className="font-heading font-medium mb-10"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--text-primary)' }}
        >
          Если вы узнали себя хоть в одном пункте
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
