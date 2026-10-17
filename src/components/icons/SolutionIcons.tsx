import type { ReactElement, SVGProps } from "react";
import type { HeroWatermarkIconId } from "@/content/heroContent";
import type { SolutionProcessStepIcon } from "@/content/solutionContent";

export type IconProps = Readonly<SVGProps<SVGSVGElement>>;
export type ProcessStepIconComponent = (props: IconProps) => ReactElement;
export type WatermarkIconComponent = (props: IconProps) => ReactElement;

export const solutionWatermarkIcons: Record<
  HeroWatermarkIconId,
  WatermarkIconComponent
> = {
  python: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3c-3.5 0-3.5 1.5-3.5 3v2h7v1H6.5C4.5 9 3 10.5 3 13s1.5 4 3.5 4H8v-2.5c0-1.5 1.2-2.5 2.7-2.5h4.6c1.2 0 2.2-1 2.2-2.2V6c0-1.5-1.5-3-5.5-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21c3.5 0 3.5-1.5 3.5-3v-2h-7v-1h9c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H16v2.5c0 1.5-1.2 2.5-2.7 2.5H8.7c-1.2 0-2.2 1-2.2 2.2V18c0 1.5 1.5 3 5.5 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="5.5" r="0.75" fill="currentColor" />
      <circle cx="14" cy="18.5" r="0.75" fill="currentColor" />
    </svg>
  ),

  javascript: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 11v5.2c0 1.1-.7 1.8-1.8 1.8-.8 0-1.3-.4-1.6-.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 12.2c-.3-.7-1-1.2-2-1.2-1.1 0-1.9.6-1.9 1.5 0 2 4 1.3 4 3.6 0 1.1-.9 1.9-2.2 1.9-1.1 0-1.9-.5-2.3-1.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  react: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.8"
        transform="rotate(60 12 12)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.8"
        transform="rotate(120 12 12)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),

  htmlTags: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 8L3.5 12L7.5 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8L20.5 12L16.5 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5L10.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  gear: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 2.75v2.1M12 19.15v2.1M4.75 4.75l1.48 1.48M17.77 17.77l1.48 1.48M2.75 12h2.1M19.15 12h2.1M4.75 19.25l1.48-1.48M17.77 6.23l1.48-1.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="6.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3.2 2.2"
      />
    </svg>
  ),

  nodes: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="6"
        cy="6"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="18"
        cy="8"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="11"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.4 6.5L15.6 7.6M7.2 8.2L9.9 15.7M16.5 10.1L12.5 15.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  dataFlow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h11m0 0-2.5-2.5M15 7l-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H9m0 0 2.5-2.5M9 12l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17h13m0 0-2.5-2.5M17 17l-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="7" r="1.25" fill="currentColor" />
      <circle cx="5" cy="12" r="1.25" fill="currentColor" />
    </svg>
  ),

  workflow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="4"
        width="5"
        height="5"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="15.5"
        y="4"
        width="5"
        height="5"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="9.5"
        y="15"
        width="5"
        height="5"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 6.5h7M6 9v3a2 2 0 0 0 2 2h1.5M18 9v3a2 2 0 0 1-2 2h-1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export const processStepIcons: Record<
  SolutionProcessStepIcon,
  ProcessStepIconComponent
> = {
  insights: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="10"
        cy="10"
        r="7"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <line
        x1="15"
        y1="15"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  design: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5l4 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  code: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 7.5L4.5 12L9 16.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7.5L19.5 12L15 16.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  rocket: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2s-2 4-2 8c0 3 2 5 2 5s2-2 2-5c0-4-2-8-2-8z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="9"
        r="1.3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 12l-3 3.5M7 15.5L5 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12l3 3.5M17 15.5l2 3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 17c-1 1.5-2 3-1.5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 17v-1M12 16v6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M15 17c1 1.5 2 3 1.5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  trend: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 16.5L9.2 11.8L13 15.6L19.5 9"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 9H19.5V12.7"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
