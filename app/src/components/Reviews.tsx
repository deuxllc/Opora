import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReviewCard from './ReviewCard';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    initial: 'А',
    name: 'Анна, 34 года',
    city: 'Кемерово',
    topic: 'Тревожность и панические атаки',
    text: 'Пришла с паническими атаками — не могла заходить в супермаркет, сердце колотилось, казалось, что сейчас умру. У Никиты спросили не только про страхи, но и про то, как я сплю, что ем, пью ли кофе. Оказалось, я пила 5 чашек в день и почти не ела белок. Добавили магний, убрали кофе, через месяц панические атаки стали реже, через три — почти ушли. Психологическая работа тоже велась, но я удивилась, как много зависело от тела.',
  },
  {
    initial: 'Д',
    name: 'Дмитрий, 41 год',
    city: 'Кемерово',
    topic: 'Зависимость от алкоголя',
    text: 'После развода начал пить. Не каждый день, но регулярно — чтобы уснуть. Психологи говорили «разберитесь с чувствами», но я и так знал, что чувствую. Здесь подошли иначе: проверили печень, добавили вечерние добавки для сна, Денис подобрал лёгкое снотворное на 2 недели — чтобы вырваться из цикла. Плюс телесные практики, я не знал, что настолько зажат. Через полгода сплю нормально, алкоголь убрал полностью.',
  },
  {
    initial: 'Е',
    name: 'Елена, 52 года',
    city: 'Кемерово',
    topic: 'Депрессия и апатия',
    text: 'Дочь убедила сходить. Думала, что депрессия — это про «не хочу жить», а у меня просто не было сил вставать с дивана. Никита сказал: «Это тоже депрессия». Мы работали парно — он и Кристина. Сначала было неловко, потом поняла, что вдвоём они видят то, что один не увидит. Добавили железо и витамин D, я начала гулять. Сейчас веду внучку в садик, раньше бы не смогла.',
  },
  {
    initial: 'М',
    name: 'Максим, 28 лет',
    city: 'Кемерово',
    topic: 'Зависимость от никотина',
    text: 'Сидел на никотине с 14 лет, пытался бросить раз 15. Здесь не сказали «просто брось». Посмотрели мой день, когда я курю, что перед этим ем, как сплю. Оказалось, я курю от скуки и от тревоги. Дали замены (жевательные резинки не работали, а вот добавки для тревожности — да), проработали ситуации, когда тянет. 4 месяца без сигарет, первый раз без мучений.',
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll('.review-card');
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      style={{ backgroundColor: 'var(--bg-cream)', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p className="section-label mb-4">Отзывы</p>
        <h2
          className="font-heading font-medium mb-10"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--text-primary)' }}
        >
          Истории людей, которые пришли к нам
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.initial} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
