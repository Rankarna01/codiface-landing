const HERO_CHECKS = [
  "Absensi lebih cepat dalam 1 detik",
  "Anti titip absen dengan AI Face Recognition",
  "Data kehadiran real-time dan akurat",
  "Akses mudah dari mobile & desktop",
];

const RATINGS = [
  { icon: "G", score: "4.8", label: "G2", color: "#FF492C" },
  { icon: "C", score: "4.7", label: "Capterra", color: "#0052CC" },
  { icon: "G", score: "4.7", label: "GetApp", color: "#1B365F" },
];

export function Hero() {
  return (
    <section className="cf-hero">
      <div className="cf-hero-bg" />
      <div className="cf-container cf-hero-v2">
        <div className="cf-hero-left">
          <h1 className="cf-h1 cf-reveal">
            Sistem Absensi Wajah <span className="cf-gradient-text">Modern</span> untuk Bisnis Anda
          </h1>
          <p className="cf-lead cf-reveal">
            CODIFACE adalah sistem absensi berbasis AI Face Recognition yang membantu perusahaan
            mengelola kehadiran karyawan secara akurat, real-time, dan tanpa fingerprint.
          </p>
          <ul className="cf-hero-checks cf-reveal">
            {HERO_CHECKS.map((text) => (
              <li key={text}>
                <span className="cf-check-icon">
                  <i className="bx bx-check" />
                </span>
                {text}
              </li>
            ))}
          </ul>
          <div className="cf-hero-ctas cf-reveal">
            <a className="cf-btn cf-btn-primary cf-btn-sm" href="#cta">
              <i className="bx bx-rocket" /> Coba Gratis Sekarang
            </a>
            <a className="cf-btn cf-btn-outline cf-btn-sm" href="#how">
              <i className="bx bx-play" /> Lihat Demo
            </a>
          </div>
          <div className="cf-hero-ratings cf-reveal">
            {RATINGS.map((r) => (
              <div key={r.label} className="cf-rating-badge">
                <span className="cf-rating-icon" style={{ background: r.color }}>
                  {r.icon}
                </span>
                <div className="cf-rating-info">
                  <span className="cf-rating-score">
                    <i className="bx bxs-star" /> {r.score}
                  </span>
                  <span className="cf-rating-label">{r.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cf-hero-right cf-reveal">
          <div className="cf-hero-image-wrap">
            <div className="cf-hero-platform" />
            <img
              src="/images/hero.png"
              alt="CODIFACE Dashboard & Mobile App"
              className="cf-hero-img"
            />
            <div className="cf-hero-badge-check">
              <i className="bx bx-check" />
              <div>
                <b>Check In</b>
                <span>09:00 WIB</span>
              </div>
            </div>
            <div className="cf-hero-badge-shield">
              <i className="bx bx-shield-quarter" />
              <div>
                <b>Aman &amp; Akurat</b>
                <span>Teknologi AI untuk hasil absensi yang terpercaya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
