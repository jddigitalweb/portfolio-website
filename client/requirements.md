## Packages
(none needed - required packages like framer-motion and react-hook-form are already in the base stack)

## Notes
Tailwind Config - extend fontFamily and colors:
theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)"],
      display: ["var(--font-display)"],
    },
    colors: {
      brand: {
        dark: "#021f53",
        orange: "#ff6500",
        yellow: "#ff9f1c",
        amber: "#f59e0b"
      }
    },
    backgroundImage: {
      'gradient-brand': 'linear-gradient(135deg, #ff6500 0%, #ff9f1c 100%)',
      'gradient-glow': 'radial-gradient(circle at center, rgba(255, 101, 0, 0.15) 0%, transparent 70%)',
    }
  }
}
