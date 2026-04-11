import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faHistory,
  faFileMedical,
  faPills,
  faCamera,
  faUser,
  faShareAlt,
  faRobot,
  faBrain,
  faFlask,
  faVial,
  faMicroscope,
  faSearch,
  faTimes,
  faCheck,
  faCalendar,
  faBell,
  faFileInvoiceDollar,
  faChartLine,
  faUserInjured,
  faCog,
  faMoneyBillWave,
  faQrcode,
  faChartBar,
  faUsers,
  faDownload,
  faIdCard,
  faHospitalUser,
  faShieldAlt,
  faDatabase,
  faVideo,
  faPhoneSlash,
  faShareNodes,
  faFilePrescription,
  faUserDoctor,
  faMicrophone,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faArrowDown,
  faUserMd,
  faLocationDot,
  faCircle,
  faLink,
  faRedo,
  faClock,
  faArrowUp,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './FeatureCarousel.css';

interface Module {
  name: string;
  icon: string;
  title: string;
}

const modules: Module[] = [
  { name: "Consultation", icon: "stethoscope", title: "Smart <span>Consultation</span> & AI Prescriptions" },
  { name: "WA Booking", icon: "whatsapp", title: "WhatsApp <span>Booking</span> Bot" },
  { name: "Billing", icon: "file-invoice-dollar", title: "Billing, Invoices & <span>Payments</span>" },
  { name: "Analytics", icon: "chart-bar", title: "<span>Analytics</span> Dashboard with AI Insights" },
  { name: "ABHA", icon: "id-card", title: "<span>ABHA</span> Health Account Integration" },
  { name: "Staff & HR", icon: "users", title: "Staff Attendance & <span>HR</span> Management" },
  { name: "Reminders", icon: "bell", title: "Smart <span>Reminders</span> & Follow-ups" },
  { name: "Teleconsult", icon: "video", title: "HD <span>Teleconsultation</span> Platform" },
];

const FeatureCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const CARD_WIDTH = 600;
  const GAP = 20;

  const goTo = (index: number) => {
    setCurrentIndex(index);
    if (trackRef.current) {
      const offset = index * (CARD_WIDTH + GAP);
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  };

  const next = () => {
    goTo((currentIndex + 1) % modules.length);
    resetAutoPlay();
  };

  const prev = () => {
    goTo((currentIndex - 1 + modules.length) % modules.length);
    resetAutoPlay();
  };

  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modules.length);
    }, 4000);
  };

  const resetAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    startAutoPlay();
  };

  useEffect(() => {
    if (trackRef.current) {
      const offset = currentIndex * (CARD_WIDTH + GAP);
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        next();
      } else if (e.key === 'ArrowLeft') {
        prev();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'stethoscope': faStethoscope,
      'history': faHistory,
      'file-medical': faFileMedical,
      'pills': faPills,
      'camera': faCamera,
      'user': faUser,
      'share-alt': faShareAlt,
      'robot': faRobot,
      'brain': faBrain,
      'flask': faFlask,
      'vial': faVial,
      'microscope': faMicroscope,
      'search': faSearch,
      'times': faTimes,
      'check': faCheck,
    //   'whatsapp': faWhatsapp,
      'calendar': faCalendar,
      'bell': faBell,
      'file-invoice-dollar': faFileInvoiceDollar,
      'chart-line': faChartLine,
      'user-injured': faUserInjured,
      'cog': faCog,
      'money-bill-wave': faMoneyBillWave,
      'qrcode': faQrcode,
      'chart-bar': faChartBar,
      'users': faUsers,
      'download': faDownload,
      'id-card': faIdCard,
      'hospital-user': faHospitalUser,
      'shield-alt': faShieldAlt,
      'database': faDatabase,
      'video': faVideo,
      'phone-slash': faPhoneSlash,
      'share-nodes': faShareNodes,
      'file-prescription': faFilePrescription,
      'user-doctor': faUserDoctor,
      'microphone': faMicrophone,
      'plus': faPlus,
      'arrow-left': faArrowLeft,
      'arrow-right': faArrowRight,
      'user-md': faUserMd,
      'location-dot': faLocationDot,
      'circle': faCircle,
      'link': faLink,
      'redo': faRedo,
    };
    return iconMap[iconName] || faUser;
  };

  return (
    <div className="feature-carousel-section">
      <div className="slide-label">Feature Modules</div>
      <div
        className="slide-title"
        dangerouslySetInnerHTML={{ __html: modules[currentIndex].title }}
      />

      <div className="carousel-viewport">
        <div className="carousel-track" ref={trackRef}>
          {/* Module 1: Smart Consultation */}
          <div className={`module-card ${currentIndex === 0 ? 'active' : ''}`} id="card-0">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge blue">
                  <FontAwesomeIcon icon={faStethoscope} /> Module 1
                </div>
                <div className="sidebar-title">Smart Consultation</div>
                <div className="sidebar-desc">AI-powered prescription management with OCR import.</div>
              </div>
              <div className="sidebar-menu">
                <div className={`sidebar-item ${currentIndex === 0 ? 'active' : ''}`}>
                  <FontAwesomeIcon icon={faStethoscope} /> Consultation
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faHistory} /> History
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faFileMedical} /> Reports
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faPills} /> Medicines
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">OCR Scan</div>
                <div style={{ fontSize: '22px', margin: '4px 0' }}>
                  <FontAwesomeIcon icon={faCamera} style={{ color: 'var(--accent2)' }} />
                </div>
                <div className="ssb-sub">Import paper RX</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>
                    <div className="ch-name">Rahul Sharma</div>
                    <div className="ch-sub">34 M • +91 98765 XXXXX</div>
                  </div>
                </div>
                <div className="ch-right">
                  <button className="ch-btn primary">
                    <FontAwesomeIcon icon={faShareAlt} /> Send RX
                  </button>
                </div>
              </div>
              <div className="card-body">
                {/* AI Insight */}
                <div className="inner-card accent-left">
                  <div className="ic-title">
                    <FontAwesomeIcon icon={faRobot} /> AI Insight Summary
                    <span className="generated">Generated in 0.5s</span>
                  </div>
                  <div className="ic-body">
                    Patient has a history of <strong>seasonal allergies</strong> (Dust/Pollen).
                    Last visit 3 months ago showed mild wheezing. Vitals stable.
                    <span className="danger">Allergic to Penicillin.</span>
                  </div>
                </div>
                {/* AI Diagnosis Suggestions */}
                <div className="inner-card accent-purple">
                  <div className="ic-title">
                    <FontAwesomeIcon icon={faBrain} /> AI Diagnosis Suggestions
                    <span className="generated">AI Copilot</span>
                  </div>
                  <div className="ai-suggestion-list">
                    <div className="ai-suggestion-item">
                      <div className="ai-suggestion-icon diagnosis">
                        <FontAwesomeIcon icon={faStethoscope} />
                      </div>
                      <div className="ai-suggestion-content">
                        <div className="ai-suggestion-title">Allergic Rhinitis</div>
                        <div className="ai-suggestion-desc">Based on symptoms: sneezing, nasal congestion, seasonal pattern</div>
                      </div>
                      <span className="ai-suggestion-badge">85% Match</span>
                    </div>
                    <div className="ai-suggestion-item">
                      <div className="ai-suggestion-icon diagnosis">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div className="ai-suggestion-content">
                        <div className="ai-suggestion-title">Mild Asthma</div>
                        <div className="ai-suggestion-desc">History of wheezing, consider spirometry if symptoms persist</div>
                      </div>
                      <span className="ai-suggestion-badge">72% Match</span>
                    </div>
                  </div>
                </div>
                {/* AI Lab Test Suggestions */}
                <div className="inner-card accent-green">
                  <div className="ic-title">
                    <FontAwesomeIcon icon={faFlask} /> AI Lab Test Suggestions
                    <span className="generated">AI Copilot</span>
                  </div>
                  <div className="ai-suggestion-list">
                    <div className="ai-suggestion-item">
                      <div className="ai-suggestion-icon lab">
                        <FontAwesomeIcon icon={faVial} />
                      </div>
                      <div className="ai-suggestion-content">
                        <div className="ai-suggestion-title">CBC with Differential</div>
                        <div className="ai-suggestion-desc">Check for eosinophilia in allergic conditions</div>
                      </div>
                      <span className="ai-suggestion-badge">Recommended</span>
                    </div>
                    <div className="ai-suggestion-item">
                      <div className="ai-suggestion-icon lab">
                        <FontAwesomeIcon icon={faMicroscope} />
                      </div>
                      <div className="ai-suggestion-content">
                        <div className="ai-suggestion-title">IgE Total & Specific</div>
                        <div className="ai-suggestion-desc">Allergen-specific IgE for dust mites, pollen</div>
                      </div>
                      <span className="ai-suggestion-badge">Optional</span>
                    </div>
                  </div>
                </div>
                {/* Diagnosis & RX */}
                <div className="inner-card" style={{ flex: 1 }}>
                  <div className="ic-title" style={{ marginBottom: '12px' }}>Diagnosis & Rx</div>
                  <div className="search-bar" style={{ marginBottom: '6px' }}>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" defaultValue="Montelu" />
                  </div>
                  <div className="search-dropdown" style={{ marginBottom: '12px' }}>
                    <div className="sd-item">Montelukast 10mg <span className="sd-tag">Tablet</span></div>
                    <div className="sd-item">Montelukast + Levocetirizine <span className="sd-tag">Syrup</span></div>
                  </div>
                  <div className="rx-list">
                    <div className="rx-row">
                      <div>
                        <div className="rx-name">1. Tab. Cetirizine 10mg</div>
                        <div className="rx-dose">1-0-1 (After Food) • 5 Days</div>
                      </div>
                      <FontAwesomeIcon icon={faTimes} className="rx-del" />
                    </div>
                    <div className="rx-row">
                      <div>
                        <div className="rx-name">2. Syp. Grillinctus BM</div>
                        <div className="rx-dose">10ml TDS • 5 Days</div>
                      </div>
                      <FontAwesomeIcon icon={faTimes} className="rx-del" />
                    </div>
                  </div>
                </div>
              </div>
              {/* OCR Float */}
              <div className="ocr-float">
                <div className="ocr-row">
                  <div className="ocr-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="ocr-title">Digital RX Ready</div>
                </div>
                <div className="ocr-bar">
                  <div className="ocr-fill"></div>
                </div>
                <div className="ocr-sub">Sending via WhatsApp...</div>
              </div>
            </div>
          </div>

          {/* Module 2: WhatsApp Booking - Placeholder for now */}
          <div className={`module-card ${currentIndex === 1 ? 'active' : ''}`} id="card-1">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge green">
               {/* {   <FontAwesomeIcon icon={faWhatsapp} /> Module 2 */} *
                </div>
                <div className="sidebar-title">WhatsApp Booking Bot</div>
                <div className="sidebar-desc">Automated appointment scheduling via WhatsApp Business.</div>
              </div>
              <div className="sidebar-menu">
                <div className={`sidebar-item ${currentIndex === 1 ? 'active' : ''}`}>
                  {/* <FontAwesomeIcon icon={faWhatsapp} /> Booking Bot */}
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faCalendar} /> Appointments
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faBell} /> Reminders
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faRobot} /> Auto-Reply
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">Bookings Today</div>
                <div className="ssb-value" style={{ color: 'var(--accent2)' }}>28</div>
                <div className="ssb-sub">via WhatsApp</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar" style={{ background: 'rgba(0,212,170,0.15)', borderColor: 'rgba(0,212,170,0.25)', color: 'var(--accent2)' }}>
                    {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                  </div>
                  <div>
                    <div className="ch-name">WhatsApp Bot</div>
                    <div className="ch-sub">Automated Patient Booking</div>
                  </div>
                </div>
                <span className="badge-live">
                  <div className="dot-pulse"></div> Active
                </span>
              </div>
              <div className="card-body" style={{ flexDirection: 'row', padding: '16px' }}>
                <div className="phone-wrap" style={{ padding: 0, marginRight: '16px' }}>
                  <div className="wa-phone">
                    <div className="wa-screen">
                      <div className="wa-header">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }} />
                        <div className="wa-av">
                          <FontAwesomeIcon icon={faUserMd} />
                        </div>
                        <div>
                          <div className="wa-clinic-name">Dr. Sharma's Clinic</div>
                          <div className="wa-verified">Verified Business</div>
                        </div>
                      </div>
                      <div className="wa-chat">
                        <div className="wa-date"><span>Today</span></div>
                        <div className="wa-msg wa-out">
                          Hi, can I book an eye check up for tomorrow?
                          <span className="wa-time">10:04</span>
                        </div>
                        <div className="wa-msg wa-in">
                          Hello! 👋 Dr. Sharma has slots tomorrow:<br />1. 11:00 AM<br />2. 04:30 PM<br />Reply with 1 or 2.
                          <span className="wa-time">10:04</span>
                        </div>
                        <div className="wa-msg wa-out">1 <span className="wa-time">10:05</span></div>
                        <div className="wa-msg wa-in">
                          ✅ <strong>Confirmed!</strong> 11:00 AM, Feb 06. Please arrive 10 mins early.
                          <span className="wa-time">10:05</span>
                        </div>
                        <div className="wa-date"><span>Tomorrow</span></div>
                        <div className="wa-msg wa-in">
                          🔔 Reminder: Your appointment is in 1 hour.
                          <span className="wa-time">10:00</span>
                        </div>
                      </div>
                      <div className="wa-input">
                        <FontAwesomeIcon icon={faPlus} />
                        <div className="wa-input-fake"></div>
                        <FontAwesomeIcon icon={faMicrophone} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                  <div className="inner-card">
                    <div className="ic-title">
                      <FontAwesomeIcon icon={faRobot} /> Bot Features
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#475569' }}>
                        <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--accent2)', width: '12px' }} />
                        Slot availability check
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#475569' }}>
                        <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--accent2)', width: '12px' }} />
                        Instant confirmation
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#475569' }}>
                        <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--accent2)', width: '12px' }} />
                        Auto-reschedule
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#475569' }}>
                        <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--accent2)', width: '12px' }} />
                        Multi-language support
                      </div>
                    </div>
                  </div>
                  <div className="stats-2col">
                    <div className="stat-card">
                      <div className="stat-label">Response Time</div>
                      <div className="stat-value" style={{ color: 'var(--accent2)' }}>&lt;2s</div>
                      <div className="stat-trend trend-up">Instant</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-label">No-Show Rate</div>
                      <div className="stat-value" style={{ color: 'var(--accent)' }}>4.2%</div>
                      <div className="stat-trend trend-down">
                        <FontAwesomeIcon icon={faArrowDown} /> -45%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3: Billing & Invoices */}
          <div className={`module-card ${currentIndex === 2 ? 'active' : ''}`} id="card-2">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge orange">
                  <FontAwesomeIcon icon={faFileInvoiceDollar} /> Module 3
                </div>
                <div className="sidebar-title">Billing & Invoices</div>
                <div className="sidebar-desc">GST billing, UPI QR & WhatsApp payment links.</div>
              </div>
              <div className="sidebar-menu">
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faCalendar} /> Appointments
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faUserInjured} /> Patients
                </div>
                <div className={`sidebar-item ${currentIndex === 2 ? 'active' : ''}`}>
                  <FontAwesomeIcon icon={faFileInvoiceDollar} /> Billing
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faChartLine} /> Reports
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">Today's Revenue</div>
                <div className="ssb-value" style={{ color: '#fb923c' }}>₹24.5k</div>
                <div className="ssb-sub">Total Collection</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar" style={{ background: 'rgba(249,115,22,0.15)', borderColor: 'rgba(249,115,22,0.25)', color: '#fb923c' }}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>
                    <div className="ch-name">Dr. Sharma</div>
                    <div className="ch-sub">Admin Access</div>
                  </div>
                </div>
                <div className="toast">
                  <FontAwesomeIcon icon={faCheckCircle} /> Payment Received
                </div>
                <button className="ch-btn secondary">
                  <FontAwesomeIcon icon={faCog} /> Settings
                </button>
              </div>
              <div className="card-body">
                <div className="inner-card" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>Invoice #INV-2026-092</div>
                      <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>25 Oct, 10:30 AM • Amit Verma</div>
                    </div>
                    <span style={{ background: 'rgba(245,158,11,0.12)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.2)', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '6px' }}>PENDING</span>
                  </div>
                  <div className="inv-list">
                    <div className="inv-row">General Consultation <span className="inv-amount">₹ 500.00</span></div>
                    <div className="inv-row">Medicines (Tabs/Syp) <span className="inv-amount">₹ 350.00</span></div>
                    <div className="inv-row">GST (18%) <span className="inv-amount">₹ 153.00</span></div>
                  </div>
                  <div className="inv-total-box" style={{ margin: '12px 0' }}>
                    <span className="inv-total-label">Total Payable</span>
                    <span className="inv-total-value">₹ 1,003.00</span>
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>Collect Payment Via</div>
                  <div className="pay-grid">
                    <div className="pay-btn green-p">
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                      <span>Cash</span>
                    </div>
                    <div className="pay-btn blue-p">
                      <div className="popular-tag">Popular</div>
                      <FontAwesomeIcon icon={faQrcode} />
                      <span>UPI QR</span>
                    </div>
                    <div className="pay-btn purple-p">
                      {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                      <span>Send Link</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wa-float">
                {/* <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '18px' }} /> */}
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700 }}>Invoice Sent</div>
                  <div style={{ fontSize: '9px', opacity: 0.8 }}>Review link included</div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 4: Analytics */}
          <div className={`module-card ${currentIndex === 3 ? 'active' : ''}`} id="card-3">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge purple">
                  <FontAwesomeIcon icon={faChartBar} /> Module 4
                </div>
                <div className="sidebar-title">Analytics Dashboard</div>
                <div className="sidebar-desc">AI-powered insights for admins & doctors.</div>
              </div>
              <div className="sidebar-menu">
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faChartLine} /> Revenue
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faUsers} /> Patients
                </div>
                <div className={`sidebar-item ${currentIndex === 3 ? 'active' : ''}`}>
                  <FontAwesomeIcon icon={faBrain} /> AI Insights
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faDownload} /> Export
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">Revenue</div>
                <div className="ssb-value" style={{ color: '#a78bfa' }}>+18%</div>
                <div className="ssb-sub">Next Month Forecast</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar" style={{ background: 'rgba(139,92,246,0.15)', borderColor: 'rgba(139,92,246,0.25)', color: '#a78bfa' }}>
                    <FontAwesomeIcon icon={faChartBar} />
                  </div>
                  <div>
                    <div className="ch-name">Analytics Dashboard</div>
                    <div className="ch-sub">Last 30 Days • Live</div>
                  </div>
                </div>
                <button className="ch-btn primary">
                  <FontAwesomeIcon icon={faDownload} /> Export
                </button>
              </div>
              <div className="card-body">
                <div className="ai-gradient-panel">
                  <div className="ai-header-row">
                    <div className="ai-title">
                      <FontAwesomeIcon icon={faBrain} /> AI Analytics Summary
                      <span className="ai-live-badge">Live Analysis</span>
                    </div>
                  </div>
                  <div className="ai-insights-row">
                    <div className="ai-insight">
                      <div className="ai-insight-label">Revenue Forecast</div>
                      <div className="ai-insight-value">+18%</div>
                      <div className="ai-insight-sub">Next month</div>
                    </div>
                    <div className="ai-insight">
                      <div className="ai-insight-label">Patient Growth</div>
                      <div className="ai-insight-value">+24%</div>
                      <div className="ai-insight-sub">New patients</div>
                    </div>
                    <div className="ai-insight">
                      <div className="ai-insight-label">Time Saved</div>
                      <div className="ai-insight-value">2.5h</div>
                      <div className="ai-insight-sub">Daily automation</div>
                    </div>
                    <div className="ai-insight">
                      <div className="ai-insight-label">No-Show Rate</div>
                      <div className="ai-insight-value">4.2%</div>
                      <div className="ai-insight-sub">Down 8% ↓</div>
                    </div>
                  </div>
                  <div className="ai-recs">
                    <div className="ai-rec">
                      <strong>💡 Revenue Optimization:</strong>Increase evening slots (6-8PM) to capture 15% more revenue.
                    </div>
                    <div className="ai-rec">
                      <strong>📊 Pattern Detected:</strong>2hr reminder reduces no-shows by 45%. Adjust timing.
                    </div>
                  </div>
                </div>
                <div className="analytics-split">
                  <div className="chart-placeholder">
                    <div className="cp-title">Revenue Trends</div>
                    <div className="bar-chart">
                      <div className="bar blue" style={{ height: '45%' }}></div>
                      <div className="bar green" style={{ height: '55%' }}></div>
                      <div className="bar blue" style={{ height: '40%' }}></div>
                      <div className="bar green" style={{ height: '75%' }}></div>
                      <div className="bar blue" style={{ height: '60%' }}></div>
                      <div className="bar green" style={{ height: '90%' }}></div>
                      <div className="bar blue" style={{ height: '70%' }}></div>
                    </div>
                  </div>
                  <div className="chart-placeholder">
                    <div className="cp-title">Patient Mix</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="donut-placeholder"></div>
                      <div style={{ fontSize: '10px', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'var(--accent)' }}></div> New (42%)
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'var(--accent2)' }}></div> Return (38%)
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'rgba(30,144,255,0.2)' }}></div> Other (20%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-ai">
                  <div className="ai-badge-small">
                    <FontAwesomeIcon icon={faRobot} /> AI Insight
                  </div>
                  <div className="ai-footer-text">
                    <strong>⏰ Peak Hours:</strong> Traffic shifting to 6-8 PM. One extra slot = 15% more revenue. <strong>⚠️ Alert:</strong> 15 pending invoices — send reminders.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 5: ABHA Integration */}
          <div className={`module-card ${currentIndex === 4 ? 'active' : ''}`} id="card-4">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge yellow">
                  <FontAwesomeIcon icon={faIdCard} /> Module 5
                </div>
                <div className="sidebar-title">ABHA Integration</div>
                <div className="sidebar-desc">Ayushman Bharat Health Account secure linking.</div>
              </div>
              <div className="sidebar-menu">
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faHospitalUser} /> Patient Records
                </div>
                <div className={`sidebar-item ${currentIndex === 4 ? 'active' : ''}`}>
                  <FontAwesomeIcon icon={faIdCard} /> ABHA Linking
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faShieldAlt} /> Compliance
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faDatabase} /> Health Data
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">Linked Accounts</div>
                <div className="ssb-value" style={{ color: '#fbbf24' }}>1,240</div>
                <div className="ssb-sub">ABHA Verified</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar" style={{ background: 'rgba(245,158,11,0.15)', borderColor: 'rgba(245,158,11,0.25)', color: '#fbbf24' }}>
                    <FontAwesomeIcon icon={faIdCard} />
                  </div>
                  <div>
                    <div className="ch-name">ABHA Health Account</div>
                    <div className="ch-sub">Ayushman Bharat • NHA</div>
                  </div>
                </div>
                <div className="badge-live" style={{ background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.25)', color: '#fbbf24' }}>
                  <div className="dot-pulse" style={{ background: '#fbbf24' }}></div> Live Sync
                </div>
              </div>
              <div className="card-body" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="abha-form-container">
                  <div className="abha-form-left">
                    <div className="inner-card" style={{ flexShrink: 0 }}>
                      <div className="ic-title" style={{ marginBottom: '20px' }}>
                        <FontAwesomeIcon icon={faLink} /> Link ABHA Account
                      </div>
                      <div className="form-group">
                        <label className="form-label">Mobile Number</label>
                        <input type="tel" className="form-input" placeholder="+91 98765 43210" defaultValue="+91 98765 43210" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Enter OTP</label>
                        <div className="otp-input-group">
                          <input type="text" className="otp-input" maxLength={1} defaultValue="1" />
                          <input type="text" className="otp-input" maxLength={1} defaultValue="2" />
                          <input type="text" className="otp-input" maxLength={1} defaultValue="3" />
                        </div>
                      </div>
                      <div className="form-actions">
                        <button className="form-btn form-btn-primary">
                          <FontAwesomeIcon icon={faCheck} /> Verify & Link
                        </button>
                      </div>
                    </div>
                    <div className="abha-status-card">
                      <div className="status-header">
                        <div className="status-title">
                          <FontAwesomeIcon icon={faShieldAlt} style={{ color: '#fbbf24' }} /> Account Status
                        </div>
                      </div>
                      <div className="status-info">
                        <div className="status-row">
                          <span className="status-label">ABHA Number</span>
                          <span className="status-value">—</span>
                        </div>
                        <div className="status-row">
                          <span className="status-label">Linked On</span>
                          <span className="status-value">—</span>
                        </div>
                        <div className="status-row">
                          <span className="status-label">Health Records</span>
                          <span className="status-value">—</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 6: Staff & HR */}
          <div className={`module-card ${currentIndex === 5 ? 'active' : ''}`} id="card-5">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge red">
                  <FontAwesomeIcon icon={faUsers} /> Module 6
                </div>
                <div className="sidebar-title">Staff & HR</div>
                <div className="sidebar-desc">Attendance tracking, check-in & staff management.</div>
              </div>
              <div className="sidebar-menu">
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faCalendar} /> Appointments
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faUserInjured} /> Patients
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faFileInvoiceDollar} /> Billing
                </div>
                <div className={`sidebar-item ${currentIndex === 5 ? 'active' : ''}`}>
                  <FontAwesomeIcon icon={faUsers} /> Staff & HR
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">Today's Attendance</div>
                <div className="ssb-value" style={{ color: '#f87171' }}>4/5</div>
                <div className="ssb-sub">Staff Present</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar" style={{ background: 'rgba(239,68,68,0.15)', borderColor: 'rgba(239,68,68,0.25)', color: '#f87171' }}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>
                    <div className="ch-name">Dr. Sharma</div>
                    <div className="ch-sub">Admin Access</div>
                  </div>
                </div>
                <div className="toast" style={{ background: 'var(--accent2)' }}>
                  <FontAwesomeIcon icon={faCheckCircle} /> Check-in Successful
                </div>
                <button className="ch-btn secondary">
                  <FontAwesomeIcon icon={faCog} /> Settings
                </button>
              </div>
              <div className="card-body">
                <div className="check-in-widget">
                  <div className="ci-status">Status: Checked In</div>
                  <div className="ci-time">09:02 <span style={{ fontSize: '14px', fontWeight: 400 }}>AM</span></div>
                  <div className="ci-loc">
                    <FontAwesomeIcon icon={faLocationDot} /> Location Verified
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Team Status (Today)</span><span>4/5 Present</span>
                  </div>
                  <div className="staff-list">
                    <div className="staff-row">
                      <div className="staff-dot" style={{ background: 'var(--accent2)' }}></div>
                      <div>
                        <div className="staff-name">Dr. Sharma</div>
                        <div className="staff-sub">Cardiology • 08:55 AM</div>
                      </div>
                    </div>
                    <div className="staff-row" style={{ borderLeft: '2px solid #fbbf24' }}>
                      <div className="staff-dot" style={{ background: '#fbbf24' }}></div>
                      <div>
                        <div className="staff-name">Nurse Priya</div>
                        <div className="staff-sub" style={{ color: '#fbbf24' }}>Late: Traffic • 09:45 AM</div>
                      </div>
                      <div className="staff-badge late-badge">LATE</div>
                    </div>
                    <div className="staff-row" style={{ opacity: 0.5 }}>
                      <div className="staff-dot" style={{ background: 'var(--accent3)' }}></div>
                      <div>
                        <div className="staff-name">Ramesh (Admin)</div>
                        <div className="staff-sub">Casual Leave</div>
                      </div>
                      <div className="staff-badge off-badge">OFF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 7: Reminders */}
          <div className={`module-card ${currentIndex === 6 ? 'active' : ''}`} id="card-6">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge green">
                  <FontAwesomeIcon icon={faBell} /> Module 7
                </div>
                <div className="sidebar-title">Smart Reminders</div>
                <div className="sidebar-desc">Multi-stage WhatsApp reminders with follow-up automation.</div>
              </div>
              <div className="sidebar-menu">
                <div className={`sidebar-item ${currentIndex === 6 ? 'active' : ''}`}>
                  <FontAwesomeIcon icon={faBell} /> Reminders
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faClock} /> Scheduling
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faChartBar} /> Engagement
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faRedo} /> Follow-ups
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">Sent Today</div>
                <div className="ssb-value" style={{ color: 'var(--accent2)' }}>142</div>
                <div className="ssb-sub">Reminders Delivered</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar" style={{ background: 'rgba(0,212,170,0.15)', borderColor: 'rgba(0,212,170,0.25)', color: 'var(--accent2)' }}>
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                  <div>
                    <div className="ch-name">Smart Reminder System</div>
                    <div className="ch-sub">Automated Multi-Stage Alerts</div>
                  </div>
                </div>
                <span className="badge-live">
                  <div className="dot-pulse"></div> Running
                </span>
              </div>
              <div className="card-body" style={{ flexDirection: 'row', padding: '16px' }}>
                <div className="phone-wrap" style={{ padding: 0, marginRight: '16px' }}>
                  <div className="wa-phone">
                    <div className="wa-screen">
                      <div className="wa-header">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }} />
                        <div className="wa-av">
                          <FontAwesomeIcon icon={faUserMd} />
                        </div>
                        <div>
                          <div className="wa-clinic-name">Dr. Sharma's Clinic</div>
                          <div className="wa-verified">Verified Business</div>
                        </div>
                      </div>
                      <div className="wa-chat">
                        <div className="wa-date"><span>Yesterday</span></div>
                        <div className="wa-msg wa-out">
                          👋 Reminder: appointment tomorrow at <strong>10:30 AM</strong> with Dr. Sharma.
                          <span className="wa-time">10:30</span>
                        </div>
                        <div className="wa-date"><span>Today</span></div>
                        <div className="wa-msg wa-out">
                          ⏰ <strong>1 Hour to go!</strong><br />See you soon. Bring previous reports.
                          <div className="wa-actions">
                            <div className="wa-act wa-confirm">I'm Coming ✓</div>
                            <div className="wa-act wa-cancel">Cancel</div>
                          </div>
                          <span className="wa-time">09:30</span>
                        </div>
                        <div className="wa-msg wa-out" style={{ background: 'rgba(0,212,170,0.08)', borderColor: 'rgba(0,212,170,0.2)' }}>
                          <div style={{ color: 'var(--accent2)', fontSize: '9px', fontWeight: 700, marginBottom: '4px' }}>📅 FOLLOW-UP REMINDER</div>
                          15 days since your treatment. Time for check-up.
                          <div className="wa-actions">
                            <div className="wa-act wa-confirm" style={{ width: '100%' }}>Book Follow-Up Slot</div>
                          </div>
                          <span className="wa-time">10:15</span>
                        </div>
                      </div>
                      <div className="wa-input">
                        <FontAwesomeIcon icon={faPlus} />
                        <div className="wa-input-fake"></div>
                        <FontAwesomeIcon icon={faMicrophone} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
                  <div className="inner-card">
                    <div className="ic-title">
                      <FontAwesomeIcon icon={faClock} /> Reminder Timeline
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(30,144,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>24h</div>
                        <span style={{ color: '#475569' }}>Day before notification</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,212,170,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent2)', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>6h</div>
                        <span style={{ color: '#475569' }}>6 hours confirm alert</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fb923c', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>1h</div>
                        <span style={{ color: '#475569' }}>1 hour action buttons</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>15d</div>
                        <span style={{ color: '#475569' }}>Follow-up re-booking</span>
                      </div>
                    </div>
                  </div>
                  <div className="stats-2col">
                    <div className="stat-card">
                      <div className="stat-label">Open Rate</div>
                      <div className="stat-value" style={{ color: 'var(--accent2)' }}>94%</div>
                      <div className="stat-trend trend-up">
                        <FontAwesomeIcon icon={faArrowUp} /> High
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-label">Confirmed</div>
                      <div className="stat-value" style={{ color: 'var(--accent)' }}>87%</div>
                      <div className="stat-trend trend-up">
                        <FontAwesomeIcon icon={faArrowUp} /> +12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 8: Teleconsult */}
          <div className={`module-card ${currentIndex === 7 ? 'active' : ''}`} id="card-7">
            <div className="card-sidebar">
              <div className="card-sidebar-header">
                <div className="mod-badge red">
                  <FontAwesomeIcon icon={faVideo} /> Module 8
                </div>
                <div className="sidebar-title">Teleconsulting</div>
                <div className="sidebar-desc">HD video consultations with live prescription support.</div>
              </div>
              <div className="sidebar-menu">
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faCalendar} /> Appointments
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faUserInjured} /> Patients
                </div>
                <div className="sidebar-item">
                  <FontAwesomeIcon icon={faFileInvoiceDollar} /> Billing
                </div>
                <div className={`sidebar-item ${currentIndex === 7 ? 'active' : ''}`}>
                  <FontAwesomeIcon icon={faVideo} /> Teleconsult
                </div>
              </div>
              <div className="sidebar-stat-box">
                <div className="ssb-label">Active Calls</div>
                <div className="ssb-value" style={{ color: 'var(--accent3)' }}>2</div>
                <div className="ssb-sub">In Progress</div>
              </div>
            </div>
            <div className="card-main">
              <div className="card-header">
                <div className="ch-left">
                  <div className="ch-avatar" style={{ background: 'rgba(239,68,68,0.15)', borderColor: 'rgba(239,68,68,0.25)', color: '#f87171' }}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>
                    <div className="ch-name">Dr. Sharma</div>
                    <div className="ch-sub">Admin Access</div>
                  </div>
                </div>
                <div className="toast" style={{ background: 'var(--accent3)' }}>
                  <FontAwesomeIcon icon={faCheckCircle} /> Call Connected
                </div>
              </div>
              <div className="card-body">
                <div className="inner-card" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>Video Consultation</div>
                      <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>Rahul Singh • 10:30 AM</div>
                    </div>
                    <span style={{ background: 'rgba(0,212,170,0.1)', color: 'var(--accent2)', border: '1px solid rgba(0,212,170,0.2)', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '6px' }}>● LIVE</span>
                  </div>
                  <div className="video-frame">
                    <FontAwesomeIcon icon={faUser} className="vf-patient-icon" />
                    <div className="vf-name-badge">
                      <FontAwesomeIcon icon={faCircle} style={{ color: 'var(--accent2)', fontSize: '7px' }} /> Rahul Singh
                    </div>
                    <div className="vf-hd">HD SECURE</div>
                    <div className="vf-pip">
                      <FontAwesomeIcon icon={faUserDoctor} />
                    </div>
                  </div>
                  <div className="call-controls">
                    <div className="cc-btn">
                      <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                    <div className="cc-btn">
                      <FontAwesomeIcon icon={faVideo} />
                    </div>
                    <div className="cc-btn cc-end">
                      <FontAwesomeIcon icon={faPhoneSlash} />
                    </div>
                    <div className="cc-btn">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </div>
                  </div>
                  <div className="live-rx">
                    <div className="live-rx-title">
                      <FontAwesomeIcon icon={faFilePrescription} /> Live Prescription
                    </div>
                    <div className="live-rx-item">Added: Paracetamol 500mg — 1-1-1 for 5 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        <div className="nav-arrow" onClick={prev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="dots">
          {modules.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <div className="nav-arrow" onClick={next}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      {/* Module Strip */}
      <div className="modules-strip">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`ms-item ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goTo(index)}
          >
            <FontAwesomeIcon icon={getIcon(module.icon)} style={{ marginRight: '5px' }} />
            {module.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;

