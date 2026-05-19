import PortfolioInteractions from "./components/PortfolioInteractions";
import { PROFILE_IMAGE } from "./constants/profileImage";

export default function Home() {
  return (
    <>
      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" id="scrollProgress"></div>

      {/* NAV */}
      <nav id="mainNav">
        <a href="#hero" className="nav-brand">Jiyaa Rupani</a>
        <ul className="nav-links" id="navLinks">
          <li><a href="#hero">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* HERO + ABOUT — merged */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-bg-line"></div>
        <div className="hero-inner">

          {/* LEFT: name / tagline / CTAs */}
          <div className="hero-left">
            <h1 className="hero-name">Jiyaa<br /><em>Rupani</em></h1>
            <p className="hero-tagline">
              Senior Account Manager &nbsp;·&nbsp; Global Marketing Strategist &nbsp;·&nbsp; Influencer &amp; Paid Media Expert
            </p>
            <div className="hero-ctas">
              <a href="#portfolio" className="hero-unified-cta">
                <span className="hero-unified-cta-label">View My Work</span>
                <span className="hero-unified-cta-arrow" aria-hidden="true">
                  <span></span>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: photo only — aligns bottom edge with left column */}
          <div className="hero-right">
            <div className="about-visual">
              <div className="about-img-frame">
                <img src={PROFILE_IMAGE} alt="Jiyaa Rupani" />
              </div>
              <div className="about-img-accent"></div>
              <div className="about-badge">
                <strong>4+</strong>
                Years Global Experience
              </div>
            </div>
          </div>

          {/* DETAIL CARDS — symmetric full-width row */}
          <div className="hero-details">
            <div className="about-detail">
              <div className="about-detail-label">Nationality</div>
              <div className="about-detail-val">Spanish</div>
            </div>
            <div className="about-detail">
              <div className="about-detail-label">Education</div>
              <div className="about-detail-val">BSc Intl Business &amp; Marketing, Leeds</div>
            </div>
            <div className="about-detail">
              <div className="about-detail-label">Location</div>
              <div className="about-detail-val">Open to Relocate</div>
            </div>
            <div className="about-detail">
              <div className="about-detail-label">Languages</div>
              <div className="about-detail-val">English · Spanish · Hindi · French</div>
            </div>
          </div>

          {/* STATS — full-width bottom row */}
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">$<span className="counter" data-target="5" data-suffix="M+">0</span></div>
              <div className="stat-label">Campaigns Managed</div>
            </div>
            <div className="stat">
              <div className="stat-num"><span className="counter" data-target="25" data-suffix="+">0</span></div>
              <div className="stat-label">Campaigns Led</div>
            </div>
            <div className="stat">
              <div className="stat-num"><span className="counter" data-target="125" data-suffix="%">0</span></div>
              <div className="stat-label">Avg Client Spend Growth</div>
            </div>
            <div className="stat">
              <div className="stat-num"><span className="counter" data-target="250" data-suffix="%">0</span></div>
              <div className="stat-label">Reach Growth in 60 Days</div>
            </div>
          </div>

        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="section-header fade-up">
          <div className="section-label">Work</div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">A curated selection of campaigns, launches, and activations from global markets.</p>
        </div>
        <div className="portfolio-grid">

          <div className="portfolio-card fade-up card-reel">
            <div className="portfolio-img">
              <img src="/hayday.jpg" alt="Supercell Hay Day Activation" className="img-hayday" />
              <video src="/hd.mp4" muted loop playsInline preload="none" />
              <div className="portfolio-tags">
                <span className="portfolio-tag">Experiential</span>
                <span className="portfolio-tag">Gaming</span>
                <span className="portfolio-tag">Influencer</span>
              </div>
            </div>
            <div className="portfolio-body">
              <div className="portfolio-title">Supercell Hay Day Activation</div>
              <div className="portfolio-desc">In-person gaming event driving 3,000+ installs in 2 days and a 135% lift in social media engagement. End-to-end event concept, creator briefing, and live execution.</div>
            </div>
          </div>

          <div className="portfolio-card fade-up card-reel">
            <div className="portfolio-img">
              <img src="/cb-photo.png" alt="CurrentBody India Launch" className="img-cb" />
              <video src="/cb-video.mp4" muted loop playsInline preload="none" />
              <div className="portfolio-tags">
                <span className="portfolio-tag">Influencer Marketing</span>
                <span className="portfolio-tag">Launch Strategy</span>
                <span className="portfolio-tag">SEO</span>
              </div>
            </div>
            <div className="portfolio-body">
              <div className="portfolio-title">CurrentBody India Launch</div>
              <div className="portfolio-desc">Full-funnel market entry strategy for brand's first India launch. 100+ influencers onboarded in month one, 15K sign-ups generated, 150% website traffic growth.</div>
            </div>
          </div>

          <div className="portfolio-card fade-up card-landscape">
            <div className="portfolio-img">
              <img src="/amazon.png" alt="Amazon Fashion EU TikTok Campaign" className="img-top" />
              <div className="portfolio-tags">
                <span className="portfolio-tag">Paid Social</span>
                <span className="portfolio-tag">TikTok Ads</span>
                <span className="portfolio-tag">GTM</span>
              </div>
            </div>
            <div className="portfolio-body">
              <div className="portfolio-title">Amazon Fashion EU TikTok Campaign</div>
              <div className="portfolio-desc">GTM planning and end-to-end paid ad management for Amazon Fashion EU's global TikTok launch across 4 countries, with 1,000+ creatives deployed.</div>
            </div>
          </div>

          <div className="portfolio-card fade-up card-landscape">
            <div className="portfolio-img">
              <img src="/aiup.png" alt="Black Friday Spain Influencer Scale" />
              <div className="portfolio-tags">
                <span className="portfolio-tag">Influencer</span>
                <span className="portfolio-tag">Performance Marketing</span>
                <span className="portfolio-tag">Meta Ads</span>
              </div>
            </div>
            <div className="portfolio-body">
              <div className="portfolio-title">Black Friday Spain Influencer Scale</div>
              <div className="portfolio-desc">Coordinated 500+ creators across the Spanish market for Black Friday, delivering 250% year-on-year revenue growth through precision targeting and creator strategy.</div>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-header fade-up">
          <div className="section-label">Career</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Four years of results-driven marketing across global agencies, tech giants, and fast-growth brands.</p>
        </div>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Senior Account Manager</div>
                  <div className="timeline-company">Media Bodies — UK</div>
                </div>
                <div className="timeline-period">Feb 2025 — Present</div>
              </div>
              <ul className="timeline-list">
                <li>Led end-to-end account management for <strong>$5M+ annual influencer &amp; media campaigns</strong> across global markets</li>
                <li>Drove <strong>125% increase in client spend</strong> through data-backed solutions for BetterHelp, monday.com, Air Up, NordVPN &amp; FOREO</li>
                <li>Designed in-person activation for Supercell's Hay Day → <strong>3,000+ installs in 2 days</strong> &amp; 135% social media engagement growth</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Partnerships Executive</div>
                  <div className="timeline-company">The Beauty Tech Group — UK</div>
                </div>
                <div className="timeline-period">Aug 2024 — Feb 2025</div>
              </div>
              <ul className="timeline-list">
                <li>Led CurrentBody's <strong>first-ever India market entry</strong>; onboarded 100+ influencers in month one → 150% website traffic increase &amp; 210% growth in social media inquiries</li>
                <li>Generated <strong>15,000+ product sign-ups</strong> in the first month via full-funnel launch strategy</li>
                <li>Scaled Spanish market influencer program with <strong>500+ creators during Black Friday</strong> → 250% revenue growth YoY</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Social Media Coordinator</div>
                  <div className="timeline-company">Vision Media Works — Leeds</div>
                </div>
                <div className="timeline-period">Sep 2023 — Aug 2024</div>
              </div>
              <ul className="timeline-list">
                <li>Drove <strong>160% increase in social media traction</strong> by redefining content with a Gen Z lens</li>
                <li>Boosted visibility by <strong>70% across three client accounts</strong> through performance-led content optimisation</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Marketing Specialist (Placement)</div>
                  <div className="timeline-company">Amazon — London HQ</div>
                </div>
                <div className="timeline-period">Jul 2022 — Jul 2023</div>
              </div>
              <ul className="timeline-list">
                <li>Launched <strong>1,000+ paid social ads across 4 countries</strong> for Amazon Fashion EU</li>
                <li>Led GTM planning for Amazon Fashion EU's TikTok campaign including end-to-end paid ad management</li>
                <li>Increased offshored work hours by 90% and delivered <strong>67% team productivity improvement</strong> in 11 months</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS — visual 4-card layout */}
      <section id="skills">
        <div className="section-header fade-up">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="section-subtitle">A full-stack marketing toolkit built across global markets, platforms, and disciplines.</p>
        </div>
        <div className="skills-visual-grid">

          <div className="skill-card fade-up">
            <div className="skill-card-header">
              <div className="skill-card-icon">
                <img src="/tools.svg" alt="Strategy icon" width="24" height="24" />
              </div>
              <div className="skill-card-title">Strategy &amp; Campaigns</div>
            </div>
            <ul className="skill-card-list">
              <li>Brand &amp; GTM Strategy</li>
              <li>Campaign Planning</li>
              <li>Market Entry Strategy</li>
              <li>Audience &amp; Consumer Research</li>
            </ul>
          </div>

          <div className="skill-card fade-up">
            <div className="skill-card-header">
              <div className="skill-card-icon">
                <img src="/paid-media.svg" alt="Paid Media icon" width="24" height="24" />
              </div>
              <div className="skill-card-title">Paid Media &amp; Analytics</div>
            </div>
            <ul className="skill-card-list">
              <li>Meta &amp; TikTok Ads Manager</li>
              <li>Google Ads · GA4</li>
              <li>ROI / ROAS Optimisation</li>
              <li>Paid Social Campaigns</li>
            </ul>
          </div>

          <div className="skill-card fade-up">
            <div className="skill-card-header">
              <div className="skill-card-icon">
                <img src="/influencer.svg" alt="Influencer icon" width="24" height="24" />
              </div>
              <div className="skill-card-title">Influencer &amp; Content</div>
            </div>
            <ul className="skill-card-list">
              <li>Influencer Sourcing &amp; Vetting</li>
              <li>Creator Negotiations</li>
              <li>UGC &amp; Short-Form Video</li>
              <li>Gen Z &amp; Platform Growth</li>
            </ul>
          </div>

          <div className="skill-card fade-up">
            <div className="skill-card-header">
              <div className="skill-card-icon">
                <img src="/ai.svg" alt="Tools icon" width="24" height="24" />
              </div>
              <div className="skill-card-title">Tools &amp; AI</div>
            </div>
            <ul className="skill-card-list">
              <li>Claude · ChatGPT · Midjourney</li>
              <li>Canva · Adobe Creative Suite</li>
              <li>Tubular · IMA · monday.com</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>

        </div>
        <div className="skills-languages-row">
          <div className="lang-item">
            <div>
              <div className="lang-name">English</div>
              <div className="lang-level">Native</div>
            </div>
          </div>
          <div className="lang-item">
            <div>
              <div className="lang-name">Spanish</div>
              <div className="lang-level">Native</div>
            </div>
          </div>
          <div className="lang-item">
            <div>
              <div className="lang-name">Hindi</div>
              <div className="lang-level">Native</div>
            </div>
          </div>
          <div className="lang-item">
            <div>
              <div className="lang-name">French</div>
              <div className="lang-level">Upper Intermediate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements">
        <div className="achievements-strip">
          <div className="achievement-item">
            <div className="achievement-icon">✦</div>
            <div className="achievement-text">
              <strong>First Class Honours</strong>
              <span>University of Leeds — BSc International Business &amp; Marketing</span>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">◉</div>
            <div className="achievement-text">
              <strong>4+ Years Global Reach</strong>
              <span>USA · UK · Europe · Asia</span>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">↗</div>
            <div className="achievement-text">
              <strong>$5M+ Campaigns Managed</strong>
              <span>Across influencer, paid media &amp; brand partnerships</span>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">◆</div>
            <div className="achievement-text">
              <strong>President, Consulting Society</strong>
              <span>EY · Deloitte · L'Oréal sponsorships secured</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-header fade-up">
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="edu-card fade-up">
          <div className="edu-year-block">
            <div className="edu-year">2020</div>
            <div className="edu-year-sep"></div>
            <div className="edu-year end">2024</div>
          </div>
          <div>
            <div className="edu-institution">University of Leeds</div>
            <div className="edu-degree">BSc International Business and Marketing — <strong>First Class Honours</strong></div>
            <div className="edu-highlights">
              <div className="edu-highlight">Dissertation on Influencer Marketing &amp; Consumer Purchase Intention in India — distinction-level research</div>
              <div className="edu-highlight">President of the Consulting Society — secured sponsorships from EY, Deloitte &amp; L'Oréal</div>
              <div className="edu-highlight">Graduated with First Class Honours across all major modules in marketing strategy, consumer behaviour &amp; international business</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-wrapper">

          {/* LEFT: intro */}
          <div>
            <div className="section-header fade-up">
              <div className="section-label">Contact</div>
              <h2 className="section-title">Let&apos;s build something great</h2>
            </div>
            <p className="contact-tagline">&ldquo;Strategy without creativity is just a spreadsheet.&rdquo;</p>
            <p className="contact-note">Whether you&apos;re launching into a new market, scaling an influencer programme, or looking for a strategic partner who speaks performance — I&apos;d love to hear from you.</p>
          </div>

          {/* RIGHT: contact cards + social */}
          <div>
            <a href="mailto:jiyaarupani27@hotmail.com" className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
              </div>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-val">jiyaarupani27@hotmail.com</div>
              </div>
            </a>

            <a href="tel:+918530255600" className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="contact-card-label">Phone</div>
                <div className="contact-card-val">+91 85302 55600</div>
              </div>
            </a>

            <div className="contact-social-heading">Connect with me</div>
            <div className="social-brand-row">
              <a href="https://linkedin.com/in/jiyaarupani" target="_blank" rel="noopener" className="social-brand-link linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://wa.me/918530255600" target="_blank" rel="noopener" className="social-brand-link whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">© 2025 All rights reserved.</div>
      </footer>
      <PortfolioInteractions />
    </>
  );
}
