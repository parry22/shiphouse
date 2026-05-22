import Faq from "./components/Faq";
import MissionSection from "./components/MissionSection";

const waitlistUrl = "https://app.youform.com/forms/sc5fwcwb";

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero" aria-labelledby="hero-title">
        <picture className="hero__media">
          <source
            srcSet="/assets/shiphouse-hero-mobile.png"
            media="(max-width: 720px)"
          />
          <img
            className="hero__image"
            src="/assets/shiphouse-hero.png"
            alt="Founders working together at a round table in a sunlit classical terrace overlooking the sea."
          />
        </picture>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__brand">Shiphouse</p>
          <h1 className="hero__title" id="hero-title">
            <span>Only Place to</span>
            {" "}
            <span>actually ship</span>
          </h1>
          <p className="hero__copy">
            Bringing some of the most cracked founders under one roof &amp;
            helping them getting funded
          </p>
          <a className="hero__button" href={waitlistUrl}>
            Apply for Upcoming Cohort
          </a>
        </div>
      </section>

      {/* ── Mission + FAQ light section ── */}
      <div className="mid-wrap">
        <MissionSection />

        <section className="faqs" aria-labelledby="faqs-title">
          <h2 className="faqs__heading" id="faqs-title">FAQs</h2>
          <Faq />
        </section>
      </div>

      {/* ── Footer CTA ── */}
      <section className="cta" aria-labelledby="cta-title">
        <picture className="cta__media">
          <source
            srcSet="/assets/footer-mobile.png"
            media="(max-width: 720px)"
          />
          <img
            className="cta__image"
            src="/assets/footer-desktop.png"
            alt="Founders in a classical colonnade."
          />
        </picture>
        <div className="cta__shade" aria-hidden="true" />
        <div className="cta__content">
          <h2 className="cta__heading" id="cta-title">
            Sounds like you belong here?
          </h2>
          <p className="cta__copy">
            Join our waitlist and we will reach out to you once we open our
            applications for our first cohort.
          </p>
          <a className="cta__button" href={waitlistUrl}>
            Join Our Waitlist
          </a>
          <div className="cta__social">
            <a className="cta__social-link" href="https://www.instagram.com/theshiphouse._?igsh=bG84bmU1d3kxeTB6" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a className="cta__social-link" href="https://x.com/shiphousehq?s=21" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <XIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
