/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // WarungVerse palette — refined warm dusk: ink, cream, amber, rose, gold
        night: {
          900: '#14100d',
          800: '#1e1813',
          700: '#271f18',
          600: '#33291f',
        },
        ember: {
          DEFAULT: '#e9a857',
          light: '#f4c079',
          deep: '#c77d3e',
        },
        gold: {
          DEFAULT: '#c7a06a',
          light: '#e0c48e',
          deep: '#a8824e',
        },
        spice: {
          DEFAULT: '#d97d86',
          light: '#e59aa0',
        },
        jade: {
          DEFAULT: '#8a9a7e',
          light: '#aab89c',
          deep: '#5f6e54',
        },
        cream: {
          DEFAULT: '#f4eadb',
          dim: '#a89a89',
        },
        // rose accent (the soft warm "blush" tone) — replaces the loud candy pink
        bubble: {
          DEFAULT: '#d97d86',
          light: '#e59aa0',
          deep: '#b85f69',
        },
        rose: {
          DEFAULT: '#d97d86',
          light: '#e59aa0',
          deep: '#b85f69',
        },
        taupe: '#a89a89',
        // kept on-palette so any stray reference stays warm & restrained
        sky: {
          DEFAULT: '#c7a06a',
          light: '#e0c48e',
        },
        grape: {
          DEFAULT: '#d97d86',
          light: '#e59aa0',
        },
        mint: {
          DEFAULT: '#8a9a7e',
          light: '#aab89c',
        },
        butter: {
          DEFAULT: '#f4c079',
          light: '#f6e3bd',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.37)',
        lift: '0 24px 60px -20px rgba(0,0,0,0.6)',
        glow: '0 0 60px -10px rgba(233, 168, 87, 0.4)',
        // soft, warm, restrained
        puff: '0 18px 44px -16px rgba(233,168,87,0.45)',
        pop: '0 14px 44px -14px rgba(233,168,87,0.5)',
        cute: '0 14px 40px -16px rgba(217,125,134,0.4)',
      },
      borderRadius: {
        blob: '42% 58% 56% 44% / 50% 46% 54% 50%',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.82' },
          '55%': { opacity: '0.94' },
          '70%': { opacity: '0.78' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-120px) translateX(20px)', opacity: '0' },
        },
        // cute motion
        wobble: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        jelly: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '30%': { transform: 'scale(1.08, 0.92)' },
          '50%': { transform: 'scale(0.94, 1.06)' },
          '70%': { transform: 'scale(1.03, 0.97)' },
        },
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '96%': { transform: 'scaleY(0.1)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0.6) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1) rotate(90deg)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        flicker: 'flicker 4s ease-in-out infinite',
        drift: 'drift 7s ease-in-out infinite',
        wobble: 'wobble 1.2s ease-in-out infinite',
        jelly: 'jelly 0.6s ease-in-out',
        blink: 'blink 5s ease-in-out infinite',
        bob: 'bob 3s ease-in-out infinite',
        sway: 'sway 3.5s ease-in-out infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
