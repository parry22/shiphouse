"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const LEFT_CARDS = [
  { src: "/assets/Card GTM Image 1.png",     alt: "GTM stamp card",     rotation: -9,  parallax: -0.14 },
  { src: "/assets/Card Retreat Image 3.png",  alt: "Retreat stamp card", rotation:  7,  parallax: -0.10 },
];

const RIGHT_CARDS = [
  { src: "/assets/Card Virality Image 2.png",  alt: "Virality stamp card", rotation:  9,  parallax:  0.12 },
  { src: "/assets/Card Builders Image 4.png",  alt: "Builders stamp card", rotation: -7,  parallax:  0.15 },
];

const ALL_CARDS = [...LEFT_CARDS, ...RIGHT_CARDS];

const PARAGRAPHS = [
  "We've been noticing this gap for over a year now. A new residency program comes up, brings a bunch of cracked founders together, they build something exciting… but then what?",
  "Just because you're building a million-dollar idea doesn't mean it automatically turns into a million-dollar company. That's where Shiphouse comes in.",
  "We help founders in our cohort with the parts that usually get ignored after building: GTM, positioning, content, sales outreach, and revenue growth.",
  "So if you feel like you're building the right product in the right market, and you don't want it to die down after the initial hype, we'd love to hear from you.",
];

// Pre-compute word list with paragraph + word indices
const WORDS = PARAGRAPHS.flatMap((para, pi) =>
  para.split(" ").map((word, wi) => ({ word, pi, wi, isLast: wi === para.split(" ").length - 1 }))
);

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  // ── Word-by-word scroll-driven colour animation ───────────────────────
  // activeCount is derived directly from scroll progress — no CSS transition —
  // so the colour front advances and retreats 1:1 with the user's scroll.
  useEffect(() => {
    const tick = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect     = section.getBoundingClientRect();
      // progress 0 → section top at 75 % vh; progress 1 → section bottom at 25 % vh
      const progress = (window.innerHeight * 0.75 - rect.top) / (rect.height * 0.82);
      const clamped  = Math.max(0, Math.min(1, progress));
      const active   = Math.round(clamped * WORDS.length);

      wordRefs.current.forEach((span, i) => {
        if (!span) return;
        span.style.color = i < active ? "#000000" : "#777879";
      });
    };

    tick();
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);

  // ── Card parallax ─────────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect  = section.getBoundingClientRect();
      const midY  = rect.top + rect.height / 2;
      const delta = -midY;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const { parallax, rotation } = ALL_CARDS[i];
        card.style.transform = `rotate(${rotation}deg) translateY(${delta * parallax}px)`;
      });
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);

  // Group words back into paragraphs for rendering
  let wordCursor = 0;
  const paraGroups = PARAGRAPHS.map((para) => {
    const count  = para.split(" ").length;
    const group  = WORDS.slice(wordCursor, wordCursor + count);
    wordCursor  += count;
    return group;
  });

  return (
    <section className="mission" ref={sectionRef} aria-labelledby="mission-title">

      {/* ── Left card column ── */}
      <div className="mission__cards mission__cards--left" aria-hidden="true">
        {LEFT_CARDS.map((card, i) => (
          <div
            key={card.alt}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="mcard"
            style={{ transform: `rotate(${card.rotation}deg)` }}
          >
            <div className="mcard__frame">
              <Image src={card.src} alt={card.alt} fill sizes="260px" style={{ objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Centre text ── */}
      <div className="mission__inner">
        <h2 className="mission__heading" id="mission-title">
          Our Mission at Shiphouse
        </h2>

        {paraGroups.map((group, pi) => (
          <p key={pi} className="mission__text">
            {group.map(({ word, wi, isLast }, localIdx) => {
              const globalIdx = paraGroups
                .slice(0, pi)
                .reduce((acc, g) => acc + g.length, 0) + localIdx;
              return (
                <span
                  key={wi}
                  ref={(el) => { wordRefs.current[globalIdx] = el; }}
                  className="mission__word"
                >
                  {word}{!isLast ? " " : ""}
                </span>
              );
            })}
          </p>
        ))}
      </div>

      {/* ── Right card column ── */}
      <div className="mission__cards mission__cards--right" aria-hidden="true">
        {RIGHT_CARDS.map((card, i) => (
          <div
            key={card.alt}
            ref={(el) => { cardRefs.current[i + 2] = el; }}
            className="mcard"
            style={{ transform: `rotate(${card.rotation}deg)` }}
          >
            <div className="mcard__frame">
              <Image src={card.src} alt={card.alt} fill sizes="260px" style={{ objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
