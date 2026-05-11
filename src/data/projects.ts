export type Project = {
  slug: string;
  title: string;
  track: "work" | "maker";
  featured: boolean;
  summary: string;
  description: string;
  tags: string[];
  links?: { label: string; url: string }[];
  start_year: number | null;
  end_year: number | null;
};

export const projects: Project[] = [
  // ── WORK — featured ──────────────────────────────────────────────
  {
    slug: "data-replication-pipeline",
    title: "Data Replication Pipeline",
    track: "work",
    featured: true,
    summary:
      "MSSQL → Postgres regional replication leveraging Kafka for a high-throughput order processing system.",
    description:
      "Implemented a data replication pipeline that streams changes from a Microsoft SQL Server source into multiple regional PostgreSQL databases using Kafka as the transport layer. Enabled near-real-time regional reads while keeping a single authoritative write source.",
    tags: ["Kafka", "PostgreSQL", "MSSQL", "Python"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "wms",
    title: "WMS - Warehouse Management System",
    track: "work",
    featured: true,
    summary: "Built a warehouse management system for final-mile delivery operations.",
    description:
      "Designed and built a warehouse management system from scratch to support final-mile delivery workflows. Covered inbound receiving, inventory tracking, order fulfillment, and outbound dispatch.",
    tags: ["Backend", "Database design", "Python"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "repository-migration-tooling",
    title: "Repository Migration Tooling",
    track: "work",
    featured: true,
    summary: "Automated migration of all repositories from Stash to Bitbucket with full history.",
    description:
      "Authored a CLI migration tool that iterated over every repository in an on-premise Stash instance, preserved full git history, and pushed to Bitbucket Cloud. Handled edge cases around LFS objects and branch permissions.",
    tags: ["Git", "Python", "Bitbucket API"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "db-image-extraction",
    title: "DB Image Extraction & Migration",
    track: "work",
    featured: false,
    summary:
      "PHP script to extract employee images stored in MSSQL BLOBs and migrate them into Software House.",
    description:
      "Wrote a PHP script that connected to a legacy MSSQL database, read employee records, extracted images stored as binary blobs, normalized filenames to employee names, and re-imported them into the Software House access control system.",
    tags: ["PHP", "MSSQL"],
    start_year: null,
    end_year: null,
  },
  // ── WORK — non-featured ──────────────────────────────────────────
  {
    slug: "order-processing-refactor",
    title: "Order Processing Refactor",
    track: "work",
    featured: true,
    summary: "Refactored the order processing system for an e-commerce platform.",
    description:
      "Worked on refactoring and improving the order processing pipeline for all orders placed through an e-commerce website, improving reliability and throughput.",
    tags: ["Backend", "E-commerce"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "site-archiver",
    title: "Site crawler & archiver",
    track: "work",
    featured: false,
    summary: "Crawler that zipped entire sites for archiving purposes.",
    description:
      "Built a site crawler that recursively downloaded a website and packaged it into a zip archive for long-term storage and compliance archiving.",
    tags: ["Python", "Web scraping"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "sql-report-generation",
    title: "Telecoms SQL Report Generation",
    track: "work",
    featured: false,
    summary: "SQL queries generating reports for copper telephone cable removal projects.",
    description:
      "Wrote complex SQL queries against telecom infrastructure databases to produce reports used for planning and executing copper cable removal operations.",
    tags: ["SQL", "Reporting", "Telecom"],
    start_year: null,
    end_year: null,
  },
  // ── MAKER — featured ─────────────────────────────────────────────
  {
    slug: "greenhouse-environment-monitor",
    title: "Greenhouse Environment Monitor",
    track: "maker",
    featured: true,
    summary:
      "ESP32-C6 + DS18B20 reporting humidity and soil temperature to InfluxDB via Grafana dashboards.",
    description:
      "Designed and built an environmental monitoring system for a greenhouse using an Adafruit Feather ESP32-C6 paired with DS18B20 temperature sensors. Data flows over MQTT into InfluxDB and is visualized on Grafana.",
    tags: ["ESP32-C6", "InfluxDB", "Grafana", "MQTT", "C/C++"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "ups-snmp-metrics",
    title: "UPS Metrics via SNMP",
    track: "maker",
    featured: true,
    summary: "Polling APC UPS units over SNMP and surfacing power metrics on self-hosted Grafana.",
    description:
      "Set up SNMP polling against APC UPS units to collect voltage, load, battery health, and runtime metrics. Data flows into InfluxDB and is displayed on a Grafana dashboard for the home lab.",
    tags: ["SNMP", "Grafana", "InfluxDB", "Python"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "gps-ntp-server",
    title: "GPS NTP Time Server",
    track: "maker",
    featured: true,
    summary: "Raspberry Pi + GPS puck acting as a stratum-1 NTP source for the home network.",
    description:
      "Built a stratum-1 NTP server using a Raspberry Pi and a GPS puck. The GPS provides a highly accurate 1 PPS signal which is used to discipline the system clock, providing precise time to all devices on the home network.",
    tags: ["Raspberry Pi", "GPS NMEA", "NTP", "Linux"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "boiler-control-monitor",
    title: "Boiler Control & Monitor",
    track: "maker",
    featured: true,
    summary:
      "Custom microcontroller build monitoring boiler temperature, pressure, and relay outputs.",
    description:
      "Designed and wired a custom microcontroller-based system to monitor and control a home boiler. Tracks ambient temperature, boiler pressure, and relay states. Schematic designed in KiCad.",
    tags: ["Arduino", "C/C++", "KiCad", "Sensors"],
    start_year: null,
    end_year: null,
  },
  // ── MAKER — non-featured ─────────────────────────────────────────
  {
    slug: "room-thermometer",
    title: "Room Thermometer",
    track: "maker",
    featured: false,
    summary: "Microcontroller-based room temperature and humidity display.",
    description: "A small microcontroller build that reads temperature and humidity and displays it on a local screen.",
    tags: ["Arduino", "C/C++"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "basement-thermostat",
    title: "Basement Thermostat",
    track: "maker",
    featured: false,
    summary: "Ambient temperature and humidity monitor for the basement.",
    description: "Monitors basement ambient temperature and humidity, logging data for trend analysis.",
    tags: ["ESP32", "MQTT", "InfluxDB"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "carrera-lap-monitor",
    title: "Carrera Slot Car Lap Monitor",
    track: "maker",
    featured: false,
    summary: "Arduino-based lap timing system for a Carrera slot car track.",
    description: "Built a lap counter and timing system for a Carrera slot car set using an Arduino and IR sensors.",
    tags: ["Arduino", "C/C++"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "christmas-lights-controller",
    title: "Christmas Lights Controller",
    track: "maker",
    featured: false,
    summary: "Automated Christmas lights that turn on and off on a schedule.",
    description: "Microcontroller build that controls Christmas lights via relay on a time-based schedule.",
    tags: ["Arduino", "C/C++"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "air-conditioner-controller",
    title: "Air Conditioner Controller",
    track: "maker",
    featured: false,
    summary: "Custom controller for an air conditioning unit.",
    description: "Wired up a microcontroller to manage an air conditioner based on temperature thresholds.",
    tags: ["ESP32", "C/C++"],
    start_year: null,
    end_year: null,
  },
  {
    slug: "hubitat-home-automation",
    title: "Hubitat Home Automation",
    track: "maker",
    featured: false,
    summary: "IoT and home automation hub — lights turn on just before sunset.",
    description:
      "Configured and extended a Hubitat hub for whole-home automation including Zigbee devices, lighting scenes, and time-based rules.",
    tags: ["Hubitat", "Zigbee", "IoT"],
    start_year: null,
    end_year: null,
  },
];

export const featuredWork = projects.filter((p) => p.track === "work" && p.featured);
export const featuredMaker = projects.filter((p) => p.track === "maker" && p.featured);
export const allWork = projects.filter((p) => p.track === "work");
export const allMaker = projects.filter((p) => p.track === "maker");
export const allProjects = projects;
