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
    role: "Fullstack Engineer",
    type: "Internship",
    color: "border-green-600",
    company: "Vallidge Consulting",
    country: "Singapore",
    period: "Mar 2026 - Present",
    jobdesc: [
      "Implemented an automated trading bot using the Bollinger Bands strategy, with control APIs and background execution built using FastAPI and trade persistence managed via Django ORM backed by MariaDB.",
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
      "Built an end-to-end IoT management platform using Next.js, TypeScript, Golang (Fiber), GORM, and PostgreSQL, supporting real-time device monitoring, control, and user management similar to ThingsBoard.",
      "Implemented CI/CD pipelines using GitHub Actions to build Docker images and deploy services to a VPS, reducing manual release steps.",
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
    role: "Backend Engineer & QA Trainee",
    type: "Contract",
    color: "border-indigo-600",
    company: "axrail.ai",
    country: "Malaysia",
    period: "Jan 2026 - Apr 2026",
    jobdesc: [
      "Developed and deployed serverless applications using Python across 10+ AWS services, including AWS Lambda, API Gateway, DynamoDB, Bedrock, and S3, with infrastructure provisioned via AWS CDK.",  
      "Conducted performance testing using k6 (smoke, load, stress, volume), validating system performance improvements of up to 87% latency reduction and 68% throughput increase, including significant reduction in error rates.",
      "Automated 180+ test scenarios using AI-assisted testing (MCP Playwright in Kiro), improving test coverage and execution efficiency."
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
      "Delivered an end-to-end PWA for one of the largest golf courses in East Java, Indonesia, focusing on weekly and daily reporting management for foremen and supervisors, using Next.js, TypeScript, Golang (Fiber), GORM, and PostgreSQL.",
      "Implemented CI/CD pipelines using GitHub Actions to build Docker images and deploy services to a VPS, reducing manual release steps.",
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
      "Developed the core backend systems for a supermarket in Tulungagung, handling authentication, custom middleware, attendance, and transactions using Golang (Fiber), GORM, and PostgreSQL.",
      "Managed end-to-end development using Docker, enabling consistent environments and easier maintenance.",
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
      "Led project planning and coordination for final challenge aimed at helping musculoskeletal therapy patients adhere to physiotherapist-prescribed home exercise programs, utilizing GitHub Projects for task management.",
      "Designed and developed the end-to-end backend system for the final challenge project using Golang (Fiber), GORM, and PostgreSQL.",
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
    name: "NusaHub",
    description:
      "Web3 Crowdfunding Platform Connecting Indonesian Game Developers with Global Investors through Milestone-Based Funding and Anti-Fraud Investor Voting.",
    type: "Team Project",
    network: {
      name: "Ethereum",
      color: "bg-yellow-600",
    },
    url: "https://github.com/NusaHub",
    job: [
      "Built DAO-governed, UUPS, milestone-based, anti-fraud crowdfunding smart contracts using Foundry (Solidity).",
      "Enabled secure wallet access and frontend interaction with on-chain smart contracts using Xellar & Wagmi.",
    ],
    skills: ["Foundry (Solidity)", "Layer-2", "TypeScript", "Wagmi", "Xellar"],
  },
  {
    name: "BlocEstate",
    description: "Web3 Real Estate Auction Platform in Indonesia",
    type: "Team Project",
    network: {
      name: "ICP",
      color: "bg-green-600",
    },
    url: "https://github.com/yebology/blocestate-summary.git",
    job: [
      "Won 2nd Place in Codefest ICP Hub Indonesia 7.0",
      "Enabled secure wallet authentication and frontend interaction with on-chain smart contracts on ICP for a decentralized real estate auction platform in Indonesia using Plug Wallet & Agent.js.",
    ],
    skills: ["JavaScript", "React", "Agent.js", "Pinata", "Plug Wallet"],
  },
  {
    name: "BlocTenderID",
    description:
      "A DAO & AI-Powered Platform for Nepotism-Free Government Procurement",
    type: "Team Project",
    network: {
      name: "Optimism",
      color: "bg-red-600",
    },
    url: "https://github.com/garuda-hacks-6-ucs",
    job: [
      "Selected as a Top 7 Finalist at GarudaHacks 6.0 Hackathon.",
      "Built DAO-governed ERC-721 smart contracts for an anti-nepotism platform using Foundry (Solidity).",
      "Enabled secure wallet access and frontend interaction with on-chain smart contracts using Xellar & Wagmi.",
    ],
    skills: ["Foundry (Solidity)", "Layer-2", "TypeScript", "Wagmi", "Xellar"],
  },
  {
    name: "NusaQuest",
    description:
      "Web3 Impact-To-Earn Platform That Powered By AI And DAO That Rewards Indonesia River Cleanups With NUSA Tokens, Redeemable For NFT Concert Tickets.",
    type: "Personal Project",
    network: {
      name: "Lisk",
      color: "bg-gray-600",
    },
    url: "https://github.com/NusaQuest",
    job: [
      "Handled end-to-end Web3 development: blockchain, REST API (Golang + OpenAI integration), and React frontend.",
      "Developed DAO-governed ERC-1155 smart contracts using Foundry (Solidity).",
      "Enabled secure wallet access and frontend interaction with on-chain contracts via Xellar & Wagmi.",
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
    name: "Survz",
    description: "Web3 Platform Bridging Survey Creators and Respondents",
    type: "Personal Project",
    network: {
      name: "Solana",
      color: "bg-purple-600",
    },
    url: "https://github.com/yebology/survz-dapp.git",
    job: [
      "Delivered a seamless Web3 experience by integrating Solana Web3.js and developing the full frontend using React (TypeScript).",
      "Built end-to-end smart contracts on Solana using Anchor (Rust) for a decentralized Web3 survey platform.",
    ],
    skills: ["Rust", "Anchor", "TypeScript", "React", "Solana web3.js"],
  },
  {
    name: "Roomie",
    description: "Web3 AI-powered Accommodation Booking Platform",
    type: "Team Project",
    network: {
      name: "Manta Pacific",
      color: "bg-blue-600",
    },
    url: "https://github.com/LouisFernando1204/roomie-dapp",
    job: [
      "Ensured efficient token management using ERC-1155 with Foundry (Solidity).",
      "Enhanced UX by seamlessly connected ABIs with the frontend via Ethers.js.",
      "Enabled secure and frictionless wallet interaction by integrated Reown.",
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
    name: "EcoChain",
    description:
      "Web3 Platform for Converting Waste into $RCYCL Tokens to Purchase NFTs",
    type: "Personal Project",
    network: {
      name: "Ethereum",
      color: "bg-yellow-400",
    },
    url: "https://github.com/yebology/ecochain-dapp.git",
    job: [
      "Ensured efficient token management using ERC-20-721 with Foundry (Solidity).",
      "Enhanced UX by building a fullstack web platform and integrating Ethers.js.",
      "Enabled secure and frictionless wallet interaction by integrated WalletConnect.",
    ],
    skills: [
      "Foundry (Solidity)",
      "TypeScript",
      "React",
      "Ethers.js",
      "WalletConnect",
    ],
  },
  {
    name: "Book-Verse",
    description: "Web3 Platform Bridging Book Authors and Readers",
    type: "Team Project",
    network: {
      name: "ICP",
      color: "bg-green-600",
    },
    url: "https://github.com/yebology/bookverse-dapp.git",
    job: [
      "Improved platform efficiency by designing smart contract using Motoko.",
      "Secure transactions and streamlined asset management with Internet Identity and Pinata IPFS.",
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
