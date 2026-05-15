export const colors = {
  // Page backgrounds
  "page-bg": "#0A0A0A", // Midnight Black
  surface: "#1C1C1C", // Soft Black
  "elevated-surface": "#242424",

  // Borders
  "border-default": "#2A2A2A",
  "border-hover": "#3A3A3A",

  // Text colors
  "text-primary": "#F5F5F5", // Off White
  "text-secondary": "#888888",
  "text-muted": "#555555",

  // Brand greens
  "green-primary": "#0B8F3A", // Deep Green
  "green-neon": "#00C853", // Neon Green
  "green-mint": "#2EF2A0", // Mint Glow
  "green-dark": "#14532D", // Dark Forest Green
  "green-tint-bg": "#0D1F14", // very dark green surface

  // Gold colors
  "gold-primary": "#C6A75E", // Muted Gold
  "gold-bright": "#FFD700", // Bright Gold

  // Neutral colors
  "off-white": "#F5F5F5",
  "light-grey": "#D9D9D9",
} as const;

export const typography = {
  fontFamily: "Inter, system-ui, sans-serif",
  weights: {
    regular: "400",
    medium: "500",
  },
  heading: {
    letterSpacing: "-0.02em",
    lineHeight: "1.0",
  },
  body: {
    lineHeight: "1.65",
    fontSize: "13px",
  },
  eyebrow: {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: colors["text-muted"],
  },
} as const;

export const spacing = {
  4: "4px",
  8: "8px",
  10: "10px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  48: "48px",
  64: "64px",
} as const;

export const borderRadius = {
  sm: "6px",
  md: "10px",
  lg: "14px",
  pill: "20px",
  circle: "50%",
} as const;
