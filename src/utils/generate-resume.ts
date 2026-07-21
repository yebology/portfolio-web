import { jsPDF } from "jspdf";
import { resumeData } from "./resume-data";

/** Page layout constants (A4) */
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN_LEFT = 15;
const MARGIN_RIGHT = 15;
const MARGIN_TOP = 15;
const MARGIN_BOTTOM = 15;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

/** Font sizes */
const FONT_NAME = 18;
const FONT_CONTACT = 9;
const FONT_SECTION_HEADER = 10.5;
const FONT_ENTRY_TITLE = 10;
const FONT_BODY = 9.5;
const FONT_BULLET = 9.5;

/** Spacing */
const SPACE_AFTER_NAME = 4;
const SPACE_AFTER_CONTACT = 6;
const SPACE_BEFORE_SECTION = 7;
const SPACE_AFTER_SECTION_HEADER = 6;
const SPACE_BETWEEN_ENTRIES = 5;
const LINE_HEIGHT_BODY = 4.5;
const LINE_HEIGHT_BULLET = 4.2;
const BULLET_INDENT = 4;

/**
 * Generates and downloads an ATS-friendly PDF resume.
 */
export function downloadResume(): void {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = MARGIN_TOP;

  // --- Helpers ---

  const ensureSpace = (needed: number): void => {
    if (y + needed > PAGE_HEIGHT - MARGIN_BOTTOM) {
      doc.addPage();
      y = MARGIN_TOP;
    }
  };

  const drawSectionHeader = (title: string): void => {
    ensureSpace(SPACE_BEFORE_SECTION + 8);
    y += SPACE_BEFORE_SECTION;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT_SECTION_HEADER);
    doc.text(title.toUpperCase(), MARGIN_LEFT, y);
    y += 2;
    doc.setDrawColor(0);
    doc.setLineWidth(0.4);
    doc.line(MARGIN_LEFT, y, PAGE_WIDTH - MARGIN_RIGHT, y);
    y += SPACE_AFTER_SECTION_HEADER;
  };

  const drawWrapped = (
    text: string,
    fontSize: number,
    fontStyle: "normal" | "bold" | "italic" = "normal",
    indent: number = 0,
    lineHeight: number = LINE_HEIGHT_BODY
  ): void => {
    doc.setFont("helvetica", fontStyle);
    doc.setFontSize(fontSize);
    const maxWidth = CONTENT_WIDTH - indent;
    const lines: string[] = doc.splitTextToSize(text, maxWidth);
    ensureSpace(lines.length * lineHeight);
    for (const line of lines) {
      doc.text(line, MARGIN_LEFT + indent, y);
      y += lineHeight;
    }
  };

  const drawBullet = (text: string): void => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(FONT_BULLET);
    const maxWidth = CONTENT_WIDTH - BULLET_INDENT - 4;
    const lines: string[] = doc.splitTextToSize(text, maxWidth);
    ensureSpace(lines.length * LINE_HEIGHT_BULLET);
    // Draw bullet dot
    doc.circle(MARGIN_LEFT + BULLET_INDENT + 1, y - 1.2, 0.6, "F");
    for (let i = 0; i < lines.length; i++) {
      doc.text(lines[i], MARGIN_LEFT + BULLET_INDENT + 4, y);
      y += LINE_HEIGHT_BULLET;
    }
    y += 0.8;
  };

  const drawRoleLine = (left: string, right: string): void => {
    ensureSpace(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT_ENTRY_TITLE);
    doc.text(left, MARGIN_LEFT, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(FONT_BODY);
    doc.text(right, PAGE_WIDTH - MARGIN_RIGHT, y, { align: "right" });
    y += LINE_HEIGHT_BODY + 0.5;
  };

  const drawSubLine = (text: string): void => {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(FONT_BODY);
    doc.text(text, MARGIN_LEFT, y);
    y += LINE_HEIGHT_BODY + 1;
  };

  // === NAME (centered) ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(FONT_NAME);
  doc.text(resumeData.name, PAGE_WIDTH / 2, y, { align: "center" });
  y += SPACE_AFTER_NAME + 3;

  // === CONTACT (centered) ===
  doc.setFont("helvetica", "normal");
  doc.setFontSize(FONT_CONTACT);
  const contactStr = `${resumeData.contact.email}  |  ${resumeData.contact.linkedin}  |  ${resumeData.contact.github}`;
  doc.text(contactStr, PAGE_WIDTH / 2, y, { align: "center" });
  y += SPACE_AFTER_CONTACT;

  // === SUMMARY ===
  drawSectionHeader("Summary");
  drawWrapped(resumeData.summary, FONT_BODY, "normal", 0, LINE_HEIGHT_BODY);

  // === EXPERIENCES ===
  drawSectionHeader("Experiences");
  for (let i = 0; i < resumeData.experiences.length; i++) {
    const exp = resumeData.experiences[i];
    if (exp.jobdesc.length === 0) continue;

    drawRoleLine(exp.role, exp.period);
    drawSubLine(`${exp.company} - ${exp.country} | ${exp.type}`);

    for (const bullet of exp.jobdesc) {
      drawBullet(bullet);
    }

    if (i < resumeData.experiences.length - 1) {
      y += SPACE_BETWEEN_ENTRIES - 2;
    }
  }

  // === CERTIFICATION ===
  drawSectionHeader("Certification");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(FONT_ENTRY_TITLE);
  doc.text(resumeData.certification.name, MARGIN_LEFT, y);
  y += LINE_HEIGHT_BODY + 0.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(FONT_BODY);
  doc.text(
    `${resumeData.certification.issuer} | ${resumeData.certification.period}`,
    MARGIN_LEFT,
    y
  );
  y += LINE_HEIGHT_BODY;
  doc.setTextColor(0, 0, 180);
  doc.text(`Credential: ${resumeData.certification.credential}`, MARGIN_LEFT, y);
  doc.setTextColor(0, 0, 0);
  y += LINE_HEIGHT_BODY;

  // === SKILLS ===
  drawSectionHeader("Skills");
  for (const [category, skills] of Object.entries(resumeData.skills)) {
    ensureSpace(LINE_HEIGHT_BODY);
    // Draw bullet dot
    doc.circle(MARGIN_LEFT + BULLET_INDENT + 1, y - 1.2, 0.6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT_BODY);
    const label = `${category}: `;
    doc.text(label, MARGIN_LEFT + BULLET_INDENT + 4, y);
    const labelWidth = doc.getTextWidth(label);
    doc.setFont("helvetica", "normal");
    const skillLines: string[] = doc.splitTextToSize(
      skills,
      CONTENT_WIDTH - BULLET_INDENT - 4 - labelWidth
    );
    doc.text(skillLines[0], MARGIN_LEFT + BULLET_INDENT + 4 + labelWidth, y);
    y += LINE_HEIGHT_BODY;
    for (let i = 1; i < skillLines.length; i++) {
      doc.text(skillLines[i], MARGIN_LEFT + BULLET_INDENT + 4 + labelWidth, y);
      y += LINE_HEIGHT_BODY;
    }
    y += 1;
  }

  // === ACHIEVEMENTS ===
  drawSectionHeader("Achievements");
  for (const achievement of resumeData.achievements) {
    ensureSpace(LINE_HEIGHT_BULLET);
    const parts = achievement.split(" — ");
    const boldPart = parts[0];
    const normalPart = parts.length > 1 ? ` — ${parts[1]}` : "";
    // Draw bullet dot
    doc.circle(MARGIN_LEFT + BULLET_INDENT + 1, y - 1.2, 0.6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT_BULLET);
    doc.text(boldPart, MARGIN_LEFT + BULLET_INDENT + 4, y);
    const boldWidth = doc.getTextWidth(boldPart);
    doc.setFont("helvetica", "normal");
    doc.text(normalPart, MARGIN_LEFT + BULLET_INDENT + 4 + boldWidth, y);
    y += LINE_HEIGHT_BULLET + 0.8;
  }

  // === EDUCATION ===
  drawSectionHeader("Educational Background");
  drawRoleLine(resumeData.education.institution, resumeData.education.period);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(FONT_BODY);
  doc.text(
    `${resumeData.education.degree} | GPA: ${resumeData.education.gpa}`,
    MARGIN_LEFT,
    y
  );

  // === SAVE ===
  doc.save("Resume_Yobel_Nathaniel_Filipus.pdf");
}
