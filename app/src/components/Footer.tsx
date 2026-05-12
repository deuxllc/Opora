export default function Footer() {
  return (
    <footer
      id="contacts"
      style={{ backgroundColor: 'var(--text-primary)', padding: 'clamp(40px, 5vw, 48px) clamp(20px, 6vw, 80px)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Logo & description */}
          <div>
            <p className="font-heading text-2xl font-semibold text-white">Опора</p>
            <p className="font-body text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Психологическая помощь в Кемерово
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <p className="font-body text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Написать
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://t.me/opora42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/79130000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Адрес
              </p>
              <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                г. Кемерово,<br />
                ул. Рукавишникова, 9А
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-8 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="font-body text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2025 Опора. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
