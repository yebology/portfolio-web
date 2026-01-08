import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const navList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Experience",
    url: "/experience",
  },
  // {
  //   title: "Achievement",
  //   url: "/achievement",
  // },
  {
    title: "Project",
    url: "/project",
  },
];

export const socialMedia = [
  {
    icon: Github,
    title: "Github",
    url: "https://github.com/yebology",
  },
  {
    icon: Linkedin,
    title: "Linkedin",
    url: "https://linkedin.com/in/yobelnathanielfilipus",
  },
  {
    icon: Mail,
    title: "Email",
    url: "https://mail.google.com/mail/?view=cm&to=yobelnathaniel12@gmail.com",
  },
  {
    icon: Instagram,
    title: "Instagram",
    url: "https://instagram.com/yobelnathaniel01",
  },
];

export const experienceList = [
  {
    role: "AWS Trainee Dev",
    type: "Contract",
    color: "border-indigo-600",
    company: "axrail.ai",
    country: "Malaysia",
    period: "Jan 2026 - Mar 2026",
    jobdesc: [
      "Undertaking a 6-week intensive program to earn the AWS Developer Associate (DVA-C02) certification.",
      "Gained hands-on experience with key AWS services including Lambda, API Gateway, S3, DynamoDB, and IAM.",
    ],
    skills: ["AWS Developer Associate (DVA-C02)", "Lambda", "S3", "IAM"],
  },
  {
    role: "Full-Stack Dev",
    type: "Contract",
    color: "border-indigo-600",
    company: "Liberty Technology Solutions",
    country: "USA",
    period: "Dec 2025 - Present",
    jobdesc: [
      "Delivered an end-to-end website for real-time IoT device management using Next.js, TypeScript, Golang (Fiber), GORM, and PostgreSQL, enabling efficient monitoring and control of connected devices.",
      "Managed end-to-end development using Docker, enabling consistent environments and easier maintenance.",
    ],
    skills: [
      "Golang (Fiber)",
      "GORM",
      "PostgreSQL",
      "Docker",
      "Next.js (TypeScript)",
    ],
  },
  {
    role: "Full-Stack Dev",
    type: "Freelance",
    color: "border-pink-600",
    company: "Ciputra Golf Surabaya",
    country: "Indonesia",
    period: "Dec 2025 - Mar 2026",
    jobdesc: [
      "Delivered an end-to-end PWA for one of the largest golf courses in East Java, Indonesia, focusing on weekly and daily reporting management for foremen and supervisors, using Next.js, TypeScript, Golang (Fiber), GORM, and PostgreSQL.",
      "Managed end-to-end development and deployment using Docker on a VPS, enabling consistent environments and easier maintenance.",
    ],
    skills: [
      "Golang (Fiber)",
      "GORM",
      "PostgreSQL",
      "Docker",
      "Next.js (TypeScript)",
    ],
  },
  {
    role: "Backend Dev",
    type: "Freelance",
    color: "border-pink-600",
    company: "Tokpin",
    country: "Indonesia",
    period: "Dec 2025 - Feb 2026",
    jobdesc: [
      "Developed the core backend systems for a supermarket in Tulungagung, handling authentication, custom middleware features, store management, and transactions using Golang (Fiber), GORM, and PostgreSQL.",
      "Managed end-to-end development and deployment using Docker on a VPS, enabling consistent environments and easier maintenance.",
    ],
    skills: ["Golang (Fiber)", "GORM", "PostgreSQL", "Docker"],
  },
  {
    role: "PM & Backend Dev",
    type: "Internship",
    color: "border-green-600",
    company: "Apple Developer Academy @UC Cohort 2025",
    country: "Indonesia",
    period: "Mar 2025 - Dec 2025",
    jobdesc: [
      "Led project planning and coordination as Project Manager for the final challenge, focusing on helping musculoskeletal therapy patients complete physiotherapist-prescribed home exercises.",
      "Designed and developed the end-to-end backend system for the final challenge project using Golang (Fiber), GORM, and PostgreSQL, ensuring high performance and maintainable architecture.",
    ],
    skills: [
      "Project Management",
      "Team Building",
      "Leadership",
      "Golang (Fiber)",
      "GORM",
      "PostgreSQL",
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
    name: "Finuverse",
    description: "A Web3 Marketplace for Digital Finance Courses",
    type: "Personal Project",
    network: {
      name: "Solana",
      color: "bg-purple-600",
    },
    url: "https://github.com/yebology/finuverse-dapp.git",
    job: [
      "Delivered a seamless Web3 experience by integrating Solana Web3.js and developing the full frontend using React (TypeScript).",
      "Built end-to-end smart contracts on Solana using Anchor (Rust) for a decentralized Web3 survey platform.",
    ],
    skills: ["Rust", "Anchor", "TypeScript", "React", "Solana web3.js"],
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
  {
    name: "Crowdfy",
    description: "A Web3 Crowdfunding Platform",
    type: "Personal Project",
    network: {
      name: "Ethereum",
      color: "bg-yellow-400",
    },
    url: "https://github.com/yebology/crowdfy-dapp.git",
    job: [
      "Delivered a seamless Web3 experience by handling both blockchain and frontend layers",
      "Designed and developed smart contract end-to-end using Foundry (Solidity).",
      "Built the fullstack web platform and integrated Ethers.js to connect the frontend with on-chain smart contract.",
    ],
    skills: ["Foundry (Solidity)", "TypeScript", "React", "Ethers.js"],
  },
  {
    name: "EazyVote",
    description: "A Web3 Voting Platform",
    type: "Personal Project",
    network: {
      name: "Ethereum",
      color: "bg-yellow-400",
    },
    url: "https://github.com/yebology/eazyvote-dapp.git",
    job: [
      "Delivered a seamless Web3 experience by handling both blockchain and frontend layers",
      "Designed and developed smart contract end-to-end using Foundry (Solidity).",
      "Built the fullstack web platform and integrated Ethers.js to connect the frontend with on-chain smart contract.",
    ],
    skills: ["Foundry (Solidity)", "JavaScript", "React", "Ethers.js"],
  },
];
