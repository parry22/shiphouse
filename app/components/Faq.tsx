"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What is Shiphouse?",
    a: [
      "Shiphouse is a founder cohort for early-stage founders who are already building and want help with GTM, positioning, content, sales outreach, revenue growth, and investor-readiness.",
    ],
  },
  {
    q: "Does Shiphouse take equity?",
    a: [
      "No, Shiphouse does not currently take equity for joining the cohort.",
      "If we ever introduce any advisory, investment, or equity-related model in the future, it will be clearly communicated.",
    ],
  },
  {
    q: "Who should apply?",
    a: [
      "You should apply if you have:",
      "• A live product, MVP, or strong prototype",
      "• Early users, revenue, pilots, waitlist, or proof of demand",
      "• A clear GTM, marketing, sales, or positioning challenge",
      "• Seriousness to actively participate and execute during the cohort",
    ],
  },
  {
    q: "Who is this not for?",
    a: [
      "Shiphouse is not for founders who are only looking for passive networking, random investor intros, or a casual community.",
    ],
  },
  {
    q: "Do I need revenue to apply?",
    a: [
      "No. Revenue is not mandatory.",
      "But you should have some real signal that people care about what you are building. This could be users, pilots, waitlist, LOIs, customer conversations, product usage, or early revenue.",
    ],
  },
  {
    q: "What will founders get during the cohort?",
    a: [
      "Founders will get support around:",
      "• GTM strategy",
      "• Positioning",
      "• Content engine",
      "• Sales outreach",
      "• ICP clarity",
      "• Revenue experiments",
      "• Landing page and messaging feedback",
      "• Investor-readiness",
      "• Peer feedback and accountability",
    ],
  },
  {
    q: "Will Shiphouse do the work for us?",
    a: [
      "No.",
      "Shiphouse is not an agency. We help you get clearer, sharper, and more focused, but founders are expected to execute.",
      "The more seriously you participate, the more value you get.",
    ],
  },
  {
    q: "Will Shiphouse help with fundraising?",
    a: [
      "We will help founders become more investor-ready through better positioning, clearer metrics, sharper narratives, and stronger GTM direction.",
      "Relevant investor introductions may happen where there is fit, but we do not guarantee funding.",
    ],
  },
  {
    q: "How will progress be measured?",
    a: [
      "We will track practical progress like:",
      "• GTM experiments launched",
      "• Customer calls booked",
      "• Content shipped",
      "• Outreach tested",
      "• Revenue movement",
      "• Users or customers added",
      "• Messaging improved",
      "• Investor materials improved",
      "The goal is to leave with more clarity and momentum than you came in with.",
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="faq__list">
      {ITEMS.map((item, i) => (
        <li key={i} className="faq__item">
          <button
            className="faq__question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <svg
              className={`faq__chevron${open === i ? " faq__chevron--open" : ""}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {open === i && (
            <div className="faq__answer">
              {item.a.map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
