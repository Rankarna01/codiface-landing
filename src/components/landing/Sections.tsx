import { useEffect, useRef, useState } from "react";

/* ---------- Trusted ---------- */
const LOGOS = ["Northwind", "Acme Corp", "Globex", "Initech", "Umbra", "Hooli", "Stark", "Wayne", "Vandelay", "Pied Piper"];
export function Trusted() {
  const track = [...LOGOS, ...LOGOS];
  return (
    <section className="cf-trusted">
      <div className="cf-container">
        <p>Dipercaya oleh tim modern di 15+ industri</p>
        <div className="cf-marquee">
          <div className="cf-marquee-track">
            {track.map((l, i) => (
              <span key={i} className="logo"><i className="fa-regular fa-bolt" /> {l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
const PROBLEMS = [
  { i: "fa-fingerprint", t: "Antrean sidik jari", d: "Karyawan menghabiskan 10+ menit mengantre di mesin absen setiap pagi." },
  { i: "fa-user-secret", t: "Titip absen", d: "Absensi manual dan sidik jari mudah dicurangi — merugikan jutaan setiap bulannya." },
  { i: "fa-pen-clip", t: "Absensi manual", d: "Buku absen, spreadsheet, dan salin-tempel masih menjadi kenyataan di banyak tim HR." },
  { i: "fa-file-chart-column", t: "Rekap yang menyulitkan", d: "Rekap akhir bulan memakan waktu berhari-hari dan sering tidak cocok dengan payroll." },
  { i: "fa-clock", t: "Tak terpantau keterlambatan", d: "Anda baru tahu siapa yang sering telat berminggu-minggu kemudian." },
  { i: "fa-triangle-exclamation", t: "Rentan human error", d: "Satu salah ketik di timesheet berbuntut pada salah gaji, konflik, dan hilangnya kepercayaan." },
];
export function Problem() {
  return (
    <section className="cf-problem">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Masalah</span>
          <h2 className="cf-h2">Absensi cara lama diam-diam <span className="cf-gradient-text">merugikan bisnis</span> Anda.</h2>
          <p className="cf-lead">Mesin sidik jari lama dan absen manual membuang jam kerja HR tiap minggu — dan jutaan rupiah tiap bulan karena kebocoran payroll.</p>
        </div>
        <div className="cf-problem-grid">
          {PROBLEMS.map((p) => (
            <div key={p.t} className="cf-card cf-reveal">
              <div className="ic"><i className={`fa-regular ${p.i}`} /></div>
              <h3>{p.t}</h3><p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Solution ---------- */
const SOLUTIONS = [
  { i: "fa-face-viewfinder", t: "Pengenalan Wajah AI", d: "Pengenalan kurang dari satu detik dengan deteksi liveness — tanpa mesin, tanpa antre, tanpa kecurangan." },
  { i: "fa-cloud", t: "Absensi Cloud", d: "Setiap absensi tersinkron ke dashboard cloud secara realtime, dari lokasi mana pun." },
  { i: "fa-location-dot", t: "Validasi GPS", d: "Geo-fence cabang dan lokasi kerja agar absensi hanya sah dari lokasi yang disetujui." },
  { i: "fa-chart-line", t: "Dashboard Realtime", d: "Pantau siapa hadir, telat, dan cuti secara langsung — lengkap dengan analitik dan ekspor." },
];
export function Solution() {
  return (
    <section className="cf-solution">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Solusi</span>
          <h2 className="cf-h2">Satu platform AI. Semua masalah absensi, <span className="cf-gradient-text">terselesaikan</span>.</h2>
          <p className="cf-lead">CODIFACE menggabungkan pengenalan wajah, GPS, dan analitik realtime dalam satu sistem berkelas enterprise.</p>
        </div>
        <div className="cf-solution-grid">
          {SOLUTIONS.map((s) => (
            <div key={s.t} className="cf-card cf-reveal">
              <div className="ic"><i className={`fa-regular ${s.i}`} /></div>
              <h3>{s.t}</h3><p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
const FEATURES: [string, string, string][] = [
  ["fa-face-viewfinder", "Pengenalan Wajah", "Berbasis AI, kurang dari 1 detik, dengan liveness."],
  ["fa-users", "Manajemen Karyawan", "Profil, struktur organisasi, dokumen, kontrak."],
  ["fa-clock", "Absensi", "Check-in / check-out realtime dengan audit trail."],
  ["fa-location-dot", "Absensi GPS", "Cabang ber-geofence dan check-in dari mobile."],
  ["fa-plane-departure", "Cuti", "Tahunan, sakit, tanpa gaji — dengan sisa saldo."],
  ["fa-file-signature", "Izin", "Pengajuan, approval, dan log alasan lengkap."],
  ["fa-repeat", "Shift", "Shift tetap, rotasi, dan split dengan aturan."],
  ["fa-calendar", "Hari Libur", "Libur regional dan perusahaan, otomatis diterapkan."],
  ["fa-hourglass-half", "Lembur", "Perhitungan berbasis aturan dan approval."],
  ["fa-chart-line", "Dashboard Realtime", "KPI hidup di setiap cabang dan tim."],
  ["fa-chart-pie", "Analitik", "Kohort, tren, dan deteksi anomali."],
  ["fa-bell", "Notifikasi", "Push, email, dan WhatsApp."],
  ["fa-check-double", "Approval", "Alur bertingkat untuk HR & manajer."],
  ["fa-file-pdf", "Ekspor PDF", "Laporan ber-branding, sekali klik."],
  ["fa-file-excel", "Ekspor Excel", "Rekap siap payroll, selalu akurat."],
  ["fa-code", "REST API", "Modern, versioned, dan lengkap dokumentasinya."],
  ["fa-money-bill", "Siap Payroll", "Sinkron langsung dengan payroll pilihan Anda."],
  ["fa-user-shield", "Role & Permission", "RBAC granular hingga level field."],
  ["fa-clipboard-list", "Audit Log", "Setiap aksi tercatat dan tak bisa diubah."],
  ["fa-mobile-screen", "Ramah Mobile", "Aplikasi karyawan iOS + Android."],
];
export function Features() {
  return (
    <section id="features" className="cf-features">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Fitur Utama</span>
          <h2 className="cf-h2">Semua yang HR butuhkan. <span className="cf-gradient-text">Tanpa yang tidak perlu</span>.</h2>
          <p className="cf-lead">Satu sistem mencakup pengenalan wajah, absensi, cuti, shift, integrasi payroll, dan tata kelola enterprise.</p>
        </div>
        <div className="cf-features-grid">
          {FEATURES.map(([i, t, d]) => (
            <div key={t} className="cf-feat cf-reveal">
              <div className="ic"><i className={`fa-regular ${i}`} /></div>
              <b>{t}</b><span>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
const STEPS: [string, string][] = [
  ["Daftarkan Karyawan", "Onboarding tim melalui CSV, sinkron HRIS, atau konsol admin — hitungan menit, bukan hari."],
  ["Registrasi Wajah", "Karyawan mendaftar dari ponsel dalam waktu 30 detik. Data disimpan sebagai embedding terenkripsi, bukan foto mentah."],
  ["Verifikasi Wajah", "AI mencocokkan wajah dengan deteksi liveness kurang dari 1 detik — tanpa sidik jari, tanpa PIN, tanpa kecurangan."],
  ["Absensi Tercatat", "Waktu, lokasi, dan perangkat tercatat dengan audit trail yang tidak dapat dimanipulasi."],
  ["Dashboard Terupdate", "HR melihat data realtime, pengecualian, dan ekspor siap payroll — seketika."],
];
export function HowItWorks() {
  return (
    <section id="how">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Cara Kerja</span>
          <h2 className="cf-h2">Dari registrasi hingga payroll dalam <span className="cf-gradient-text">lima langkah</span>.</h2>
          <p className="cf-lead">Alur kerja yang dirancang bersama HR dan tim IT — bukan melawannya.</p>
        </div>
        <div className="cf-timeline">
          {STEPS.map(([t, d], i) => (
            <div key={t} className="cf-step cf-reveal">
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div className="body"><b>{t}</b><p>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Showcase ---------- */
export function Showcase() {
  const [tab, setTab] = useState<"light" | "dark" | "mobile">("dark");
  return (
    <section className="cf-showcase">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Tur Produk</span>
          <h2 className="cf-h2">Dashboard yang <span className="cf-gradient-text">nyaman dipakai</span> tim Anda.</h2>
          <p className="cf-lead">Pratinjau konsol admin dan aplikasi karyawan di desktop, tablet, dan mobile.</p>
        </div>
        <div className="cf-showcase-tabs cf-reveal">
          <button className={`cf-tab ${tab === "dark" ? "active" : ""}`} onClick={() => setTab("dark")}>Dashboard Gelap</button>
          <button className={`cf-tab ${tab === "light" ? "active" : ""}`} onClick={() => setTab("light")}>Dashboard Terang</button>
          <button className={`cf-tab ${tab === "mobile" ? "active" : ""}`} onClick={() => setTab("mobile")}>Aplikasi Karyawan</button>
        </div>
        <div className="cf-showcase-frame cf-reveal">
          <div className={`cf-showcase-inner ${tab === "light" ? "light" : ""}`}>
            {tab === "dark" && (
              <div className="cf-mockup-body" style={{ position: "absolute", inset: 0 }}>
                <aside className="cf-mockup-side">
                  <div className="row active"><i className="fa-regular fa-chart-line" /> Ringkasan</div>
                  <div className="row"><i className="fa-regular fa-users" /> Karyawan</div>
                  <div className="row"><i className="fa-regular fa-clock" /> Timesheet</div>
                  <div className="row"><i className="fa-regular fa-calendar" /> Cuti</div>
                  <div className="row"><i className="fa-regular fa-gear" /> Pengaturan</div>
                </aside>
                <main className="cf-mockup-main">
                  <div className="cf-mockup-cards">
                    <div className="cf-mockup-card"><div className="k">Tingkat kehadiran</div><div className="v">98,4%</div></div>
                    <div className="cf-mockup-card"><div className="k">Keterlambatan</div><div className="v">12</div></div>
                    <div className="cf-mockup-card"><div className="k">Jam lembur</div><div className="v">318</div></div>
                  </div>
                  <div className="cf-mockup-chart">
                    <svg viewBox="0 0 400 140" preserveAspectRatio="none">
                      <path d="M0,120 C60,90 120,60 180,80 S300,110 400,50 L400,140 L0,140Z" fill="rgba(96,165,250,0.35)" />
                      <path d="M0,120 C60,90 120,60 180,80 S300,110 400,50" stroke="#60A5FA" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </main>
              </div>
            )}
            {tab === "light" && <div className="placeholder"><i className="fa-regular fa-sun" style={{ marginRight: 8 }} /> Pratinjau tema terang</div>}
            {tab === "mobile" && <div className="placeholder"><i className="fa-regular fa-mobile-screen" style={{ marginRight: 8 }} /> Pratinjau aplikasi karyawan</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */
const BENEFITS: [string, string, string][] = [
  ["fa-bolt", "Absensi 1 detik", "Pengenalan kurang dari 1 detik — antrean pagi hilang."],
  ["fa-ban", "Tanpa mesin sidik jari", "Hemat biaya hardware, perawatan, dan lebih higienis."],
  ["fa-shield-check", "Anti titip absen", "Liveness + face match menutup celah kecurangan payroll."],
  ["fa-satellite-dish", "Pantau realtime", "Manajer bisa lihat siapa yang hadir, live, di semua cabang."],
  ["fa-cloud", "Berbasis cloud", "Tanpa server, tanpa VPN — cukup login dan pakai."],
  ["fa-file-lines", "Laporan akurat", "Ekspor siap payroll tanpa bersih-bersih manual."],
  ["fa-brain", "Ditenagai AI", "Model yang terus berkembang, dilatih data dunia nyata."],
  ["fa-face-smile", "Mudah digunakan", "UX ramah HR. Onboarding perusahaan cukup satu sore."],
  ["fa-lock", "Aman sejak awal", "Embedding terenkripsi, praktik SOC 2, siap regulasi EU."],
];
export function Benefits() {
  return (
    <section>
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Nilai Bisnis</span>
          <h2 className="cf-h2">Manfaat nyata, sejak <span className="cf-gradient-text">hari pertama</span>.</h2>
          <p className="cf-lead">Pelanggan CODIFACE melihat kebocoran payroll turun di bulan pertama — dan HR menghemat berhari-hari kerja setiap minggu.</p>
        </div>
        <div className="cf-benefits-grid">
          {BENEFITS.map(([i, t, d]) => (
            <div key={t} className="cf-benefit cf-reveal">
              <div className="ic"><i className={`fa-regular ${i}`} /></div>
              <div><b>{t}</b><p>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
const INDUSTRIES: [string, string][] = [
  ["fa-hospital", "Rumah Sakit"], ["fa-graduation-cap", "Sekolah"], ["fa-building-columns", "Universitas"],
  ["fa-industry", "Pabrik"], ["fa-store", "Retail"], ["fa-hotel", "Hotel"],
  ["fa-utensils", "Restoran"], ["fa-building", "Kantor"], ["fa-landmark", "Pemerintahan"], ["fa-helmet-safety", "Konstruksi"],
];
export function Industries() {
  return (
    <section id="industries" className="cf-industries">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Industri</span>
          <h2 className="cf-h2">Dirancang untuk tim <span className="cf-gradient-text">segala skala</span>.</h2>
          <p className="cf-lead">Dari klinik 20 orang hingga pabrik 10.000 karyawan — CODIFACE tumbuh bersama tenaga kerja Anda.</p>
        </div>
        <div className="cf-industries-grid">
          {INDUSTRIES.map(([i, t]) => (
            <div key={t} className="cf-ind cf-reveal">
              <div className="ic"><i className={`fa-regular ${i}`} /></div>
              <b>{t}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
type Cycle = "monthly" | "yearly" | "lifetime";
const CYCLE_LABEL: Record<Cycle, string> = { monthly: "Bulanan", yearly: "Tahunan", lifetime: "Seumur Hidup" };
const PLANS = [
  {
    name: "Starter", desc: "Untuk tim kecil yang baru memulai absensi modern.",
    price: { monthly: 299, yearly: 249, lifetime: 8990 },
    features: ["Hingga 25 karyawan", "Pengenalan wajah AI", "Dashboard cloud", "Aplikasi mobile", "Dukungan email"],
    popular: false,
  },
  {
    name: "Business", desc: "Platform lengkap untuk perusahaan berkembang.",
    price: { monthly: 899, yearly: 749, lifetime: 24990 },
    features: ["Hingga 250 karyawan", "GPS + geofencing", "Shift, cuti, lembur", "Ekspor payroll", "Dukungan prioritas", "Akses REST API"],
    popular: true,
  },
  {
    name: "Enterprise", desc: "Skala, keamanan, dan integrasi kustom.",
    price: { monthly: 2499, yearly: 2099, lifetime: 69990 },
    features: ["Karyawan tanpa batas", "SSO + RBAC kustom", "CSM khusus", "Onboarding & training", "SLA 99,99%", "Integrasi kustom"],
    popular: false,
  },
];
const fmt = (n: number) => n.toLocaleString("id-ID");
export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("yearly");
  return (
    <section id="pricing">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Harga</span>
          <h2 className="cf-h2">Harga sederhana. <span className="cf-gradient-text">Kekuatan enterprise</span>.</h2>
          <p className="cf-lead">Coba gratis 14 hari. Tanpa kartu kredit. Bisa berhenti kapan saja.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }} className="cf-reveal">
          <div className="cf-pricing-toggle">
            {(["monthly", "yearly", "lifetime"] as Cycle[]).map((c) => (
              <button key={c} className={cycle === c ? "active" : ""} onClick={() => setCycle(c)}>
                {CYCLE_LABEL[c]}{c === "yearly" && " · hemat 20%"}
              </button>
            ))}
          </div>
        </div>
        <div className="cf-price-grid">
          {PLANS.map((p) => (
            <div key={p.name} className={`cf-plan ${p.popular ? "popular" : ""} cf-reveal`}>
              {p.popular && <div className="cf-ribbon">Paling Populer</div>}
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="price">
                Rp{fmt(p.price[cycle] * 1000)}
                <small>{cycle === "lifetime" ? " / sekali bayar" : cycle === "yearly" ? " / bln · tagih tahunan" : " / bln"}</small>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><i className="fa-regular fa-circle-check" /> {f}</li>
                ))}
              </ul>
              <a className={`cf-btn ${p.popular ? "cf-btn-glass" : "cf-btn-primary"}`} href="#cta">
                {p.popular ? "Mulai Uji Coba Gratis" : "Pilih Paket"} <i className="fa-regular fa-arrow-right" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Comparison ---------- */
const COMPARE_ROWS: [string, string | boolean, string | boolean, string | boolean][] = [
  ["Karyawan", "25", "250", "Tanpa batas"],
  ["Pengenalan Wajah AI", true, true, true],
  ["GPS & Geofencing", false, true, true],
  ["Shift, Cuti, Lembur", "Dasar", "Lanjutan", "Lanjutan + kustom"],
  ["REST API", false, true, true],
  ["Integrasi Payroll", false, true, true],
  ["SSO / SCIM", false, false, true],
  ["CSM Khusus", false, false, true],
  ["SLA", "—", "99,9%", "99,99%"],
];
export function Comparison() {
  return (
    <section>
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Perbandingan Paket</span>
          <h2 className="cf-h2">Semua fitur, <span className="cf-gradient-text">berdampingan</span>.</h2>
        </div>
        <div className="cf-compare-wrap cf-reveal">
          <table className="cf-compare">
            <thead>
              <tr><th>Fitur</th><th>Starter</th><th className="hl">Business</th><th>Enterprise</th></tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r[0] as string}>
                  {r.map((cell, i) => (
                    <td key={i} className={i === 2 ? "hl" : ""}>
                      {typeof cell === "boolean"
                        ? cell ? <i className="fa-regular fa-circle-check yes" /> : <i className="fa-regular fa-minus no" />
                        : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const TESTI = [
  { q: "CODIFACE memangkas rekonsiliasi payroll bulanan kami dari 3 hari jadi 20 menit. Benar-benar bekerja.", n: "Amelia Chandra", r: "HR Director, Northwind" },
  { q: "Kami singkirkan mesin sidik jari dalam seminggu. Akurasi pengenalan wajahnya luar biasa — bahkan saat pakai masker.", n: "David Pratama", r: "COO, Globex" },
  { q: "Pabrik 4.200 orang kami sekarang absen tanpa antre. ROI-nya nyata dan terukur.", n: "Priya Nair", r: "Head of Ops, Initech" },
  { q: "Pengalaman onboarding terbaik dari semua tool HR yang pernah saya pakai. Terasa premium.", n: "Marcus Weber", r: "People Lead, Hooli" },
  { q: "Dashboard realtime akhirnya memberi visibilitas ke manajer. Keterlambatan turun 40%.", n: "Sofia Alvarez", r: "COO, Stark Industries" },
];
export function Testimonials() {
  const cards = [...TESTI, ...TESTI];
  return (
    <section className="cf-testi">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Disukai Banyak Tim</span>
          <h2 className="cf-h2">Platform HR yang <span className="cf-gradient-text">direkomendasikan</span> tim.</h2>
        </div>
      </div>
      <div className="cf-testi-mask">
        <div className="cf-testi-track">
          {cards.map((t, i) => (
            <div className="cf-testi-card" key={i}>
              <div className="stars"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></div>
              <p>"{t.q}"</p>
              <div className="who">
                <div className="avatar">{t.n.split(" ").map((x) => x[0]).join("")}</div>
                <div><b>{t.n}</b><span>{t.r}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Statistics ---------- */
function useCount(target: number, active: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return v;
}
export function Statistics() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setOn(true)), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const a = useCount(5000, on), b = useCount(150, on), c = useCount(999, on), d = useCount(24, on), e = useCount(15, on);
  return (
    <section className="cf-stats" ref={ref}>
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">Dalam Angka</span>
          <h2 className="cf-h2">Skala enterprise. Kecepatan startup.</h2>
          <p className="cf-lead">Platform yang terbukti di lima benua dan puluhan industri.</p>
        </div>
        <div className="cf-stats-grid">
          <div className="cf-stat"><b>{a.toLocaleString("id-ID")}+</b><span>Absensi harian</span></div>
          <div className="cf-stat"><b>{b}+</b><span>Perusahaan</span></div>
          <div className="cf-stat"><b>{(c / 10).toFixed(1).replace(".", ",")}%</b><span>Akurasi pengenalan</span></div>
          <div className="cf-stat"><b>{d}/7</b><span>Dukungan</span></div>
          <div className="cf-stat"><b>{e}+</b><span>Industri</span></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS: [string, string][] = [
  ["Seberapa akurat pengenalan wajah CODIFACE?", "Model AI kami mencapai akurasi 99,9% di lingkungan produksi, dengan deteksi liveness aktif yang mencegah pemalsuan lewat foto atau video."],
  ["Apakah kami perlu perangkat khusus?", "Tidak. Smartphone, tablet, atau laptop modern dengan kamera sudah cukup. Anda juga bisa memasang kiosk khusus bila diperlukan."],
  ["Apakah data karyawan aman?", "Ya. Kami menyimpan embedding wajah terenkripsi — bukan foto mentah — dan mengikuti praktik selaras SOC 2 dengan kontrol akses berbasis peran."],
  ["Apakah bisa jalan tanpa internet?", "Aplikasi mobile menyimpan absensi secara offline dan otomatis sinkron saat koneksi kembali tersedia."],
  ["Apakah terintegrasi dengan payroll kami?", "CODIFACE mengekspor data siap payroll (CSV/Excel), menyediakan REST API, serta integrasi langsung dengan payroll populer."],
  ["Berapa lama onboarding?", "Mayoritas tim sudah live dalam 48 jam, termasuk registrasi karyawan dan pelatihan manajer."],
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [q, setQ] = useState("");
  const filtered = FAQS.filter(([t, d]) => (t + d).toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="faq">
      <div className="cf-container">
        <div className="cf-section-head cf-reveal">
          <span className="cf-eyebrow">FAQ</span>
          <h2 className="cf-h2">Semua yang perlu Anda <span className="cf-gradient-text">ketahui</span>.</h2>
        </div>
        <div className="cf-faq-wrap cf-reveal">
          <div className="cf-faq-search">
            <i className="fa-regular fa-magnifying-glass" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari pertanyaan..." />
          </div>
          {filtered.map(([t, d], i) => (
            <div key={t} className={`cf-faq-item ${open === i ? "open" : ""}`}>
              <button className="cf-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{t}</span><i className="fa-regular fa-plus" />
              </button>
              <div className="cf-faq-a"><div className="cf-faq-a-inner">{d}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section id="cta" className="cf-final">
      <div className="cf-container">
        <div className="cf-final-card cf-reveal">
          <div className="cf-final-inner">
            <span className="cf-eyebrow" style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.2)", color: "#93C5FD" }}>
              <i className="fa-regular fa-sparkles" /> Siap kapan pun Anda siap
            </span>
            <h2 className="cf-h2">Absensi modern hanya berjarak <span className="cf-gradient-text" style={{ backgroundImage: "linear-gradient(120deg,#fff,#60A5FA)" }}>satu tatapan</span>.</h2>
            <p className="cf-lead">Pesan demo langsung, mulai uji coba gratis, atau ngobrol dengan tim sales. Tim Anda bisa live dalam 48 jam.</p>
            <div className="cf-final-ctas">
              <a className="cf-btn cf-btn-primary cf-btn-lg" href="#">Pesan Demo <i className="fa-regular fa-arrow-right" /></a>
              <a className="cf-btn cf-btn-glass cf-btn-lg" href="#">Uji Coba Gratis</a>
              <a className="cf-btn cf-btn-ghost cf-btn-lg" href="#" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>Hubungi Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="cf-footer">
      <div className="cf-container">
        <div className="cf-footer-grid">
          <div className="cf-footer-brand">
            <a className="cf-logo" href="#" style={{ color: "#fff" }}>
              <span className="cf-logo-mark"><i className="fa-regular fa-face-viewfinder" /></span>
              CODIFACE
            </a>
            <p>Sistem absensi pengenalan wajah AI untuk perusahaan modern dan enterprise. Dirancang dengan keamanan, kecepatan, dan kesederhanaan.</p>
            <form className="cf-newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email kantor" />
              <button type="submit">Langganan</button>
            </form>
          </div>
          <div className="cf-foot-col">
            <h4>Produk</h4>
            <ul>
              <li><a href="#features">Fitur</a></li>
              <li><a href="#pricing">Harga</a></li>
              <li><a href="#how">Cara Kerja</a></li>
              <li><a href="#industries">Industri</a></li>
            </ul>
          </div>
          <div className="cf-foot-col">
            <h4>Perusahaan</h4>
            <ul>
              <li><a href="#">Tentang</a></li>
              <li><a href="#">Karier</a></li>
              <li><a href="#">Pelanggan</a></li>
              <li><a href="#">Kontak</a></li>
            </ul>
          </div>
          <div className="cf-foot-col">
            <h4>Sumber Daya</h4>
            <ul>
              <li><a href="#">Dokumentasi</a></li>
              <li><a href="#">Referensi API</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Dukungan</a></li>
            </ul>
          </div>
          <div className="cf-foot-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privasi</a></li>
              <li><a href="#">Ketentuan</a></li>
              <li><a href="#">Keamanan</a></li>
              <li><a href="#">DPA</a></li>
            </ul>
          </div>
        </div>
        <div className="cf-footer-bottom">
          <span>© {new Date().getFullYear()} CODIFACE. Hak cipta dilindungi.</span>
          <div className="cf-socials">
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
            <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Reveal on scroll ---------- */
export function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".cf-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function FloatingCTA() {
  return <a className="cf-fab" href="#cta"><i className="fa-regular fa-calendar-check" /> Pesan Demo</a>;
}
