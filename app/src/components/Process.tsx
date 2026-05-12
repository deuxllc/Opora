import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProcessStep from './ProcessStep';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: 'Вы приходите или пишете',
    desc: 'Звоните, пишете в мессенджер или заполняете форму. Говорите: «Мне плохо». Этого достаточно.',
  },
  {
    number: 2,
    title: 'Мы оцениваем ситуацию',
    desc: 'Смотрим: как вы спите, что едите, что пьёте, какие препараты принимаете, как держится тело. Всё влияет на всё.',
  },
  {
    number: 3,
    title: 'Составляем план',
    desc: 'Не шаблонный, а под вас. Может включать психологические встречи, добавки, телесные практики, медикаментозную поддержку — или всё сразу.',
  },
  {
    number: 4,
    title: 'Работаем вместе',
    desc: 'Парная работа двух психологов. Телесные практики. Аппаратная релаксация. Нутрициологическое сопровождение. Врач при необходимости.',
  },
  {
    number: 5,
    title: 'Поддерживаем',
    desc: 'Не бросаем после первого улучшения. Меняем план, если нужно. Смотрим, что работает именно для вас.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!stepsRef.current) return;
      const stepEls = stepsRef.current.querySelectorAll('.process-step');
      gsap.from(stepEls, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stepsRef.current,
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
      id="process"
      style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 700 }}>
        <p className="section-label mb-4">Процесс</p>
        <h2
          className="font-heading font-medium mb-3"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--text-primary)' }}
        >
          Как это происходит
        </h2>
        <p
          className="font-body leading-[1.7] mb-12"
          style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)' }}
        >
          От «мне плохо» до «я знаю, что делать»
        </p>

        <div ref={stepsRef} className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[23px] top-12 bottom-0 w-0.5 hidden md:block"
            style={{ backgroundColor: 'var(--border-light)' }}
          />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        <p
          className="font-body text-base italic text-center mt-12"
          style={{ color: 'var(--text-muted)' }}
        >
          г. Кемерово, ул. Рукавишникова, 9А
        </p>
      </div>
    </section>
  );
}
