import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Radio: {
      defaultProps: {
        colorScheme: "messenger",
      },
    },
  },
  fonts: {
    heading: `Manrope, Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
    bolder: 800,
  },
  colors: {
    gray: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
    purple: {
      600: "#8B5CF6",
    },
    red: {
      600: "#EF4444",
    },
    green: {
      600: "#22C55E",
    },
  },
});

export default theme;
