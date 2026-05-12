import { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (target: string) => void;
}

const navItems = [
  { label: 'О проекте', target: '#about' },
  { label: 'Курс', target: '#course' },
  { label: 'Команда', target: '#team' },
  { label: 'Контакты', target: '#contacts' },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((target: string) => {
    onNavigate(target);
    setMobileOpen(false);
  }, [onNavigate]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--bg-nav)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="mx-auto flex items-center justify-between" style={{ maxWidth: 1200, height: 72, padding: '0 40px' }}>
          {/* Logo */}
          <button
            onClick={() => onNavigate('#hero')}
            className="font-heading text-2xl font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Опора
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="nav-link font-body text-[15px] font-medium"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick('#contacts')}
            className="hidden md:block font-body text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--btn-primary)',
              color: 'var(--btn-text)',
              padding: '10px 24px',
              borderRadius: 12,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--btn-primary-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--btn-primary)')}
          >
            Записаться
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={24} style={{ color: 'var(--text-primary)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-72 p-6 pt-20 flex flex-col gap-2"
            style={{ backgroundColor: 'var(--bg-warm)' }}
          >
            <button
              className="absolute top-5 right-5 p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Закрыть меню"
            >
              <X size={24} style={{ color: 'var(--text-primary)' }} />
            </button>
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="font-body text-lg font-medium text-left py-3 px-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-primary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-cream)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contacts')}
              className="mt-4 font-body text-base font-medium w-full transition-all duration-300"
              style={{
                backgroundColor: 'var(--btn-primary)',
                color: 'var(--btn-text)',
                padding: '12px 24px',
                borderRadius: 12,
              }}
            >
              Записаться
            </button>
          </div>
        </div>
      )}
    </>
  );
}
