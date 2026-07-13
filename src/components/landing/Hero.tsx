export function Hero() {
  return (
    <section className="cf-hero">
      <div className="cf-hero-bg" />
      <div className="cf-hero-grid" />
      <div className="cf-container cf-hero-inner">
        <span className="cf-eyebrow cf-reveal"><i className="fa-regular fa-sparkles" /> Pengenalan Wajah AI · Siap Enterprise</span>
        <h1 className="cf-h1 cf-reveal">
          Absensi cukup dengan <span className="cf-gradient-text">satu tatapan</span>.<br />
          Didukung AI. Dipercaya oleh perusahaan.
        </h1>
        <p className="cf-lead cf-reveal">
          CODIFACE menggantikan antrean sidik jari dan absensi manual dengan sistem pengenalan wajah
          berbasis cloud yang aman — akurat kurang dari satu detik, dari perangkat apa pun, di mana pun.
        </p>
        <div className="cf-hero-ctas cf-reveal">
          <a className="cf-btn cf-btn-primary cf-btn-lg" href="#cta">Pesan Demo Langsung <i className="fa-regular fa-arrow-right" /></a>
          <a className="cf-btn cf-btn-glass cf-btn-lg" href="#how"><i className="fa-regular fa-circle-play" /> Tonton Tur 2 Menit</a>
        </div>
        <div className="cf-hero-proof cf-reveal">
          <span className="cf-avatars"><span /><span /><span /><span /></span>
          <span>Dipercaya oleh 150+ perusahaan · Rating rata-rata 4,9/5</span>
        </div>

        <div className="cf-hero-mockup cf-reveal">
          <div className="cf-mockup-frame">
            <div className="cf-mockup-inner">
              <div className="cf-mockup-top"><i /><i /><i /></div>
              <div className="cf-mockup-body">
                <aside className="cf-mockup-side">
                  <div className="row active"><i className="fa-regular fa-chart-line" /> Dashboard</div>
                  <div className="row"><i className="fa-regular fa-users" /> Karyawan</div>
                  <div className="row"><i className="fa-regular fa-clock" /> Absensi</div>
                  <div className="row"><i className="fa-regular fa-location-dot" /> GPS</div>
                  <div className="row"><i className="fa-regular fa-calendar" /> Cuti</div>
                  <div className="row"><i className="fa-regular fa-gear" /> Pengaturan</div>
                </aside>
                <main className="cf-mockup-main">
                  <div className="cf-mockup-cards">
                    <div className="cf-mockup-card"><div className="k">Hadir hari ini</div><div className="v">1.284<span className="up">+4,2%</span></div></div>
                    <div className="cf-mockup-card"><div className="k">Cuti</div><div className="v">42<span className="up">-1,1%</span></div></div>
                    <div className="cf-mockup-card"><div className="k">Akurasi</div><div className="v">99,9%<span className="up">+0,1%</span></div></div>
                  </div>
                  <div className="cf-mockup-chart">
                    <svg viewBox="0 0 400 140" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.55" />
                          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,110 C40,80 80,90 120,70 S200,30 240,50 320,100 400,60 L400,140 L0,140 Z" fill="url(#g)" />
                      <path d="M0,110 C40,80 80,90 120,70 S200,30 240,50 320,100 400,60" stroke="#60A5FA" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div className="cf-floating f1">
            <div className="ic"><i className="fa-regular fa-face-smile" /></div>
            <div className="txt"><b>Wajah terverifikasi</b><span>0,42 dtk · Rina S.</span></div>
          </div>
          <div className="cf-floating f2">
            <div className="ic"><i className="fa-regular fa-shield-check" /></div>
            <div className="txt"><b>Anti titip absen</b><span>Deteksi liveness OK</span></div>
          </div>
        </div>

        <div className="cf-hero-stats cf-reveal">
          <div className="cf-hero-stat"><b>&lt; 1 dtk</b><span>Kecepatan pengenalan</span></div>
          <div className="cf-hero-stat"><b>99,9%</b><span>Akurasi</span></div>
          <div className="cf-hero-stat"><b>150+</b><span>Perusahaan</span></div>
          <div className="cf-hero-stat"><b>24/7</b><span>Dukungan</span></div>
        </div>
      </div>
    </section>
  );
}
