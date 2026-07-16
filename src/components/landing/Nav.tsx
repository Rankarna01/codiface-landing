export function Announcement() {}

export function Navbar() {
  return (
    <header className="cf-nav">
      <div className="cf-container cf-nav-inner">
        <a className="cf-logo" href="#">
          <img src="/images/logo.png" alt="CODIFACE" className="cf-logo-img" />
          CODIFACE
        </a>
        <nav className="cf-nav-links">
          <a href="#features">Fitur</a>
          <a href="#how">Cara Kerja</a>
          <a href="#pricing">Paket</a>
          <a href="#benefits">Keunggulan</a>
          <a href="#testimonials">Testimoni</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="cf-nav-cta">
          <a className="cf-btn cf-btn-ghost" href="#">
            Masuk
          </a>
          <a className="cf-btn cf-btn-primary" href="#cta">
            Coba Gratis
          </a>
          <button className="cf-nav-toggle" aria-label="Menu">
            <i className="bx bx-menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
