import { experienceList, skillsList } from "./list";

/**
 * Resume data for PDF generation.
 * Jobdesc is pulled from experienceList.
 * Skills are pulled from skillsList.
 * Everything else is hardcoded.
 */

export const resumeData = {
  name: "Yobel Nathaniel Filipus",
  contact: {
    email: "yobelnathaniel12@gmail.com",
    linkedin: "linkedin.com/in/yobelnathanielfilipus",
    github: "github.com/yebology",
  },

  summary:
    "Backend & AI/ML Engineer building AI-powered production systems on AWS. Shipped backend services, intelligent chatbots, and automated testing pipelines for companies across 4 countries (Indonesia, Malaysia, Singapore, USA). AWS Certified Developer – Associate (DVA-C02).",

  experiences: experienceList.map((exp) => ({
    role: exp.role,
    company: exp.company,
    country: exp.country,
    type: exp.type,
    period: exp.period,
    jobdesc: exp.jobdesc,
  })),

  certification: {
    name: "AWS Certified Developer – Associate (DVA-C02)",
    issuer: "Amazon Web Services",
    period: "Feb 2026 - Feb 2029",
    credential: "https://www.credly.com/badges/b7e7a145-4d18-4964-afff-785fa1d5a7f5/public_url",
  },

  skills: Object.fromEntries(
    skillsList.map((group) => [
      group.category,
      group.items.map((item) => item.name).join(", "),
    ])
  ),

  achievements: [
    "Top 7 Finalist — GarudaHacks 6.0 Hackathon, 2025",
    "2nd Place — Codefest ICP Hub Indonesia Hackathon 7.0, 2024",
    "1st Place — AI For Impact Innovation Challenge Competition, 2023",
    "3rd Place — UC Venture Startup Games Competition, 2022",
    "Full Scholarship — \"Star\" Scholarship Recipient, Universitas Ciputra Surabaya, 2022",
  ],

  education: {
    institution: "Universitas Ciputra Surabaya",
    period: "Sept 2022 - Oct 2026",
    degree: "Computer Science",
    gpa: "3.80/4.00",
  },
};
