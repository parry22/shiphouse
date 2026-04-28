(function () {
  const sections = [
    {
      id: "founder-contact",
      eyebrow: "Section 1",
      title: "Founder & Contact Details",
      description:
        "Start with who you are, where you are based, and whether residency travel is realistic for you.",
      questions: [
        shortField(1, "Full name", "fullName"),
        emailField(2, "Email", "email"),
        shortField(3, "WhatsApp / phone number", "phone"),
        urlField(4, "LinkedIn profile", "linkedin"),
        urlField(
          5,
          "X/Twitter, GitHub, personal website, or other proof-of-work link",
          "proofOfWork",
          { optional: true }
        ),
        shortField(6, "Current city and country", "currentLocation"),
        radioField(
          7,
          "Are you able to travel for a 1–3 month residency?",
          "travelAvailability",
          ["Yes", "Depends on dates/location", "No"]
        ),
        checkboxField(
          8,
          "Which locations are you open to?",
          "residencyLocations",
          [
            "India",
            "Thailand",
            "Vietnam",
            "Indonesia",
            "Malaysia",
            "Sri Lanka",
            "Nepal",
            "Singapore",
            "Open to anywhere",
            "Other",
          ]
        ),
      ],
    },
    {
      id: "company-basics",
      eyebrow: "Section 2",
      title: "Company Basics",
      description:
        "Give us the company in plain English: what it is, who it serves, and why the problem is painful enough to matter.",
      questions: [
        shortField(9, "Company name", "companyName"),
        urlField(10, "Website or product link", "productLink"),
        shortField(11, "One-line description of your company", "oneLiner", {
          helper:
            "Explain what you do in one clear sentence. Avoid jargon.",
        }),
        longField(12, "What are you building, and who is it for?", "whatBuilding", {
          description:
            "This clubs together product, customer, and basic positioning.",
        }),
        longField(13, "What painful problem are you solving?", "painProblem"),
        radioField(
          14,
          "What category best describes your company?",
          "companyCategory",
          [
            "SaaS",
            "AI application",
            "Developer tool",
            "Consumer app",
            "Marketplace",
            "Fintech",
            "Healthtech",
            "Edtech",
            "E-commerce / commerce",
            "Creator / media",
            "Climate",
            "Deeptech",
            "Other",
          ]
        ),
        shortField(15, "When did you start working on this?", "startedWorking", {
          helper: "Example: Jan 2025",
        }),
        radioField(16, "Is the company incorporated?", "incorporated", [
          "Yes",
          "No",
          "In process",
        ]),
      ],
    },
    {
      id: "team-commitment",
      eyebrow: "Section 3",
      title: "Team & Commitment",
      description:
        "We want to understand who is in the company, how committed the team is, and whether founder-market fit is real.",
      questions: [
        longField(
          17,
          "Who are the founders and what does each person do?",
          "foundersRoles",
          {
            helper:
              "Include role, location, and whether each founder is full-time or part-time.",
          }
        ),
        radioField(18, "Are you working on this full-time?", "fullTimeStatus", [
          "Yes, full-time",
          "Almost full-time",
          "Part-time with job/college",
          "Side project only",
        ]),
        radioField(
          19,
          "How many hours per week do you currently spend on the company?",
          "weeklyHours",
          ["60+ hours", "40–60 hours", "20–40 hours", "10–20 hours", "Less than 10 hours"]
        ),
        longField(
          20,
          "What makes you or your team unusually suited to solve this problem?",
          "teamAdvantage"
        ),
        longField(
          21,
          "What is the most impressive thing you or your team has built, sold, or achieved before this?",
          "previousAchievement"
        ),
      ],
    },
    {
      id: "product-velocity",
      eyebrow: "Section 4",
      title: "Product & Shipping Velocity",
      description:
        "Shiphouse is for people who actually ship. This section leans hard on execution, current product state, and what is moving.",
      questions: [
        radioField(22, "What is live today?", "liveStatus", [
          "Public product with active users/customers",
          "Private beta",
          "MVP/demo",
          "Prototype",
          "Landing page only",
          "Idea stage",
        ]),
        urlField(23, "Share a product demo link", "productDemo", {
          helper: "Loom, screen recording, live demo, app link, or deck walkthrough.",
        }),
        longField(24, "What did you ship in the last 30 days?", "shippedLast30", {
          description: "This replaces separate 14-day and 30-day questions.",
        }),
        longField(25, "What are you planning to ship in the next 30 days?", "shipNext30"),
        shortField(26, "What is your most important metric right now?", "importantMetric", {
          helper:
            "Examples: revenue, active users, retention, booked calls, conversion rate, usage, demos, pilots.",
        }),
        longField(
          27,
          "What is the biggest risk or unknown in your company right now?",
          "biggestRisk"
        ),
        longField(
          27.1,
          "Shiphouse is primarily for founders with a live product or early traction. What proof do you have that this problem is worth solving?",
          "ideaStageProof",
          {
            conditional: "isIdeaStage",
            helper:
              "Use this to show user interviews, demand signals, founder insight, or any evidence the problem is urgent.",
          }
        ),
      ],
    },
    {
      id: "traction",
      eyebrow: "Section 5",
      title: "Traction",
      description:
        "This is where the proof lives: users, customers, revenue, demand signals, and the honest edges that still are not working.",
      questions: [
        radioField(28, "What traction do you currently have?", "tractionLevel", [
          "No users yet",
          "Waitlist",
          "Free users",
          "Active beta users",
          "Paying customers",
          "Revenue-generating",
          "Strong revenue/growth",
          "Signed LOIs or pilots",
          "Other",
        ]),
        longField(29, "Share your traction numbers", "tractionNumbers", {
          helper:
            "Include users, customers, revenue, growth rate, waitlist size, retention, pilots, LOIs, or any other relevant proof.",
        }),
        fileOrUrlField(30, "Upload or link proof of traction", "tractionProof", {
          helper:
            "Examples: Stripe screenshot, analytics dashboard, customer emails, app dashboard, usage screenshot, signed LOI.",
        }),
        longField(
          31,
          "Who are your top users/customers and how are they using the product?",
          "topUsers"
        ),
        longField(
          32,
          "What is one strong signal that people really want this?",
          "strongSignal"
        ),
        longField(33, "What is one thing that is not working yet?", "notWorkingYet", {
          description:
            "This matters. Serious founders are honest about what is broken.",
        }),
        shortField(33.1, "Monthly revenue", "monthlyRevenue", {
          conditional: "isPayingCustomers",
        }),
        shortField(33.2, "Number of paying customers", "payingCustomerCount", {
          conditional: "isPayingCustomers",
        }),
        shortField(33.3, "Growth rate", "growthRate", {
          conditional: "isPayingCustomers",
        }),
        shortField(33.4, "Waitlist size", "waitlistSize", {
          conditional: "isWaitlistOnly",
        }),
        longField(33.5, "How did you build the waitlist?", "waitlistBuilt", {
          conditional: "isWaitlistOnly",
        }),
        shortField(
          33.6,
          "How many people on the waitlist have you spoken to personally?",
          "waitlistConversations",
          {
            conditional: "isWaitlistOnly",
          }
        ),
      ],
    },
    {
      id: "market-gtm",
      eyebrow: "Section 6",
      title: "Market & GTM",
      description:
        "This section is about clarity. We want to see who the ideal customer is, how you reach them, and why you think you can win.",
      questions: [
        longField(34, "Who is your ideal customer?", "idealCustomer", {
          helper:
            "Be specific: role, company type, geography, budget, and pain level.",
        }),
        checkboxField(35, "How are you acquiring users/customers today?", "acquisitionChannels", [
          "Founder-led sales",
          "Cold email",
          "LinkedIn outbound",
          "Content",
          "SEO",
          "Paid ads",
          "Community",
          "Partnerships",
          "Referrals",
          "Events",
          "Marketplace/app store",
          "Other",
        ]),
        shortField(36, "Which acquisition channel is working best so far?", "bestChannel"),
        longField(37, "What is your pricing or business model?", "pricingModel"),
        longField(38, "Who are your main competitors or alternatives?", "competitors", {
          helper:
            "Include direct competitors, indirect competitors, and what customers do manually today.",
        }),
        longField(39, "Why do you think you can win?", "whyWin"),
      ],
    },
    {
      id: "fundraising",
      eyebrow: "Section 7",
      title: "Fundraising & Investor Fit",
      description:
        "Only the fundraising paths that fit your answer should appear. If you are not raising now, we keep this lean.",
      questions: [
        radioField(40, "Are you currently fundraising?", "fundraisingStatus", [
          "Yes, actively",
          "Starting in the next 1–3 months",
          "Later this year",
          "Not fundraising right now",
          "Not sure",
        ]),
        shortField(41, "How much are you raising or planning to raise?", "raisingAmount", {
          optional: true,
          conditional: "isFundraisingFlow",
        }),
        shortField(42, "How much have you already raised or committed, if any?", "raisedAlready"),
        fileOrUrlField(43, "Upload your pitch deck", "pitchDeck", {
          optional: true,
          helper: "Optional, but recommended.",
          conditional: "isFundraisingFlow",
        }),
        longField(44, "Why are you fundable right now?", "fundableNow", {
          helper: "Explain why an investor should care now, not 12 months later.",
          conditional: "isFundraisingFlow",
        }),
        longField(
          44.1,
          "What current investor conversations or signals do you already have?",
          "investorConversations",
          {
            conditional: "isActivelyFundraising",
          }
        ),
        longField(
          45,
          "What milestone would make your next fundraise much easier?",
          "fundraiseMilestone",
          {
            helper:
              "Examples: $10k MRR, 10 pilots, 30% retention improvement, first enterprise contract, launch in new market.",
          }
        ),
      ],
    },
    {
      id: "shiphouse-fit",
      eyebrow: "Section 8",
      title: "Shiphouse Fit",
      description:
        "This is the residency-specific layer: why you want this environment, what you would work on, and what value you bring to the cohort.",
      questions: [
        longField(46, "Why do you want to join Shiphouse?", "whyShiphouse"),
        longField(
          47,
          "What specific outcome would make Shiphouse successful for you?",
          "successOutcome",
          {
            helper:
              "Examples: raise funding, close customers, fix GTM, sharpen positioning, launch a growth channel.",
          }
        ),
        longField(
          48,
          "What would you work on during a 30-day Shiphouse sprint?",
          "thirtyDaySprint"
        ),
        longField(
          49,
          "What can you contribute to the cohort?",
          "cohortContribution",
          {
            helper:
              "Examples: engineering, sales, AI workflows, design, fundraising experience, growth, community, hiring, content.",
          }
        ),
        radioField(50, "Which residency length works best for you?", "residencyLength", [
          "1 month",
          "2 months",
          "3 months",
          "Flexible",
        ]),
        radioField(
          51,
          "Are you comfortable living and working in a focused founder residency environment?",
          "residencyComfort",
          ["Yes", "Yes, with private room", "Maybe", "No"]
        ),
      ],
    },
    {
      id: "high-agency",
      eyebrow: "Section 9",
      title: "High-Agency Filter",
      description:
        "Short, sharp, and revealing. These questions help show how you behave when the path is unclear and the work is hard.",
      questions: [
        longField(
          52,
          "Tell us about a time you created an opportunity instead of waiting for one.",
          "createdOpportunity"
        ),
        longField(
          53,
          "What is the hardest thing you have done for this company so far?",
          "hardestThing"
        ),
        longField(
          54,
          "If we do not accept you, what will you do over the next 30 days anyway?",
          "next30Anyway"
        ),
        longField(55, "Final question: why should we accept you?", "whyAcceptYou", {
          helper: "Limit: 1,000 characters.",
          maxLength: 1000,
        }),
      ],
    },
    {
      id: "consent",
      eyebrow: "Section 10",
      title: "Consent & Terms",
      description:
        "These last questions set expectations around introductions, privacy, and what Shiphouse can share on your behalf.",
      questions: [
        radioField(
          56,
          "Are you open to Shiphouse introducing you to relevant investors, sponsors, mentors, and strategic partners?",
          "introOpenness",
          ["Yes", "Maybe, depending on fit", "No"]
        ),
        radioField(
          57,
          "Are you open to Shiphouse acting as a scout/referral partner for investor introductions where applicable?",
          "scoutReferral",
          ["Yes", "Maybe, want to understand terms", "No"]
        ),
        radioField(
          58,
          "Are you willing to share company progress metrics privately with Shiphouse during the residency?",
          "shareMetrics",
          ["Yes", "Yes, with NDA", "No"]
        ),
        longField(
          59,
          "Anything confidential we should avoid sharing with investors/sponsors without permission?",
          "confidentialNotes",
          {
            optional: true,
          }
        ),
      ],
    },
  ];

  const conditionEvaluators = {
    isIdeaStage(state) {
      return state.liveStatus === "Idea stage";
    },
    isFundraisingFlow(state) {
      return (
        state.fundraisingStatus === "Yes, actively" ||
        state.fundraisingStatus === "Starting in the next 1–3 months"
      );
    },
    isActivelyFundraising(state) {
      return state.fundraisingStatus === "Yes, actively";
    },
    isPayingCustomers(state) {
      return (
        state.tractionLevel === "Paying customers" ||
        state.tractionLevel === "Revenue-generating" ||
        state.tractionLevel === "Strong revenue/growth"
      );
    },
    isWaitlistOnly(state) {
      return state.tractionLevel === "Waitlist";
    },
  };

  const sectionsRoot = document.getElementById("form-sections");
  const form = document.getElementById("founder-application-form");
  const feedback = document.getElementById("form-feedback");
  const pagerTabs = document.getElementById("section-pager-tabs");
  const progressLabel = document.getElementById("section-progress-label");
  const prevButton = document.getElementById("prev-section-button");
  const nextButton = document.getElementById("next-section-button");
  const submitButton = document.getElementById("submit-button");
  const endpoint = window.SHIPHOUSE_FORM_ENDPOINT || "";
  let currentSectionIndex = 0;

  sections.forEach(function (section) {
    sectionsRoot.appendChild(renderSection(section));
    pagerTabs.appendChild(renderPagerTab(section));
  });

  updateConditionalQuestions();
  bindOtherChoiceVisibility();
  updatePagination();

  form.addEventListener("change", updateConditionalQuestions);
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!endpoint) {
      feedback.textContent =
        "The form backend is not connected yet. Add the Apps Script endpoint to enable submissions.";
      return;
    }

    feedback.textContent = "Submitting application...";
    submitButton.disabled = true;

    try {
      const payload = buildPayload();
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      feedback.textContent =
        "Application submitted. Responses should appear in the connected Google Sheet shortly.";
      form.reset();
      currentSectionIndex = 0;
      updateConditionalQuestions();
      bindOtherChoiceVisibility();
      updatePagination();
    } catch (error) {
      feedback.textContent =
        "Submission failed. Please check the connected Apps Script endpoint and try again.";
    } finally {
      submitButton.disabled = false;
    }
  });
  prevButton.addEventListener("click", function () {
    goToSection(currentSectionIndex - 1);
  });
  nextButton.addEventListener("click", function () {
    goToSection(currentSectionIndex + 1);
  });

  function renderSection(section) {
    const block = createElement("section", "section-block");
    block.id = section.id;
    block.dataset.sectionId = section.id;

    const intro = createElement("div", "section-block__intro");

    const introTitle = document.createElement("div");
    introTitle.innerHTML =
      '<p class="section-block__eyebrow">' +
      escapeHtml(section.eyebrow) +
      "</p>" +
      "<h3>" +
      escapeHtml(section.title) +
      "</h3>";

    const introCopy = createElement("p", "section-block__description");
    introCopy.textContent = section.description;

    intro.appendChild(introTitle);
    intro.appendChild(introCopy);
    block.appendChild(intro);

    const questionGrid = createElement("div", "question-grid");
    section.questions.forEach(function (question) {
      questionGrid.appendChild(renderQuestion(question));
    });
    block.appendChild(questionGrid);

    return block;
  }

  function renderPagerTab(section) {
    const button = createElement("button", "section-pager__tab");
    button.type = "button";
    button.dataset.sectionTarget = section.id;
    button.textContent = section.title;
    button.addEventListener("click", function () {
      const targetIndex = sections.findIndex(function (item) {
        return item.id === section.id;
      });
      goToSection(targetIndex);
    });
    return button;
  }

  function renderQuestion(question) {
    const wrapper = createElement("div", "question");
    wrapper.dataset.questionKey = question.key;
    if (question.conditional) {
      wrapper.dataset.conditional = "true";
      wrapper.dataset.condition = question.conditional;
    }

    const header = createElement("div", "question__header");
    const number = createElement("span", "question__number");
    number.textContent = "Q" + question.number;
    header.appendChild(number);

    if (question.optional) {
      const optional = createElement("span", "question__optional");
      optional.textContent = "Optional";
      header.appendChild(optional);
    }

    const title = createElement("label", "question__title");
    title.htmlFor = question.key;
    title.textContent = question.label;

    wrapper.appendChild(header);
    wrapper.appendChild(title);

    if (question.description) {
      const description = createElement("p", "question__description");
      description.textContent = question.description;
      wrapper.appendChild(description);
    }

    if (question.meta) {
      const meta = createElement("p", "question__meta");
      meta.textContent = question.meta;
      wrapper.appendChild(meta);
    }

    if (question.helper) {
      const helper = createElement("p", "question__helper");
      helper.textContent = question.helper;
      wrapper.appendChild(helper);
    }

    if (question.conditional && question.conditionalTip) {
      const tip = createElement("p", "conditional-tip");
      tip.textContent = question.conditionalTip;
      wrapper.appendChild(tip);
    }

    wrapper.appendChild(renderField(question));
    return wrapper;
  }

  function renderField(question) {
    if (question.type === "textarea") {
      const textarea = document.createElement("textarea");
      textarea.id = question.key;
      textarea.name = question.key;
      textarea.placeholder = question.placeholder || "Write here";
      if (question.maxLength) {
        textarea.maxLength = question.maxLength;
      }
      return textarea;
    }

    if (question.type === "select") {
      const select = document.createElement("select");
      select.id = question.key;
      select.name = question.key;

      const empty = document.createElement("option");
      empty.value = "";
      empty.textContent = "Select an option";
      select.appendChild(empty);

      question.options.forEach(function (option) {
        const optionNode = document.createElement("option");
        optionNode.value = option;
        optionNode.textContent = option;
        select.appendChild(optionNode);
      });

      return select;
    }

    if (question.type === "radio" || question.type === "checkbox") {
      const fieldset = createElement("div", "choices");
      const multiple = question.type === "checkbox";

      question.options.forEach(function (option, index) {
        const row = createElement("label", "choice");
        const control = document.createElement("input");
        control.type = question.type;
        control.name = multiple ? question.key + "[]" : question.key;
        control.value = option;
        control.id = question.key + "-" + index;
        row.appendChild(control);

        const text = document.createElement("span");
        text.textContent = option;
        row.appendChild(text);

        fieldset.appendChild(row);
      });

      if (question.options.indexOf("Other") !== -1) {
        const otherWrap = createElement("div", "choice__other");
        otherWrap.dataset.otherFor = question.key;
        otherWrap.hidden = true;

        const otherInput = document.createElement("input");
        otherInput.type = "text";
        otherInput.name = question.key + "Other";
        otherInput.placeholder = "Add your own answer";
        otherWrap.appendChild(otherInput);
        fieldset.appendChild(otherWrap);
      }

      return fieldset;
    }

    const input = document.createElement("input");
    input.className = "question__field";
    input.id = question.key;
    input.name = question.key;
    input.type = question.type;
    input.placeholder = question.placeholder || defaultPlaceholder(question.type);
    return input;
  }

  function updateConditionalQuestions() {
    const state = readState();
    document.querySelectorAll("[data-condition]").forEach(function (node) {
      const conditionName = node.dataset.condition;
      const visible = conditionEvaluators[conditionName]
        ? conditionEvaluators[conditionName](state)
        : false;
      node.hidden = !visible;
      node
        .querySelectorAll("input, textarea, select")
        .forEach(function (control) {
          control.disabled = !visible;
        });
    });
  }

  function goToSection(targetIndex) {
    if (targetIndex < 0 || targetIndex > sections.length - 1) {
      return;
    }

    currentSectionIndex = targetIndex;
    updatePagination();
    sectionsRoot.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updatePagination() {
    const blocks = sectionsRoot.querySelectorAll(".section-block");
    blocks.forEach(function (block, index) {
      block.hidden = index !== currentSectionIndex;
    });

    pagerTabs.querySelectorAll(".section-pager__tab").forEach(function (tab, index) {
      tab.classList.toggle("is-active", index === currentSectionIndex);
    });

    progressLabel.textContent =
      "Section " + (currentSectionIndex + 1) + " of " + sections.length;

    prevButton.hidden = currentSectionIndex === 0;
    nextButton.hidden = currentSectionIndex === sections.length - 1;
    submitButton.hidden = currentSectionIndex !== sections.length - 1;
  }

  function bindOtherChoiceVisibility() {
    document.querySelectorAll("[data-other-for]").forEach(function (otherBlock) {
      const key = otherBlock.dataset.otherFor;
      const reveal = function () {
        const choices = form.querySelectorAll('input[name="' + key + '[]"], input[name="' + key + '"]');
        const show = Array.from(choices).some(function (choice) {
          return choice.value === "Other" && choice.checked;
        });
        otherBlock.hidden = !show;
      };

      reveal();
      form.addEventListener("change", reveal);
    });
  }

  function readState() {
    return {
      liveStatus: valueOf("liveStatus"),
      tractionLevel: valueOf("tractionLevel"),
      fundraisingStatus: valueOf("fundraisingStatus"),
    };
  }

  function buildPayload() {
    const fields = [];

    sections.forEach(function (section) {
      section.questions.forEach(function (question) {
        if (question.conditional && !conditionEvaluators[question.conditional](readState())) {
          return;
        }

        const value = readQuestionValue(question);
        if (
          value === "" ||
          value === null ||
          (Array.isArray(value) && value.length === 0)
        ) {
          return;
        }

        fields.push({
          number: question.number,
          key: question.key,
          label: question.label,
          value: value,
          section: section.title,
        });
      });
    });

    return {
      submittedAt: new Date().toISOString(),
      name: valueOf("fullName"),
      email: valueOf("email"),
      company: valueOf("companyName"),
      fields: fields,
    };
  }

  function readQuestionValue(question) {
    if (question.type === "checkbox") {
      const values = Array.from(
        form.querySelectorAll('input[name="' + question.key + '[]"]:checked')
      ).map(function (input) {
        return input.value;
      });

      if (values.includes("Other")) {
        const otherValue = form.querySelector('input[name="' + question.key + 'Other"]');
        if (otherValue && otherValue.value.trim()) {
          values[values.indexOf("Other")] = "Other: " + otherValue.value.trim();
        }
      }

      return values;
    }

    if (question.type === "radio") {
      const radio = form.querySelector('input[name="' + question.key + '"]:checked');
      if (!radio) {
        return "";
      }

      if (radio.value === "Other") {
        const otherValue = form.querySelector('input[name="' + question.key + 'Other"]');
        if (otherValue && otherValue.value.trim()) {
          return "Other: " + otherValue.value.trim();
        }
      }

      return radio.value;
    }

    const field = form.querySelector('[name="' + question.key + '"]');
    return field ? field.value.trim() : "";
  }

  function valueOf(key) {
    const radio = form.querySelector('input[name="' + key + '"]:checked');
    if (radio) {
      return radio.value;
    }

    const input = form.querySelector("#" + key);
    return input ? input.value : "";
  }

  function shortField(number, label, key, options) {
    return Object.assign(
      { number: number, label: label, key: key, type: "text" },
      options || {}
    );
  }

  function emailField(number, label, key, options) {
    return Object.assign(
      { number: number, label: label, key: key, type: "email" },
      options || {}
    );
  }

  function urlField(number, label, key, options) {
    return Object.assign(
      { number: number, label: label, key: key, type: "url" },
      options || {}
    );
  }

  function longField(number, label, key, options) {
    return Object.assign(
      { number: number, label: label, key: key, type: "textarea" },
      options || {}
    );
  }

  function fileOrUrlField(number, label, key, options) {
    return Object.assign(
      {
        number: number,
        label: label,
        key: key,
        type: "url",
        placeholder: "Paste a link for now. File upload can be wired later.",
      },
      options || {}
    );
  }

  function radioField(number, label, key, options, settings) {
    return Object.assign(
      {
        number: number,
        label: label,
        key: key,
        type: "radio",
        options: options,
      },
      settings || {}
    );
  }

  function checkboxField(number, label, key, options, settings) {
    return Object.assign(
      {
        number: number,
        label: label,
        key: key,
        type: "checkbox",
        options: options,
      },
      settings || {}
    );
  }

  function createElement(tag, className) {
    const node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    return node;
  }

  function defaultPlaceholder(type) {
    if (type === "email") {
      return "you@company.com";
    }

    if (type === "url") {
      return "https://";
    }

    return "Type your answer";
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
})();
