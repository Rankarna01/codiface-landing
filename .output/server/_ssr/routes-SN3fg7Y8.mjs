import { n as __toESM } from "../_runtime.mjs";
import { s as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import "./router-BpHPKv9Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SN3fg7Y8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Announcement() {}
function Navbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "cf-nav",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container cf-nav-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "cf-logo",
					href: "#",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.png",
						alt: "CODIFACE",
						className: "cf-logo-img"
					}), "CODIFACE"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "cf-nav-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							children: "Fitur"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							children: "Cara Kerja"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#pricing",
							children: "Paket"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#benefits",
							children: "Keunggulan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#testimonials",
							children: "Testimoni"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							children: "FAQ"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-nav-cta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "cf-btn cf-btn-ghost",
							href: "#",
							children: "Masuk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "cf-btn cf-btn-primary",
							href: "#cta",
							children: "Coba Gratis"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "cf-nav-toggle",
							"aria-label": "Menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-menu" })
						})
					]
				})
			]
		})
	});
}
var HERO_CHECKS = [
	"Absensi lebih cepat dalam 1 detik",
	"Anti titip absen dengan AI Face Recognition",
	"Data kehadiran real-time dan akurat",
	"Akses mudah dari mobile & desktop"
];
var RATINGS = [
	{
		icon: "G",
		score: "4.8",
		label: "G2",
		color: "#FF492C"
	},
	{
		icon: "C",
		score: "4.7",
		label: "Capterra",
		color: "#0052CC"
	},
	{
		icon: "G",
		score: "4.7",
		label: "GetApp",
		color: "#1B365F"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "cf-hero",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cf-hero-bg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container cf-hero-v2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-hero-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "cf-h1 cf-reveal",
						children: [
							"Sistem Absensi Wajah ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-gradient-text",
								children: "Modern"
							}),
							" untuk Bisnis Anda"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead cf-reveal",
						children: "CODIFACE adalah sistem absensi berbasis AI Face Recognition yang membantu perusahaan mengelola kehadiran karyawan secara akurat, real-time, dan tanpa fingerprint."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "cf-hero-checks cf-reveal",
						children: HERO_CHECKS.map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cf-check-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-check" })
						}), text] }, text))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-hero-ctas cf-reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "cf-btn cf-btn-primary cf-btn-sm",
							href: "#cta",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-rocket" }), " Coba Gratis Sekarang"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "cf-btn cf-btn-outline cf-btn-sm",
							href: "#how",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-play" }), " Lihat Demo"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cf-hero-ratings cf-reveal",
						children: RATINGS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cf-rating-badge",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-rating-icon",
								style: { background: r.color },
								children: r.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cf-rating-info",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "cf-rating-score",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxs-star" }),
										" ",
										r.score
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "cf-rating-label",
									children: r.label
								})]
							})]
						}, r.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-hero-right cf-reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-hero-image-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cf-hero-platform" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero.png",
							alt: "CODIFACE Dashboard & Mobile App",
							className: "cf-hero-img"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cf-hero-badge-check",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-check" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Check In" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "09:00 WIB" })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cf-hero-badge-shield",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-shield-quarter" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Aman & Akurat" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Teknologi AI untuk hasil absensi yang terpercaya" })] })]
						})
					]
				})
			})]
		})]
	});
}
var PARTNERS = [
	{
		name: "Ventria Park",
		logo: "/partner/1.jpg"
	},
	{
		name: "CodifyHub",
		logo: "/partner/2.webp"
	},
	{
		name: "Zad Restaurant",
		logo: "/partner/1.jpg"
	}
];
function Trusted() {
	const track = [
		...PARTNERS,
		...PARTNERS,
		...PARTNERS
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "cf-trusted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dipercaya oleh perusahaan dari berbagai industri" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-marquee",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cf-marquee-track",
					children: track.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "cf-partner-logo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.logo,
							alt: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name })]
					}, i))
				})
			})]
		})
	});
}
var PROBLEMS = [
	{
		i: "bx-scan",
		t: "Antrean sidik jari",
		d: "Karyawan menghabiskan 10+ menit mengantre di mesin absen setiap pagi."
	},
	{
		i: "bx-user",
		t: "Titip absen",
		d: "Absensi manual dan sidik jari mudah dicurangi — merugikan jutaan setiap bulannya."
	},
	{
		i: "bx-edit-alt",
		t: "Absensi manual",
		d: "Buku absen, spreadsheet, dan salin-tempel masih menjadi kenyataan di banyak tim HR."
	},
	{
		i: "bx-bar-chart-alt-2",
		t: "Rekap yang menyulitkan",
		d: "Rekap akhir bulan memakan waktu berhari-hari dan sering tidak cocok dengan payroll."
	},
	{
		i: "bx-time-five",
		t: "Tak terpantau keterlambatan",
		d: "Anda baru tahu siapa yang sering telat berminggu-minggu kemudian."
	},
	{
		i: "bx-error",
		t: "Rentan human error",
		d: "Satu salah ketik di timesheet berbuntut pada salah gaji, konflik, dan hilangnya kepercayaan."
	}
];
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "cf-problem",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-eyebrow",
						children: "Masalah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "cf-h2",
						children: [
							"Absensi cara lama diam-diam ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-gradient-text",
								children: "merugikan bisnis"
							}),
							" ",
							"Anda."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead",
						children: "Mesin sidik jari lama dan absen manual membuang jam kerja HR tiap minggu — dan jutaan rupiah tiap bulan karena kebocoran payroll."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-problem-grid",
				children: PROBLEMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-card cf-reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ic",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `bx ${p.i}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.t }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.d })
					]
				}, p.t))
			})]
		})
	});
}
var SOLUTIONS = [
	{
		i: "bx-scan",
		t: "Pengenalan Wajah AI",
		d: "Pengenalan kurang dari satu detik dengan deteksi liveness — tanpa mesin, tanpa antre, tanpa kecurangan."
	},
	{
		i: "bx-cloud",
		t: "Absensi Cloud",
		d: "Setiap absensi tersinkron ke dashboard cloud secara realtime, dari lokasi mana pun."
	},
	{
		i: "bx-map-pin",
		t: "Validasi GPS",
		d: "Geo-fence cabang dan lokasi kerja agar absensi hanya sah dari lokasi yang disetujui."
	},
	{
		i: "bx-line-chart",
		t: "Dashboard Realtime",
		d: "Pantau siapa hadir, telat, dan cuti secara langsung — lengkap dengan analitik dan ekspor."
	}
];
function Solution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "cf-solution",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-eyebrow",
						children: "Solusi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "cf-h2",
						children: [
							"Satu platform AI. Semua masalah absensi,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-gradient-text",
								children: "terselesaikan"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead",
						children: "CODIFACE menggabungkan pengenalan wajah, GPS, dan analitik realtime dalam satu sistem berkelas enterprise."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-solution-grid",
				children: SOLUTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-card cf-reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ic",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `bx ${s.i}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: s.t }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.d })
					]
				}, s.t))
			})]
		})
	});
}
var FEATURES = [
	[
		"bx-scan",
		"Pengenalan Wajah",
		"Berbasis AI, kurang dari 1 detik, dengan liveness."
	],
	[
		"bx-group",
		"Manajemen Karyawan",
		"Profil, struktur organisasi, dokumen, kontrak."
	],
	[
		"bx-time-five",
		"Absensi",
		"Check-in / check-out realtime dengan audit trail."
	],
	[
		"bx-map-pin",
		"Absensi GPS",
		"Cabang ber-geofence dan check-in dari mobile."
	],
	[
		"bx-paper-plane",
		"Cuti",
		"Tahunan, sakit, tanpa gaji — dengan sisa saldo."
	],
	[
		"bx-check-square",
		"Izin",
		"Pengajuan, approval, dan log alasan lengkap."
	],
	[
		"bx-repeat",
		"Shift",
		"Shift tetap, rotasi, dan split dengan aturan."
	],
	[
		"bx-calendar-event",
		"Hari Libur",
		"Libur regional dan perusahaan, otomatis diterapkan."
	],
	[
		"bx-hourglass",
		"Lembur",
		"Perhitungan berbasis aturan dan approval."
	],
	[
		"bx-line-chart",
		"Dashboard Realtime",
		"KPI hidup di setiap cabang dan tim."
	],
	[
		"bx-pie-chart-alt-2",
		"Analitik",
		"Kohort, tren, dan deteksi anomali."
	],
	[
		"bx-bell",
		"Notifikasi",
		"Push, email, dan WhatsApp."
	],
	[
		"bx-check-double",
		"Approval",
		"Alur bertingkat untuk HR & manajer."
	],
	[
		"bx-file",
		"Ekspor PDF",
		"Laporan ber-branding, sekali klik."
	],
	[
		"bx-spreadsheet",
		"Ekspor Excel",
		"Rekap siap payroll, selalu akurat."
	],
	[
		"bx-code-alt",
		"REST API",
		"Modern, versioned, dan lengkap dokumentasinya."
	],
	[
		"bx-money",
		"Siap Payroll",
		"Sinkron langsung dengan payroll pilihan Anda."
	],
	[
		"bx-shield-quarter",
		"Role & Permission",
		"RBAC granular hingga level field."
	],
	[
		"bx-list-check",
		"Audit Log",
		"Setiap aksi tercatat dan tak bisa diubah."
	],
	[
		"bx-mobile-alt",
		"Ramah Mobile",
		"Aplikasi karyawan iOS + Android."
	]
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "cf-features",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-eyebrow",
						children: "Fitur Utama"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "cf-h2",
						children: [
							"Semua yang HR butuhkan. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-gradient-text",
								children: "Tanpa yang tidak perlu"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead",
						children: "Satu sistem mencakup pengenalan wajah, absensi, cuti, shift, integrasi payroll, dan tata kelola enterprise."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-features-grid",
				children: FEATURES.map(([i, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-feat cf-reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ic",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `bx ${i}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })
					]
				}, t))
			})]
		})
	});
}
var STEPS = [
	["Daftarkan Karyawan", "Onboarding tim melalui CSV, sinkron HRIS, atau konsol admin — hitungan menit, bukan hari."],
	["Registrasi Wajah", "Karyawan mendaftar dari ponsel dalam waktu 30 detik. Data disimpan sebagai embedding terenkripsi, bukan foto mentah."],
	["Verifikasi Wajah", "AI mencocokkan wajah dengan deteksi liveness kurang dari 1 detik — tanpa sidik jari, tanpa PIN, tanpa kecurangan."],
	["Absensi Tercatat", "Waktu, lokasi, dan perangkat tercatat dengan audit trail yang tidak dapat dimanipulasi."],
	["Dashboard Terupdate", "HR melihat data realtime, pengecualian, dan ekspor siap payroll — seketika."]
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-eyebrow",
						children: "Cara Kerja"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "cf-h2",
						children: [
							"Dari registrasi hingga payroll dalam",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-gradient-text",
								children: "lima langkah"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead",
						children: "Alur kerja yang dirancang bersama HR dan tim IT — bukan melawannya."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-timeline",
				children: STEPS.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-step cf-reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "n",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "body",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d })]
					})]
				}, t))
			})]
		})
	});
}
function Showcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "cf-showcase",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-eyebrow",
						children: "Tur Produk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "cf-h2",
						children: [
							"Dashboard yang ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-gradient-text",
								children: "nyaman dipakai"
							}),
							" tim Anda."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead",
						children: "Pratinjau konsol admin dan aplikasi karyawan di desktop, tablet, dan mobile."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-showcase-display cf-reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cf-showcase-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cf-showcase-frame",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/1.png",
						alt: "CODIFACE Dashboard Preview",
						className: "cf-showcase-img"
					})
				})]
			})]
		})
	});
}
var BENEFITS = [
	[
		"bx-bolt",
		"Absensi 1 detik",
		"Pengenalan kurang dari 1 detik — antrean pagi hilang."
	],
	[
		"bx-no-entry",
		"Tanpa mesin sidik jari",
		"Hemat biaya hardware, perawatan, dan lebih higienis."
	],
	[
		"bx-check-shield",
		"Anti titip absen",
		"Liveness + face match menutup celah kecurangan payroll."
	],
	[
		"bx-signal-5",
		"Pantau realtime",
		"Manajer bisa lihat siapa yang hadir, live, di semua cabang."
	],
	[
		"bx-cloud",
		"Berbasis cloud",
		"Tanpa server, tanpa VPN — cukup login dan pakai."
	],
	[
		"bx-file",
		"Laporan akurat",
		"Ekspor siap payroll tanpa bersih-bersih manual."
	],
	[
		"bx-brain",
		"Ditenagai AI",
		"Model yang terus berkembang, dilatih data dunia nyata."
	],
	[
		"bx-smile",
		"Mudah digunakan",
		"UX ramah HR. Onboarding perusahaan cukup satu sore."
	],
	[
		"bx-lock-alt",
		"Aman sejak awal",
		"Embedding terenkripsi, praktik SOC 2, siap regulasi EU."
	]
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cf-container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-section-head cf-reveal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "cf-eyebrow",
					children: "Nilai Bisnis"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "cf-h2",
					children: [
						"Manfaat nyata, sejak ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cf-gradient-text",
							children: "hari pertama"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "cf-lead",
					children: "Pelanggan CODIFACE melihat kebocoran payroll turun di bulan pertama — dan HR menghemat berhari-hari kerja setiap minggu."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cf-benefits-grid",
			children: BENEFITS.map(([i, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-benefit cf-reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ic",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `bx ${i}` })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d })] })]
			}, t))
		})]
	}) });
}
var INDUSTRIES = [
	["bx-clinic", "Rumah Sakit"],
	["bx-cap", "Sekolah"],
	["bx-building-house", "Universitas"],
	["bx-buildings", "Pabrik"],
	["bx-store", "Retail"],
	["bx-building", "Hotel"],
	["bx-food-menu", "Restoran"],
	["bx-building", "Kantor"],
	["bx-landmark", "Pemerintahan"],
	["bx-hard-hat", "Konstruksi"]
];
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "industries",
		className: "cf-industries",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-eyebrow",
						children: "Industri"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "cf-h2",
						children: [
							"Dirancang untuk tim ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cf-gradient-text",
								children: "segala skala"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead",
						children: "Dari klinik 20 orang hingga pabrik 10.000 karyawan — CODIFACE tumbuh bersama tenaga kerja Anda."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-industries-grid",
				children: INDUSTRIES.map(([i, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-ind cf-reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ic",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `bx ${i}` })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t })]
				}, t))
			})]
		})
	});
}
var CYCLE_LABEL = {
	monthly: "Bulanan",
	yearly: "Tahunan",
	lifetime: "Seumur Hidup"
};
var PLANS = [
	{
		name: "Starter",
		desc: "Untuk tim kecil yang baru memulai absensi modern.",
		price: {
			monthly: 299,
			yearly: 249,
			lifetime: 8990
		},
		features: [
			"Hingga 25 karyawan",
			"Pengenalan wajah",
			"Dashboard cloud",
			"Aplikasi mobile",
			"Dukungan email"
		],
		popular: false
	},
	{
		name: "Business",
		desc: "Platform lengkap untuk perusahaan berkembang.",
		price: {
			monthly: 899,
			yearly: 749,
			lifetime: 24990
		},
		features: [
			"Hingga 250 karyawan",
			"GPS + geofencing",
			"Shift, cuti, lembur",
			"Ekspor payroll",
			"Dukungan prioritas",
			"Akses REST API"
		],
		popular: true
	},
	{
		name: "Enterprise",
		desc: "Skala, keamanan, dan integrasi kustom.",
		price: {
			monthly: 2499,
			yearly: 2099,
			lifetime: 69990
		},
		features: [
			"Karyawan tanpa batas",
			"SSO + RBAC kustom",
			"CSM khusus",
			"Onboarding & training",
			"SLA 99,99%",
			"Integrasi kustom"
		],
		popular: false
	}
];
var fmt = (n) => n.toLocaleString("id-ID");
function Pricing() {
	const [cycle, setCycle] = (0, import_react.useState)("yearly");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-section-head cf-reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cf-eyebrow",
							children: "Harga"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "cf-h2",
							children: [
								"Harga sederhana. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "cf-gradient-text",
									children: "Kekuatan enterprise"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "cf-lead",
							children: "Coba gratis 14 hari. Tanpa kartu kredit. Bisa berhenti kapan saja."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "flex",
						justifyContent: "center"
					},
					className: "cf-reveal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cf-pricing-toggle",
						children: [
							"monthly",
							"yearly",
							"lifetime"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: cycle === c ? "active" : "",
							onClick: () => setCycle(c),
							children: [CYCLE_LABEL[c], c === "yearly" && " · hemat 20%"]
						}, c))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cf-price-grid",
					children: PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `cf-plan ${p.popular ? "popular" : ""} cf-reveal`,
						children: [
							p.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cf-ribbon",
								children: "Paling Populer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "plan-desc",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "price",
								children: [
									"Rp",
									fmt(p.price[cycle] * 1e3),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: cycle === "lifetime" ? " / sekali bayar" : cycle === "yearly" ? " / bln · tagih tahunan" : " / bln" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-check-circle" }),
								" ",
								f
							] }, f)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: `cf-btn ${p.popular ? "cf-btn-glass" : "cf-btn-primary"}`,
								href: "#cta",
								children: [
									p.popular ? "Mulai Uji Coba Gratis" : "Pilih Paket",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-right-arrow-alt" })
								]
							})
						]
					}, p.name))
				})
			]
		})
	});
}
var COMPARE_ROWS = [
	[
		"Karyawan",
		"25",
		"250",
		"Tanpa batas"
	],
	[
		"Pengenalan Wajah AI",
		true,
		true,
		true
	],
	[
		"GPS & Geofencing",
		false,
		true,
		true
	],
	[
		"Shift, Cuti, Lembur",
		"Dasar",
		"Lanjutan",
		"Lanjutan + kustom"
	],
	[
		"REST API",
		false,
		true,
		true
	],
	[
		"Integrasi Payroll",
		false,
		true,
		true
	],
	[
		"SSO / SCIM",
		false,
		false,
		true
	],
	[
		"CSM Khusus",
		false,
		false,
		true
	],
	[
		"SLA",
		"—",
		"99,9%",
		"99,99%"
	]
];
function Comparison() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cf-container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-section-head cf-reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "cf-eyebrow",
				children: "Perbandingan Paket"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "cf-h2",
				children: [
					"Semua fitur, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-gradient-text",
						children: "berdampingan"
					}),
					"."
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cf-compare-wrap cf-reveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "cf-compare",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Fitur" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Starter" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "hl",
						children: "Business"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Enterprise" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: COMPARE_ROWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: r.map((cell, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: i === 2 ? "hl" : "",
					children: typeof cell === "boolean" ? cell ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-check-circle yes" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-minus no" }) : cell
				}, i)) }, r[0])) })]
			})
		})]
	}) });
}
var TESTI = [
	{
		q: "CODIFACE memangkas rekonsiliasi payroll bulanan kami dari 3 hari jadi 20 menit. Benar-benar bekerja.",
		n: "Amelia Chandra",
		r: "HR Director, Northwind"
	},
	{
		q: "Kami singkirkan mesin sidik jari dalam seminggu. Akurasi pengenalan wajahnya luar biasa — bahkan saat pakai masker.",
		n: "David Pratama",
		r: "COO, Globex"
	},
	{
		q: "Pabrik 4.200 orang kami sekarang absen tanpa antre. ROI-nya nyata dan terukur.",
		n: "Priya Nair",
		r: "Head of Ops, Initech"
	},
	{
		q: "Pengalaman onboarding terbaik dari semua tool HR yang pernah saya pakai. Terasa premium.",
		n: "Marcus Weber",
		r: "People Lead, Hooli"
	},
	{
		q: "Dashboard realtime akhirnya memberi visibilitas ke manajer. Keterlambatan turun 40%.",
		n: "Sofia Alvarez",
		r: "COO, Stark Industries"
	}
];
function Testimonials() {
	const cards = [...TESTI, ...TESTI];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "cf-testi",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cf-container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "cf-eyebrow",
					children: "Disukai Banyak Tim"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "cf-h2",
					children: [
						"Platform HR yang ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cf-gradient-text",
							children: "direkomendasikan"
						}),
						" tim."
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cf-testi-mask",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-testi-track",
				children: cards.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-testi-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stars",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxs-star" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxs-star" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxs-star" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxs-star" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxs-star" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"\"",
							t.q,
							"\""
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "who",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "avatar",
								children: t.n.split(" ").map((x) => x[0]).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.r })] })]
						})
					]
				}, i))
			})
		})]
	});
}
function useCount(target, active) {
	const [v, setV] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const start = performance_default.now();
		const dur = 1500;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, active]);
	return v;
}
function Statistics() {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setOn(true)), { threshold: .3 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, []);
	const a = useCount(5e3, on), b = useCount(150, on), c = useCount(999, on), d = useCount(24, on), e = useCount(15, on);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "cf-stats",
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cf-eyebrow",
						children: "Dalam Angka"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "cf-h2",
						children: "Skala enterprise. Kecepatan startup."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cf-lead",
						children: "Platform yang terbukti di lima benua dan puluhan industri."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-stats-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [a.toLocaleString("id-ID"), "+"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Absensi harian" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [b, "+"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Perusahaan" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [(c / 10).toFixed(1).replace(".", ","), "%"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Akurasi pengenalan" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [d, "/7"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dukungan" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [e, "+"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Industri" })]
					})
				]
			})]
		})
	});
}
var FAQS = [
	["Seberapa akurat pengenalan wajah CODIFACE?", "Model AI kami mencapai akurasi 99,9% di lingkungan produksi, dengan deteksi liveness aktif yang mencegah pemalsuan lewat foto atau video."],
	["Apakah kami perlu perangkat khusus?", "Tidak. Smartphone, tablet, atau laptop modern dengan kamera sudah cukup. Anda juga bisa memasang kiosk khusus bila diperlukan."],
	["Apakah data karyawan aman?", "Ya. Kami menyimpan embedding wajah terenkripsi — bukan foto mentah — dan mengikuti praktik selaras SOC 2 dengan kontrol akses berbasis peran."],
	["Apakah bisa jalan tanpa internet?", "Aplikasi mobile menyimpan absensi secara offline dan otomatis sinkron saat koneksi kembali tersedia."],
	["Apakah terintegrasi dengan payroll kami?", "CODIFACE mengekspor data siap payroll (CSV/Excel), menyediakan REST API, serta integrasi langsung dengan payroll populer."],
	["Berapa lama onboarding?", "Mayoritas tim sudah live dalam 48 jam, termasuk registrasi karyawan dan pelatihan manajer."]
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = FAQS.filter(([t, d]) => (t + d).toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-section-head cf-reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "cf-eyebrow",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "cf-h2",
					children: [
						"Semua yang perlu Anda ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cf-gradient-text",
							children: "ketahui"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-faq-wrap cf-reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-faq-search",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-search" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Cari pertanyaan..."
					})]
				}), filtered.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `cf-faq-item ${open === i ? "open" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "cf-faq-q",
						onClick: () => setOpen(open === i ? null : i),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-plus" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cf-faq-a",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cf-faq-a-inner",
							children: d
						})
					})]
				}, t))]
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta",
		className: "cf-final",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cf-container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-final-card cf-reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-final-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "cf-eyebrow",
							style: {
								background: "rgba(255,255,255,0.12)",
								borderColor: "rgba(255,255,255,0.2)",
								color: "#93C5FD"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-star" }), " Siap kapan pun Anda siap"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "cf-h2",
							children: [
								"Absensi modern hanya berjarak",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "cf-gradient-text",
									style: { backgroundImage: "linear-gradient(120deg,#fff,#60A5FA)" },
									children: "satu tatapan"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "cf-lead",
							children: "Pesan demo langsung, mulai uji coba gratis, atau ngobrol dengan tim sales. Tim Anda bisa live dalam 48 jam."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cf-final-ctas",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "cf-btn cf-btn-primary cf-btn-lg",
									href: "#",
									children: ["Pesan Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-right-arrow-alt" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "cf-btn cf-btn-glass cf-btn-lg",
									href: "#",
									children: "Uji Coba Gratis"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "cf-btn cf-btn-ghost cf-btn-lg",
									href: "#",
									style: {
										background: "rgba(255,255,255,0.08)",
										color: "#fff",
										borderColor: "rgba(255,255,255,0.2)"
									},
									children: "Hubungi Sales"
								})
							]
						})
					]
				})
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "cf-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-footer-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-footer-brand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "cf-logo",
								href: "#",
								style: { color: "#fff" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/logo.png",
									alt: "CODIFACE",
									className: "cf-logo-img"
								}), "CODIFACE"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sistem absensi pengenalan wajah AI untuk perusahaan modern dan enterprise. Dirancang dengan keamanan, kecepatan, dan kesederhanaan." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "cf-newsletter",
								onSubmit: (e) => e.preventDefault(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									placeholder: "Email kantor"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									children: "Langganan"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-foot-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Produk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								children: "Fitur"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pricing",
								children: "Harga"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how",
								children: "Cara Kerja"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#industries",
								children: "Industri"
							}) })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-foot-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Perusahaan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Tentang"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Karier"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Pelanggan"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Kontak"
							}) })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-foot-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Sumber Daya" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Dokumentasi"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Referensi API"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Changelog"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Dukungan"
							}) })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cf-foot-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Legal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Privasi"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Ketentuan"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Keamanan"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "DPA"
							}) })
						] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" CODIFACE. Hak cipta dilindungi."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-socials",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Twitter",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxl-twitter" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "LinkedIn",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxl-linkedin" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxl-github" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "YouTube",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bxl-youtube" })
						})
					]
				})]
			})]
		})
	});
}
function useRevealOnScroll() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".cf-reveal");
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")), { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function FloatingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "cf-fab",
		href: "#cta",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bx bx-calendar-check" }), " Pesan Demo"]
	});
}
function Index() {
	useRevealOnScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cf-app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Announcement, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trusted, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Solution, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Statistics, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCTA, {})
		]
	});
}
//#endregion
export { Index as component };
