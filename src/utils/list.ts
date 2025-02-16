import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const navList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
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
    network: {
      name: "Manta Pacific",
      color: "bg-blue-600",
    },
    url: "https://github.com/yebology/roomie-summary.git",
    job: [
      "Deployed and developed end-to-end smart contract logic, including ERC-1155 token system using Foundry (Solidity).",
      "Connected smart contract ABIs and REST APIs with the frontend on several key areas.",
      "Integrated Reown (wallet provider) for seamless wallet interaction.",
    ],
    skills: [
      "Solidity",
      "Foundry",
      "TypeScript",
      "Ethers.js",
      "Pinata",
      "Reown",
      "Layer-2",
    ],
  },
  {
    name: "BlocEstate",
    description: "Web3 Real Estate Auction Platform in Indonesia",
    network: {
      name: "ICP",
      color: "bg-green-600",
    },
    url: "https://github.com/yebology/blocestate-summary.git",
    job: [
      "Connected end-to-end canister (smart contract) IDLs to the frontend via Agent.js.",
      "Built the auction creation page using React (JavaScript) and TailwindCSS.",
      "Integrated Plug Wallet for seamless transactions and Pinata IPFS for digital asset management.",
    ],
    skills: ["TypeScript", "React", "Agent.js", "Pinata", "Plug Wallet"],
  },
  {
    name: "EcoChain",
    description:
      "Web3 Platform for Converting Waste into $RCYCL Tokens to Purchase NFTs",
    network: {
      name: "Ethereum",
      color: "bg-yellow-400",
    },
    url: "https://github.com/yebology/ecochain-summary.git",
    job: [
      "Deployed and developed end-to-end smart contract logic, including ERC-20 and ERC-721 token systems using Foundry (Solidity).",
      "Built end-to-end fullstack application with React (TypeScript), TailwindCSS, and Ethers.js",
      "Integrated WalletConnect (wallet provider) for seamless wallet interaction.",
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
];
