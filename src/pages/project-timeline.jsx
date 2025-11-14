import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./project-timeline.css";

const timelineContent = [
  {
    year: "2024",
    descriptor: "Planning foundation",
    sections: [
      {
        id: "planning",
        title: "Aug–Dec 2024 — Planning & Permits",
        timeframe: "Aug–Dec 2024",
        icon: "blueprint",
        status: "completed",
        items: [
          "Architectural redesign",
          "Variance application",
          "Permit preparation and submission",
          "Contractor & subcontractor selection",
        ],
      },
    ],
  },
  {
    year: "2025",
    descriptor: "Construction momentum",
    sections: [
      {
        id: "preconstruction",
        title: "Jan–Mar 2025 — Pre-Construction",
        timeframe: "Jan–Mar 2025",
        icon: "clipboard",
        status: "completed",
        items: [
          "Final engineering",
          "Material planning",
          "Project scheduling",
        ],
      },
      {
        id: "demo",
        title: "Apr–May 2025 — Demo & Foundation Work",
        timeframe: "Apr–May 2025",
        icon: "demolition",
        status: "completed",
        items: [
          "Interior demolition",
          "Structural repairs",
          "New footings and masonry",
        ],
      },
      {
        id: "framing",
        title: "Jun 2025 — Framing",
        timeframe: "Jun 2025",
        icon: "framing",
        status: "completed",
        items: [
          "First-floor reconfiguration",
          "Second-floor addition framed",
          "Roof tie-ins completed",
        ],
      },
      {
        id: "mechanical",
        title: "Jul–Aug 2025 — Mechanical Rough-ins",
        timeframe: "Jul–Aug 2025",
        icon: "mechanical",
        status: "in-progress",
        items: [
          "Electrical rough-in",
          "Plumbing rough-in",
          "HVAC rough-in",
          "Steam shower framing",
        ],
      },
      {
        id: "inspections",
        title: "Fall 2025 — Inspections",
        timeframe: "Fall 2025",
        icon: "inspection",
        status: "upcoming",
        items: [
          "Nov 12, 2025 — Rough-in plumbing PASSED",
          "Electrical & HVAC inspections",
        ],
      },
      {
        id: "insulation",
        title: "Nov–Dec 2025 — Insulation",
        timeframe: "Nov–Dec 2025",
        icon: "insulation",
        status: "upcoming",
        items: [
          "Mineral wool installation (R-18 + secondary layer)",
          "Sound/fire insulation",
          "Air sealing",
        ],
      },
    ],
  },
  {
    year: "2026",
    descriptor: "Upcoming finishes",
    sections: [
      {
        id: "finishes",
        title: "2026 (Upcoming)",
        timeframe: "2026",
        icon: "finishes",
        status: "upcoming",
        items: [
          "Drywall, flooring, tilework, cabinetry, paint, trim, CO inspection",
        ],
      },
    ],
  },
];

const statusLabels = {
  completed: "Completed",
  "in-progress": "In progress",
  upcoming: "Upcoming",
};

const Icon = ({ type }) => {
  const sharedProps = {
    viewBox: "0 0 24 24",
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true",
  };

  const icons = {
    blueprint: (
      <svg {...sharedProps}>
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="#222" fill="none" strokeWidth="1.5" />
        <path d="M8 8h8v8H8z" stroke="#222" strokeWidth="1.5" fill="none" />
        <path d="M8 12h4" stroke="#222" strokeWidth="1.5" />
      </svg>
    ),
    clipboard: (
      <svg {...sharedProps}>
        <rect x="6" y="5" width="12" height="15" rx="2" stroke="#222" fill="none" strokeWidth="1.5" />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="#222" fill="none" strokeWidth="1.5" />
        <path d="M9 11h6M9 15h5" stroke="#222" strokeWidth="1.5" />
      </svg>
    ),
    demolition: (
      <svg {...sharedProps}>
        <path d="M5 19l14-14" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 5l-1.5 3L6 9.5" stroke="#222" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="8" r="2" stroke="#222" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    framing: (
      <svg {...sharedProps}>
        <rect x="5" y="5" width="14" height="14" stroke="#222" fill="none" strokeWidth="1.5" />
        <path d="M5 9h14M9 5v14" stroke="#222" strokeWidth="1.5" />
      </svg>
    ),
    mechanical: (
      <svg {...sharedProps}>
        <circle cx="12" cy="12" r="5" stroke="#222" strokeWidth="1.5" fill="none" />
        <path d="M12 7V5M12 19v-2M7 12H5M19 12h-2M8.5 8.5l-1.4-1.4M16.9 17l-1.4-1.4M8.5 15.5l-1.4 1.4M16.9 7l-1.4 1.4" stroke="#222" strokeWidth="1.4" />
      </svg>
    ),
    inspection: (
      <svg {...sharedProps}>
        <circle cx="11" cy="11" r="5" stroke="#222" strokeWidth="1.5" fill="none" />
        <path d="M14.5 14.5L19 19" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11l1.5 1.5L13 9" stroke="#222" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    insulation: (
      <svg {...sharedProps}>
        <rect x="6" y="5" width="12" height="14" stroke="#222" strokeWidth="1.5" fill="none" />
        <path d="M9 7v10M15 7v10" stroke="#222" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    finishes: (
      <svg {...sharedProps}>
        <path d="M5 15h14" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 10a5 5 0 0110 0v5H7z" stroke="#222" strokeWidth="1.5" fill="none" />
        <path d="M9 19h6" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };

  return <span className="timeline-icon">{icons[type] || icons.blueprint}</span>;
};

const ProjectTimelinePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateMatch = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  useEffect(() => {
    const nodes = cardRefs.current;
    if (!nodes.length || typeof IntersectionObserver === "undefined") {
      return () => {};
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [isMobile]);

  const registerCard = (node) => {
    if (node && !cardRefs.current.includes(node)) {
      cardRefs.current.push(node);
    }
  };

  const flatSections = useMemo(
    () => timelineContent.flatMap((year) => year.sections),
    []
  );

  const completedCount = useMemo(
    () => flatSections.filter((section) => section.status === "completed").length,
    [flatSections]
  );
  const inProgressCount = useMemo(
    () => flatSections.filter((section) => section.status === "in-progress").length,
    [flatSections]
  );
  const progressPercent = useMemo(() => {
    const total = flatSections.length || 1;
    const progressValue = completedCount + inProgressCount * 0.5;
    return Math.min(100, Math.round((progressValue / total) * 100));
  }, [flatSections.length, completedCount, inProgressCount]);

  const activePhase = useMemo(
    () =>
      flatSections.find((section) => section.status === "in-progress") ||
      flatSections.find((section) => section.status === "upcoming"),
    [flatSections]
  );

  return (
    <main className="project-timeline-page" aria-labelledby="timeline-title">
      <div className="timeline-shell">
        <header className="timeline-hero">
          <p className="timeline-eyebrow">🏡 25 Thomas St — Project Timeline</p>
          <h1 id="timeline-title">Renovation master schedule</h1>
          <p className="timeline-lede">
            Clean, chronological milestones for the 25 Thomas St overhaul. Track what is complete,
            what is in-flight, and what is queued next without any extra noise.
          </p>
          <Link to="/renders" className="timeline-back-link">
            ← Back to Renders
          </Link>
        </header>

        <section className="timeline-progress" aria-label="Overall phase progress">
          <div className="progress-meta">
            <div>
              <p className="progress-label">Phases delivered</p>
              <p className="progress-value">
                {completedCount}
                <span> / {flatSections.length}</span>
              </p>
            </div>
            <div className="progress-active">
              <p className="progress-label">Now tracking</p>
              <p className="progress-active-title">{activePhase?.title}</p>
            </div>
          </div>
          <div className="progress-track" role="img" aria-label={`Progress ${progressPercent} percent`}>
            <div className="progress-line" />
            <div className="progress-fill" style={{ "--progress": `${progressPercent}%` }} />
            <span className="progress-dot" style={{ "--progress": `${progressPercent}%` }} />
          </div>
        </section>

        <div className="timeline-body">
          <aside className="timeline-year-nav" aria-label="Jump to year">
            <div className="year-nav-inner">
              {timelineContent.map((block) => (
                <a key={block.year} href={`#year-${block.year}`} className="year-nav-link">
                  <span>{block.year}</span>
                </a>
              ))}
            </div>
          </aside>

          <div className="timeline-columns">
            {timelineContent.map((yearBlock) => (
              <section
                key={yearBlock.year}
                id={`year-${yearBlock.year}`}
                className="year-block"
                aria-label={`Milestones for ${yearBlock.year}`}
              >
                <div className="year-header">
                  <p className="year-label">{yearBlock.year}</p>
                  <p className="year-descriptor">{yearBlock.descriptor}</p>
                </div>

                <div className="year-sections">
                  {yearBlock.sections.map((section) => {
                    const detailProps = !isMobile ? { open: true } : {};
                    return (
                      <details
                        key={section.id}
                        className={`timeline-card status-${section.status}`}
                        {...detailProps}
                        ref={registerCard}
                      >
                        <summary>
                          <div className="card-heading">
                            <Icon type={section.icon} />
                            <div className="card-title-group">
                              <p className="card-period">{section.timeframe}</p>
                              <h3 className="card-title">{section.title}</h3>
                            </div>
                            <span className="status-chip">{statusLabels[section.status]}</span>
                          </div>
                        </summary>
                        <ul className="card-list">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </details>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectTimelinePage;
