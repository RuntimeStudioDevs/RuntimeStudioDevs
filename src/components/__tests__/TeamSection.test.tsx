import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TeamSection } from "@/components/landing/TeamSection";
import { teamContent } from "@/content/teamContent";

describe("TeamSection", () => {
  it("renders the section heading and badge", () => {
    render(<TeamSection />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain(teamContent.highlightedPart);
    expect(screen.getByText(teamContent.badge)).toBeTruthy();
  });

  it("renders all 4 team members with their roles and skills", () => {
    render(<TeamSection />);

    teamContent.members.forEach((member) => {
      expect(screen.getByText(member.name)).toBeTruthy();
      expect(screen.getByText(member.role)).toBeTruthy();
      expect(screen.getByText(member.specialty)).toBeTruthy();
      
      // Verify skills are present
      member.primarySkills.forEach((skill) => {
        expect(screen.getAllByText(skill).length).toBeGreaterThan(0);
      });
    });
  });

  it("renders github link for each member", () => {
    render(<TeamSection />);

    teamContent.members.forEach((member) => {
      const link = screen.getByLabelText(`Ver perfil de GitHub de ${member.name}`);
      expect(link).toBeTruthy();
      expect(link.getAttribute("href")).toBe(member.social.github);
    });
  });
});
