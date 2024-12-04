/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/pages/navbar/Navbar.jsx",
    "./src/App.jsx",
    "./src/pages/food/Food.jsx",
    "./src/pages/music/Music.jsx",
    "./src/pages/music/components/Songs.jsx",
    "./src/pages/music/components/LinkAcc.jsx",
    "./src/pages/music/components/MegaPlaylist.jsx",
    "./src/pages/chat/components/Feed.jsx",
    "./src/pages/chat/components/TextInput.jsx",
    "./src/pages/chat/Chat.jsx",
    "./src/pages/language/components/AR.jsx",
    "./src/pages/header/header.jsx",
    "./src/pages/entertainment/Entertainment.jsx",
    "./src/pages/history/history.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1db954',
        'spotify-lgray': '#b3b3b3',
        'spotify-gray': '#535353',
        'spotify-dgray': '#212121',
        'spotify-black': '#121212',
        'white': '#FFFDFA',
        'light-blue': '#E3EBF8',
        'light-purple': '#CCD4F0',
        'light-orange': '#FFFAF4',
        'orangee': '#FFE8CF',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },

        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        network: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
        network: 'network 10s linear infinite',
        darkMode: 'class', // Enable dark mode support via class
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        theme: {
        extend: {},
        },

        darkMode: 'class', // Enable dark mode via class
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure correct file paths
  theme: {
    extend: {},
  },
  plugins: [],
    },
  },
},
  plugins: [],
};

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust paths if needed
  theme: {
    extend: {},
  },
  plugins: [],
};

