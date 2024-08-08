import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "app-gradient":
          "linear-gradient(191deg, #5831F5 2.5%, #101011 84.64%) !Important",
      },
      backgroundColor: {
        "light-gray":"#EEF2F6"
      },
      borderColor: {
        "lighter": "#606672",
      },
      fontFamily: {
        satoshi: ["satoshiRegular", "sans-serif"],
        satoshiBold: ["satoshiMedium", "sans-serif"],
      },
      fontSize: {
        "1": "11px",
        "2": "12px",
        "3": "13px",
        "4": "14px",
        "5": "17px",
        "6": "18px",
        "7": "20px",
        "8": "24px",
        "9": "28px",
        "10": "34px",
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
      },
      lineHeight: {
        "1": "14.3px",
        "2": "15.6px",
        "3": "16.9px",
        "4": "18.2px",
        "5": "23.8px",
        "6": "25.2px",
        "7": "26px",
        "8": "28.8px",
        "9": "33.6px",
        "10": "40.8px",
        "10.5": "52px",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      colors: {
        borderBlack: "#101011",
        borderDarker: "#393f49",
        borderExtraLight: "#e2e9f0",
        borderLighter: "#606672",
        borderWhite: "#ffffff",
        borderAccentMain: "#5831F5",
        errorLighter: "#daa19d",
        errorMain: "#a3150a",
        errorExtraLight: '#F7EAE9',
        iconError: "#a3150a",
        iconPrimary: "#101011",
        iconSecondary: "#393f49",
        iconTertiary: "#606672",
        iconInvertedPrimary: "#ffffff",
        iconInvertedSecondary: "#393f49",
        iconInvertedTertiary: "#606672",
        infoLighter: "#e1ecfe",
        infoMain: "#5831f5",
        successLighter: "#addfba",
        successMain: "#13A438",
        surfaceBlack: "#101011",
        surfaceBlackAlpha: "rgba(0,0,0,0.74)",
        surfaceDarker: "#393f49",
        surfaceExtraLight: "#B0B2B6",
        surfaceExtraDark: "#1D2025",
        surfaceGlass: "#ffffff8c",
        surfaceLighter: "#606672",
        surfaceWhite: "#ffffff",
        surfaceAccent: "#e2e9f099",
        surfaceAccentAlpha: "rgba(226, 233, 240, .6)",
        surfaceAccentDaker: "#200b7f",
        surfaceAccentLighter: "#e1ecfe",
        surfaceAccentMain: "#5831f5",
        surfaceAccentExtraLight: "#EEF2F6",
        surfaceError: '#F7EAE9',
        textError: "#a3150a",
        textErrorLighter: "#ff453a",
        textPlaceholder: "#393f49",
        textPrimary: "#101011",
        textSecondary: "#393f49",
        textTertiary: "#606672",
        textInvertedPlaceholder: "#606672",
        textInvertedPrimary: "#ffffff",
        textInvertedSecondary: "#B0B2B6",
        textInvertedTertiary: "#606672",
        warningLighter: "#cba170",
        warningMain: "#a86310",
      },
      spacing: {
        '-xxl': '-48px',
        '-xl': '-32px',
        '-lg': '-24px',
        '-md': '-16px',
        '-sm': '-12px',
        '-xs': '-8px',
        '-xxs': '-4px',
        none: '0px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
      },
      padding: {
        '-xxl': '-48px',
        '-xl': '-32px',
        '-lg': '-24px',
        '-md': '-16px',
        '-sm': '-12px',
        '-xs': '-8px',
        '-xxs': '-4px',
        none: '0px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
      },
      height: {
        xxs: '32px',
        xs: '36px',
        sm: '40px',
        md: '48px',
        lg: '56px',
        xl: '64px',
        xxl: '104px',
        xxxl: '128px',
      },
      width: {
        xxs: '32px',
        xs: '36px',
        sm: '40px',
        md: '48px',
        lg: '56px',
        xl: '64px',
        xxl: '104px',
        xxxl: '128px',
      },
      minWidth: {
        xxs: '32px',
        xs: '36px',
        sm: '40px',
        md: '48px',
        lg: '56px',
        xl: '64px',
        xxl: '104px',
        xxxl: '128px',
      },
      borderRadius: {
        none: '0px',
        xxs: '6px',
        xs: '8px',
        "sm": '12px',
        "md": '16px',
        lg: '20px',
        xl: '24px',
        xxl: '32px',
        full: '9999px',
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
