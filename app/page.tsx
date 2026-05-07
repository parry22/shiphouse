const waitlistUrl = "https://app.youform.com/forms/sc5fwcwb";

export default function LandingPage() {
  return (
    <main className="hero" aria-labelledby="hero-title">
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

      <section className="hero__content">
        <p className="hero__brand">Shiphouse</p>
        <h1 className="hero__title" id="hero-title">
          <span>Only Place to</span>
          {" "}
          <span>actually ship</span>
        </h1>
        <p className="hero__copy">
          Bringing some of the most cracked founders under one roof and
          helping them scale and get funded.
        </p>
        <a className="hero__button" href={waitlistUrl}>
          Join the Waitlist
        </a>
      </section>
    </main>
  );
}
