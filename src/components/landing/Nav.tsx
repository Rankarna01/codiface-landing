export function Announcement() {
}

export function Navbar() {
  return (
    <header className="cf-nav">
      <div className="cf-container cf-nav-inner">
        <a className="cf-logo" href="#">
          <span className="cf-logo-mark"><i className="fa-regular fa-face-viewfinder" /></span>
          CODIFACE
        </a>
        <nav className="cf-nav-links">
          <a href="#features">Fitur</a>
          <a href="#how">Cara Kerja</a>
          <a href="#pricing">Harga</a>
          <a href="#industries">Industri</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="cf-nav-cta">
          <a className="cf-btn cf-btn-ghost" href="#">Masuk</a>
          <a className="cf-btn cf-btn-primary" href="#cta">Pesan Demo <i className="fa-regular fa-arrow-right" /></a>
          <button className="cf-nav-toggle" aria-label="Menu"><i className="fa-regular fa-bars" /></button>
        </div>
      </div>
    </header>
  );
}
