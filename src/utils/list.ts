import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const navList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Achievement",
    url: "/achievement",
  },
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

export const projectList = [
  {
    name: "Roomie",
    description: "Web3 AI-powered Accommodation Booking Platform",
    type: "Team Project",
    network: {
      name: "Manta Pacific",
      color: "bg-blue-600",
    },
    url: "https://github.com/yebology/roomie-summary.git",
    job: [
      "Ensured efficient token management using ERC-1155 with Foundry (Solidity).",
      "Enhanced UX by seamlessly connected ABIs with the frontend via Ethers.js.",
      "Enabled secure and frictionless wallet interaction by integrated Reown.",
    ],
    skills: [
      "Solidity",
      "Foundry",
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
    url: "https://github.com/yebology/ecochain-summary.git",
    job: [
      "Ensured efficient token management using ERC-20-721 with Foundry (Solidity).",
      "Enhanced UX by building a fullstack web platform and integrating Ethers.js.",
      "Enabled secure and frictionless wallet interaction by integrated WalletConnect.",
    ],
    skills: [
      "Solidity",
      "Foundry",
      "TypeScript",
      "React",
      "Ethers.js",
      "WalletConnect",
    ],
  },
  {
    name: "Survz",
    description:
      "Web3 Platform Bridging Survey Creators and Respondents",
      type: "Personal Project",
    network: {
      name: "Solana",
      color: "bg-purple-600",
    },
    url: "https://github.com/yebology/survz-summary.git",
    job: [
      "Improved platform efficiency by designing smart contract using Anchor (Rust).",
      "Enhanced UX by building a fullstack web platform and integrating Solana web3.js.",
    ],
    skills: [
      "Rust",
      "Anchor",
      "TypeScript",
      "React",
      "Solana web3.js",
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
    url: "https://github.com/yebology/bookverse-summary.git",
    job: [
      "Improved platform efficiency by designing smart contract using Motoko.",
      "Secure transactions and streamlined asset management with Internet Identity and Pinata IPFS.",
    ],
    skills: ["Motoko", "TypeScript", "Internet Identity"],
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
      "Enhanced UX by seamlessly connected IDLs with the frontend via Agent.js.",
      "Secure transactions and streamlined asset management with Plug Wallet and Pinata IPFS.",
    ],
    skills: ["JavaScript", "React", "Agent.js", "Pinata", "Plug Wallet"],
  },
];