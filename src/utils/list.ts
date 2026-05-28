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
      "Building and maintaining internal backend services powering axrail's AI products.",
    ],
    skills: ["Python", "Amazon Web Services (AWS)"],
  },
  {
    role: "Fullstack Engineer",
    type: "Internship",
    color: "border-green-600",
    company: "Vallidge Consulting",
    country: "Singapore",
    period: "Mar 2026 - Present",
    jobdesc: [
      "Built automated trading bots using Bollinger Bands and candlestick patterns (Hammer, Shooting Star, Morning/Evening Star) with control APIs for start/stop/configure.",
      "Designed the trade persistence layer, enabling full trade history and performance analytics.",
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
      "Built a full IoT management platform (similar to ThingsBoard) — real-time device monitoring, remote control, and multi-tenant user management with role-based access.",
      "Set up automated deployment: code pushed to GitHub triggers builds and deploys to production — cutting manual release from 30+ minutes to zero-touch.",
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
      "Deployed serverless apps across 10+ cloud services with infrastructure-as-code.",
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
      "Delivered a PWA for one of the largest golf courses in East Java — used daily by foremen and supervisors for weekly/daily reporting, replacing paper-based workflows.",
      "Automated the deployment pipeline — code pushed triggers builds and deploys to production automatically, zero manual steps.",
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
      "Built the core backend for a supermarket POS system — authentication, attendance tracking, and transaction processing serving daily operations.",
      "Containerized the entire stack for consistent environments and simplified deployment.",
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
      "Led a 5-person team building a physiotherapy adherence app — managed sprints, backlog, and cross-functional coordination.",
      "Designed and built the backend from scratch: exercise scheduling, progress tracking, and therapist-patient data sync.",
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
      "Wrote 4 Soroban smart contracts (Rust): auto-split that divides every transfer to family/savings/bills, credit registry that scores users from remittance history, time-locked savings vault, and agentic escrow for AI-timed execution.",
      "Built the backend (Python + FastAPI) with rate monitoring that tracks MYR→IDR daily and triggers transfers at optimal timing via x402 protocol — zero manual effort after setup.",
      "Implemented ZK privacy so employers can't see how much workers send home — protecting against salary manipulation common among migrant workers.",
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
      "Built a deep research pipeline: agent searches up to 20 real sources, extracts 3-5 facts per source with trust scoring, and generates a professional PDF report.",
      "Stored PDF reports permanently on Walrus and recorded the report hash on Sui via Tatum RPC — anyone can verify the report hasn't been tampered with.",
      "Integrated Tatum MCP for on-chain data queries (token prices, wallet portfolios) alongside the research capabilities.",
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
      "Built a real-time monitoring service that evaluates every on-chain transaction against configurable rules — detects anomalies with sub-second latency before exploits drain funds.",
      "Developed an Anchor smart contract (Rust) that acts as a circuit breaker: when the Sentinel flags danger, it auto-pauses the target protocol on-chain.",
      "Implemented multi-signal escalation — if 2+ rules trigger simultaneously, severity auto-escalates to CRITICAL and fires instant Telegram alerts to protocol owners.",
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
      "Built a scoring engine that analyzes wallet trade history using FIFO PnL matching, then publishes reputation scores on-chain via EAS attestations — transparent and tamper-proof.",
      "Developed two AI trading bots: one that mirrors a single top wallet, and one that aggregates consensus from multiple high-scorers before executing trades autonomously via Coinbase AgentKit.",
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
      "Designed upgradeable (UUPS) smart contracts where funds release only after investors vote that a milestone is complete — preventing rug pulls common in indie game crowdfunding.",
      "Integrated Xellar embedded wallet so users can interact with smart contracts without managing private keys — lowering the Web3 barrier for non-crypto-native game devs.",
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
      "Connected ICP canisters to the React frontend via Agent.js — enabling real-time bidding, auction creation, and ownership transfer without page reloads.",
      "Integrated Plug Wallet for one-click authentication and Pinata IPFS for storing property images off-chain with on-chain references.",
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
      "Built ERC-721 smart contracts where each tender proposal is a unique NFT — DAO members vote on-chain, making the selection process auditable and bribe-resistant.",
      "Integrated Xellar embedded wallet so government officials can participate without crypto expertise.",
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
      "Built the full stack solo: ERC-1155 smart contracts for token rewards, Golang REST API with OpenAI integration for verifying cleanup photo submissions, and React frontend.",
      "Designed a DAO governance model where token holders vote on which cleanup events qualify — preventing fake submissions from gaming the reward system.",
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
      "Designed ERC-1155 contracts where each room type is a token — booking = minting, check-in = burning, enabling trustless room access without intermediaries.",
      "Connected smart contract ABIs to the frontend via Ethers.js with real-time availability updates and integrated Reown for seamless wallet connection across devices.",
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
      "Wrote Motoko smart contracts for book minting, ownership transfer, and royalty distribution — authors earn automatically on every resale.",
      "Integrated Internet Identity for passwordless auth and Pinata IPFS for storing book content off-chain while keeping ownership records on-chain.",
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
