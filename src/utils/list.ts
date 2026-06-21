import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export const navList = [
  { title: "Home", sectionId: "home" },
  { title: "Experience", sectionId: "experience" },
  { title: "Achievement", sectionId: "achievement" },
  { title: "Certification", sectionId: "certification" },
  { title: "Project", sectionId: "project" },
];

export const socialMedia = [
  {
    icon: IconBrandGithub,
    title: "Github",
    url: "https://github.com/yebology",
  },
  {
    icon: IconBrandLinkedin,
    title: "Linkedin",
    url: "https://linkedin.com/in/yobelnathanielfilipus",
  },
  {
    icon: IconMail,
    title: "Email",
    url: "https://mail.google.com/mail/?view=cm&to=yobelnathaniel12@gmail.com",
  },
  {
    icon: IconBrandInstagram,
    title: "Instagram",
    url: "https://instagram.com/yobelnathaniel01",
  },
];

export const experienceList = [
  {
    role: "Backend Engineer",
    type: "Contract",
    color: "border-indigo-600",
    company: "axrail.ai",
    country: "Malaysia",
    period: "Apr 2026 - Present",
    jobdesc: [
      "Built AI-powered tools on AWS (document generation, conversational assistant with email/drive integration) used by internal teams to automate daily workflows.",
      "Developed an automated mobile testing tools supporting both Android and iOS — used internally to streamline QA across axrail's product suite.",
    ],
    skills: ["Python", "Amazon Web Services (AWS)", "Amazon Bedrock", "AWS Lambda", "Amazon DynamoDB", "API Gateway", "Amazon S3"],
  },
  {
    role: "Fullstack Engineer",
    type: "Internship",
    color: "border-green-600",
    company: "Vallidge Consulting",
    country: "Singapore",
    period: "Mar 2026 - Present",
    jobdesc: [
      "Built 4 automated trading bots (Bollinger Bands, candlestick pattern, combined strategy, support/resistance) with control APIs and trade persistence for full history and analytics.",
    ],
    skills: ["FastAPI", "Django", "MariaDB"],
  },
    {
    role: "Software Engineer",
    type: "Contract",
    color: "border-indigo-600",
    company: "Liberty Tech",
    country: "USA",
    period: "Dec 2025 - Present",
    jobdesc: [
      "Built an AI-assisted IoT management platform — real-time monitoring, multi-tenant RBAC, and prompt-based dashboard generation.",
      "Set up CI/CD pipeline to production that auto-deploys on every push.",
    ],
    skills: [
      "Next.js (TypeScript)",
      "Golang (Fiber)",
      "GORM",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "VPS"
    ],
  },
  {
    role: "Backend Engineer Trainee",
    type: "Contract",
    color: "border-indigo-600",
    company: "axrail.ai",
    country: "Malaysia",
    period: "Jan 2026 - Apr 2026",
    jobdesc: [
      "Deployed serverless apps across 10+ cloud services with infrastructure-as-code using AWS infrastructure.",
      "Ran performance testing (smoke, load, stress, volume) — validated 87% latency reduction and 68% throughput increase after optimizations.",
      "Automated 180+ test scenarios using AI-assisted testing, significantly improving test coverage and execution speed.",
    ],
    skills: ["Python", "AWS CloudFormation", "AWS Lambda", "Amazon S3", "Amazon Bedrock", "AWS CodePipeline", "API Gateway", "Amazon DynamoDB", "Amazon Web Services (AWS)", "DVA-C02"],
  },
  {
    role: "Fullstack Developer",
    type: "Freelance",
    color: "border-pink-600",
    company: "Ciputra Golf Club & Hotel Surabaya",
    country: "Indonesia",
    period: "Dec 2025 - Apr 2026",
    jobdesc: [
      "Delivered a PWA replacing paper-based workflows at one of East Java's largest golf courses — used daily by foremen and supervisors for reporting.",
    ],
    skills: [
      "Next.js (TypeScript)",
      "Golang (Fiber)",
      "GORM",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "VPS",
    ],
  },
  {
    role: "Backend Developer",
    type: "Freelance",
    color: "border-pink-600",
    company: "Tokpin",
    country: "Indonesia",
    period: "Dec 2025 - Mar 2026",
    jobdesc: [
      "Built a containerized backend for a supermarket POS — handling auth, attendance, and transactions for daily operations.",
    ],
    skills: ["Golang (Fiber)", "GORM", "PostgreSQL", "Docker"],
  },
  {
    role: "Project Manager & Backend Developer",
    type: "Internship",
    color: "border-green-600",
    company: "Apple Developer Academy @UC",
    country: "Indonesia",
    period: "Mar 2025 - Dec 2025",
    jobdesc: [
      "Led a 5-person team building a physiotherapy adherence app — managed backlog and cross-functional coordination.",
      "Built the entire backend end-to-end: REST APIs, database design, business logic, and deployment.",
    ],
    skills: [
      "Golang (Fiber)",
      "GORM",
      "PostgreSQL",
      "GitHub Projects",
      "Project Management",
    ],
  },
];
import certifate from "../assets/certificate.jpeg";
import finalis from "../assets/finalis.jpeg";
import codefest_ig from "../assets/codefest_ig.png";
import photo_with_lecturer from "../assets/photo_with_lecturer.png";
import photo_with_lecturer_2 from "../assets/photo_with_lecturer_2.png";
import winner_photo_wsu from "../assets/winner_photo_wsu.jpeg";
import photo_with_judges_3 from "../assets/photo_with_judges_3.jpeg";
import terserah_team_photos from "../assets/terserah_team_photos.jpeg";
import scholarship_certificate from "../assets/scholarship_certificate.jpeg";

export const achievementList = [
    {
    title: "BlocTenderID - Top 7 Finalist of GarudaHacks 6.0 Hackathon",
    role: "Smart Contract & Web3 Integration Developer",
    contributions: [
      "Built DAO-governed ERC-721 smart contracts on Optimism (Ethereum L2) for an anti-nepotism blockchain-based public tender platform using Foundry (Solidity).",
      "Enabled secure wallet access and frontend interaction with on-chain smart contracts using Xellar & Wagmi.",
    ],
    references: [
      { label: "Finalist Announcement", url: "#" },
    ],
    images: [
      { src: finalis, alt: "Finalist Announcement" },
    ],
  },
  {
    title: "2nd Place in Codefest ICP Hub Indonesia Hackathon 7.0 (2024)",
    role: "Web3 Developer",
    contributions: [
      "Enhanced UX by seamlessly connected IDLs with the frontend via Agent.js.",
      "Secure transactions and streamlined asset management with Plug Wallet and Pinata IPFS.",
    ],
    references: [
      { label: "Instagram Post From Universitas Ciputra (Slide 2)", url: "https://www.instagram.com/p/DDWSw-bybzJ/" },
      { label: "Instagram Post From Codefest Indonesia (Slide 2)", url: "https://www.instagram.com/p/DCYu6fMzAoI/" },
      { label: "Winner Certificate", url: "https://drive.google.com/file/d/1fgkQQEl2YKP7gZ1k4PLUiSzHU0tn_dyU/view" },
    ],
    images: [
      { src: certifate, alt: "Certificate" },
      { src: photo_with_lecturer, alt: "Photo with lecturer" },
      { src: codefest_ig, alt: "Codefest IG" },
    ],
  },
  {
    title: "1st Place in AI For Impact Innovation Challenge Competition (2023)",
    role: "App Designer",
    contributions: [
      "Crafted an exceptional user experience through creative and innovative app design on A3 paper.",
    ],
    references: [
      { label: "Article on Kompas.com", url: "https://www.kompas.com/edu/read/2023/11/13/094059871/wsu-hadirkan-launch-pad-dorong-inovasi-pelajar-dan-mahasiswa-di-surabaya" },
      { label: "Instagram Post From Universitas Ciputra (Slide 1)", url: "https://www.instagram.com/p/C2EGCYFht-c/" },
      { label: "Winner Certificate", url: "https://drive.google.com/file/d/1h7alWPpnG8YCevk7t-HIwhk9ScdwRQ7I/view" },
    ],
    images: [
      { src: winner_photo_wsu, alt: "Winner photo" },
      { src: photo_with_lecturer_2, alt: "Photo with lecturer" },
    ],
  },
  {
    title: "3rd Place in UC Venture Startup Games Competition (2022)",
    role: "App Designer",
    contributions: [
      "Crafted an exceptional user experience through creative and innovative app design on A3 paper.",
    ],
    references: [
      { label: "Winner Certificate", url: "https://drive.google.com/file/d/1Vd7nJvJRUzimlYEQB0bLNKkizn-xyyzA/view" },
    ],
    images: [
      { src: terserah_team_photos, alt: "Team photo" },
      { src: photo_with_judges_3, alt: "Photo with judges" },
    ],
  },
  {
    title: "Fully Funded 'Star' Scholarship Recipient (2022)",
    role: "",
    contributions: [
      "Awarded a full-tuition scholarship for a four-year undergraduate program at Universitas Ciputra Surabaya and consistently maintained a GPA above 3.5.",
    ],
    references: [
      { label: "Recipient Statement Letter", url: "https://drive.google.com/file/d/19BwmV4WZB6zzz6uM-VKDr9tyMBfn-knU/view" },
    ],
    images: [
      { src: scholarship_certificate, alt: "Scholarship certificate" },
    ],
  },
];

export const projectList = [
  {
    name: "Mercenary",
    description:
      "AI agent marketplace — hire agents, pay per-call with crypto, control spending with delegation. Fully gasless.",
    type: "Personal Project",
    network: {
      name: "Base",
      color: "bg-blue-500",
    },
    url: "https://github.com/yebology/mercenary",
    job: [
      "Built a multi-agent orchestration engine — user asks a question, system picks the right agents and pays each per-call via x402.",
      "Implemented ERC-7710 delegation so users set spending budgets with one signature — capped per-call, per-day, revocable anytime.",
      "All payments gasless via 1Shot API and all AI reasoning private via Venice AI (zero data retention).",
    ],
    skills: [
      "Next.js (TypeScript)",
      "MetaMask Delegation Toolkit",
      "x402 Protocol",
      "1Shot API",
      "Venice AI",
      "Base",
      "ERC-7710",
      "Solidity",
    ],
  },
  {
    name: "KirimPay",
    description:
      "Programmable remittance that saves Indonesian migrant workers Rp14T+/year in fees — with auto-split savings, on-chain credit scoring, and AI-timed transfers.",
    type: "Personal Project",
    network: {
      name: "Stellar",
      color: "bg-indigo-500",
    },
    url: "https://github.com/yebology/kirimpay",
    job: [
      "Wrote 4 smart contracts handling auto-split payments, credit scoring, time-locked savings, and AI-timed escrow execution.",
      "Built the backend with rate monitoring that tracks MYR→IDR daily and triggers transfers at optimal timing.",
      "Implemented ZK privacy so employers can't see how much workers send home — protecting against salary manipulation.",
    ],
    skills: [
      "Soroban (Rust)",
      "Python (FastAPI)",
      "Next.js (TypeScript)",
      "PostgreSQL",
      "Stellar",
      "Docker",
      "x402 Protocol",
      "ZK Privacy",
    ],
  },
  {
    name: "Tuskbase",
    description:
      "AI research agent with verifiable reports — searches up to 20 real sources, generates a PDF, and records proof on Sui so anyone can verify.",
    type: "Personal Project",
    network: {
      name: "Sui",
      color: "bg-sky-500",
    },
    url: "https://github.com/yebology/tuskbase",
    job: [
      "Built a research pipeline: searches up to 20 sources, extracts key facts with trust scoring, and generates a PDF report.",
      "Stored reports on decentralized storage and recorded the hash on-chain — anyone can verify authenticity.",
      "Integrated blockchain data queries so the agent can answer both research and on-chain questions.",
    ],
    skills: [
      "Hono (TypeScript)",
      "Move (Sui)",
      "Next.js (TypeScript)",
      "OpenAI",
      "Walrus",
      "MemWal",
      "Tatum RPC",
      "Tatum MCP",
      "Tavily API",
      "PDFKit",
      "PostgreSQL",
    ],
  },
  {
    name: "Killswitch",
    description:
      "The emergency stop button DeFi is missing — detects exploits in real-time and auto-pauses protocols before funds are drained.",
    type: "Personal Project",
    network: {
      name: "Solana",
      color: "bg-purple-600",
    },
    url: "https://github.com/yebology/killswitch",
    job: [
      "Built a real-time monitoring service that evaluates every transaction against configurable rules with sub-second detection latency.",
      "Developed a smart contract circuit breaker that auto-pauses protocols when the Sentinel flags danger.",
      "Implemented multi-signal escalation — 2+ rules triggering simultaneously auto-escalates to CRITICAL with instant Telegram alerts.",
    ],
    skills: [
      "Python (FastAPI)",
      "Anchor (Rust)",
      "Next.js (TypeScript)",
      "PostgreSQL",
      "Solana",
      "Docker",
      "WebSocket",
      "Telegram Bot API",
    ],
  },
  {
    name: "Miora AI",
    description:
      "On-chain trading reputation that scores wallets and lets AI bots copy-trade the best performers autonomously.",
    type: "Personal Project",
    network: {
      name: "Base",
      color: "bg-blue-500",
    },
    url: "https://github.com/yebology/miora-ai",
    job: [
      "Built a scoring engine that analyzes wallet trade history using FIFO PnL matching and publishes reputation scores on-chain.",
      "Developed two AI trading bots: one mirrors a top wallet, one aggregates consensus from multiple high-scorers before executing trades.",
    ],
    skills: [
      "Next.js (TypeScript)",
      "Golang (Fiber)",
      "Python (FastAPI)",
      "Coinbase AgentKit",
      "EAS",
      "PostgreSQL",
      "Docker",
      "Google Gemini",
    ],
  },
  {
    name: "NusaHub",
    description:
      "Crowdfunding for Indonesian game devs where investors vote on milestones — funds only release when the team delivers.",
    type: "Team Project",
    network: {
      name: "Ethereum",
      color: "bg-yellow-600",
    },
    url: "https://github.com/NusaHub",
    job: [
      "Designed upgradeable smart contracts where funds release only after investors vote a milestone is complete — preventing rug pulls.",
      "Integrated embedded wallet so users interact with contracts without managing private keys.",
    ],
    skills: ["Foundry (Solidity)", "Layer-2", "TypeScript", "Wagmi", "Xellar"],
  },
  {
    name: "BlocEstate",
    description:
      "Decentralized real estate auction platform — bringing transparency to Indonesia's property market through on-chain bidding.",
    type: "Team Project",
    network: {
      name: "ICP",
      color: "bg-green-600",
    },
    url: "https://github.com/yebology/blocestate-summary.git",
    job: [
      "🏆 Won 2nd Place at Codefest ICP Hub Indonesia 7.0.",
      "Connected smart contracts to the frontend — enabling real-time bidding, auction creation, and ownership transfer without page reloads.",
      "Integrated one-click wallet authentication and decentralized storage for property images with on-chain references.",
    ],
    skills: ["JavaScript", "React", "Agent.js", "Pinata", "Plug Wallet"],
  },
  {
    name: "BlocTenderID",
    description:
      "Anti-nepotism government procurement — DAO voting ensures contracts go to the best bidder, not the best connection.",
    type: "Team Project",
    network: {
      name: "Optimism",
      color: "bg-red-600",
    },
    url: "https://github.com/garuda-hacks-6-ucs",
    job: [
      "🏆 Top 7 Finalist at GarudaHacks 6.0 (500+ participants).",
      "Built ERC-721 smart contracts where each tender proposal is a unique NFT — DAO members vote on-chain, making selection auditable.",
      "Integrated embedded wallet so government officials can participate without crypto expertise.",
    ],
    skills: ["Foundry (Solidity)", "Layer-2", "TypeScript", "Wagmi", "Xellar"],
  },
  {
    name: "NusaQuest",
    description:
      "Clean rivers, earn rewards — AI verifies cleanup actions and rewards participants with tokens redeemable for NFT concert tickets.",
    type: "Personal Project",
    network: {
      name: "Lisk",
      color: "bg-gray-600",
    },
    url: "https://github.com/NusaQuest",
    job: [
      "Built the full stack solo: smart contracts for token rewards, REST API with AI for verifying cleanup photos, and frontend.",
      "Designed a DAO governance model where token holders vote on which cleanup events qualify — preventing fake submissions.",
    ],
    skills: [
      "Foundry (Solidity)",
      "Layer-2",
      "Golang",
      "OpenAI API",
      "Xellar",
      "Wagmi",
    ],
  },

  {
    name: "Roomie",
    description:
      "AI-powered accommodation booking with tokenized room access — book, pay, and check-in entirely on-chain.",
    type: "Team Project",
    network: {
      name: "Manta Pacific",
      color: "bg-blue-600",
    },
    url: "https://github.com/LouisFernando1204/roomie-dapp",
    job: [
      "Designed contracts where each room type is a token — booking = minting, check-in = burning, trustless access without intermediaries.",
      "Connected smart contracts to the frontend with real-time availability updates and seamless wallet connection across devices.",
    ],
    skills: [
      "Foundry (Solidity)",
      "Layer-2",
      "TypeScript",
      "Ethers.js",
      "Reown",
    ],
  },

  {
    name: "Book-Verse",
    description:
      "Direct author-to-reader publishing — writers mint books as digital assets, readers truly own what they buy.",
    type: "Team Project",
    network: {
      name: "ICP",
      color: "bg-green-600",
    },
    url: "https://github.com/yebology/bookverse-dapp.git",
    job: [
      "Wrote smart contracts for book minting, ownership transfer, and royalty distribution — authors earn automatically on every resale.",
      "Integrated passwordless auth and decentralized storage for book content with on-chain ownership records.",
    ],
    skills: ["Motoko", "TypeScript", "Internet Identity"],
  },
];

export const certificationList = [
  {
    name: "AWS Certified Developer – Associate (DVA-C02)",
    issuer: "Amazon Web Services (AWS)",
    issued: "Feb 2026",
    expires: "Feb 2029",
    credentialId: "b7e7a145-4d18-4964-afff-785fa1d5a7f5",
    url: "https://www.credly.com/badges/b7e7a145-4d18-4964-afff-785fa1d5a7f5/public_url",
    badge: "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
  },
];
