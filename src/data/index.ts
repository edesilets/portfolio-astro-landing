export const techStack: Record<string, string[]> = {
  "Languages": ["Python", "Go", "C/C++", "JavaScript", "PHP"],
  "Data & Messaging": ["PostgreSQL", "Kafka", "Redis", "InfluxDB", "MSSQL", "MQTT"],
  "Infrastructure": ["Docker", "Kubernetes", "Terraform", "Linux", "Cloudflare", "Wireguard"],
  "Cloud & Platforms": ["Google Cloud", "AWS", "FastAPI", "Node.js", "Grafana"],
  "Hardware": ["ESP32 / ESP8266", "Raspberry Pi", "Arduino", "KiCad", "I2C / SPI / CAN"],
};

export const hobbies = [
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 17l4-8 4 4 3-6 4 10"/><path d="M2 20h20"/></svg>`,
    name: "Hiking",
    detail: "Working the NH 48 four-thousand footers. Tracking via Garmin & Strava.",
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="10" width="10" height="4" rx="1"/><rect x="1" y="9" width="3" height="6" rx="1"/><rect x="20" y="9" width="3" height="6" rx="1"/><rect x="4" y="11" width="3" height="2" rx="0.5"/><rect x="17" y="11" width="3" height="2" rx="0.5"/></svg>`,
    name: "Bodybuilding",
    detail: "Consistent training and lifting. Fueled by patience and protein.",
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="9"/><path d="M12 3c2 3 3 6 3 9s-1 6-3 9"/><path d="M12 3c-2 3-3 6-3 9s1 6 3 9"/></svg>`,
    name: "Ham radio",
    detail: "Licensed operator. Enjoys RF experimentation and circuit design.",
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="17" r="3"/><circle cx="17" cy="18" r="2"/><path d="M10 17h5"/><path d="M19 18V13l-4-5H8v9"/><path d="M8 8V5h4"/><path d="M15 13H8"/></svg>`,
    name: "Farming",
    detail: "Growing bonsai, tending gardens, and operating heavy equipment.",
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="7" width="10" height="10" rx="1"/><line x1="9" y1="7" x2="9" y2="4"/><line x1="12" y1="7" x2="12" y2="4"/><line x1="15" y1="7" x2="15" y2="4"/><line x1="9" y1="17" x2="9" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/><line x1="15" y1="17" x2="15" y2="20"/><line x1="7" y1="9" x2="4" y2="9"/><line x1="7" y1="12" x2="4" y2="12"/><line x1="7" y1="15" x2="4" y2="15"/><line x1="17" y1="9" x2="20" y2="9"/><line x1="17" y1="12" x2="20" y2="12"/><line x1="17" y1="15" x2="20" y2="15"/></svg>`,
    name: "Microcontrollers",
    detail: "Raspberry Pi, ESP32, ESP8266, and Arduino — always a project on the bench.",
  },
];

export const education = [
  {
    school: "General Assembly",
    credential: "Web Development Immersive — full-stack certificate",
    note: null,
  },
  {
    school: "Quinsigamond Community College",
    credential: "Mechanical Drafting & CAD/CADD",
    note: "Graduated with honors",
  },
  {
    school: "Blackstone Valley Vocational Technical",
    credential: "Machine Shop & Metal Fabrication",
    note: null,
  },
  {
    school: "Commonwealth of Massachusetts",
    credential: "2A Hoisting License",
    note: "Licensed heavy equipment operator",
  },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/edesilets",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ethandesilets/",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: "Strava",
    href: "https://www.strava.com/athletes/16920867",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>`,
  },
  {
    label: "Garmin",
    href: "https://connect.garmin.com/app/profile/a624bd40-ba95-4b43-85ad-97e81321752e",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ethan_in_the_wild/",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  },
];
