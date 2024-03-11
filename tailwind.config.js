/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-default': '#FFBF1A',
        'red-default': '#F14338',
        'white-default': 'white',
        aquamarine: '#C7D5F2',
        'black-default': 'rgb(0, 0, 0)',
      },
      backgroundImage: {
        'bg-1': "url('src/assets/images/backgrounds/bg-1.svg')",
        'bg-2': "url('src/assets/images/backgrounds/bg-2.svg')",
        'bg-3': "url('src/assets/images/backgrounds/bg-3.svg')",
        bubble: "url('/src/assets/images/bubbles/bubble2.svg')",
        faultBubble: "url('/src/assets/images/bubbles/redBubble.svg')",
        hand: "url('/src/assets/images/hands/hand.svg')",
        phraseEvil: "url('/src/assets/images/phrases/evil-right.svg')",
        phraseEvilLeft: "url('/src/assets/images/phrases/evilLeft.svg')",
        phraseKind: "url('/src/assets/images/phrases/kindPhrase.svg')",
      },
      keyframes: {
        randomMove: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '25%': {
            transform: 'translate(3px, -3px)',
          },
          '50%': {
            transform: 'translate(-3px, 3px)',
          },
          '75%': {
            transform: 'translate(-3px, -3px)',
          },
          '100%': {
            transform: 'translate(3px, 3px)',
          },
        },

        handAnimations: {
          '0%': { transform: 'translateY(-30px)' },
          '30%': { transform: 'translateY(-90px)' },
          '50%': { transform: 'translateY(-90px)' },
          '60%': { transform: 'translateY(-90px)' },
          '100%': { transform: 'translateY(-30px)' },
          '0%, 29%, 100%': { background: "url('src/assets/images/hands/hand.svg')" },
          '30%, 60%': { background: "url('src/assets/images/hands/hand2.svg')" },
        },
        exitScreenAnimation: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-500px)' },
        },
        handMove: {
          '0%': { transform: 'translateY(-30px)' },
          '30%': { transform: 'translateY(-90px)' },
          '50%': { transform: 'translateY(-90px)' },
          '60%': { transform: 'translateY(-90px)' },
          '100%': { transform: 'translateY(-30px)' },
        },
        handClick: {
          '0%, 29%, 100%': { background: "url('src/assets/images/hands/hand.svg')" },
          '30%, 60%': { background: "url('src/assets/images/hands/hand2.svg')" },
        },
        bubbleAppearance: {
          '0%, 29%, 95%, 100%': { background: 'none' },
          '30%, 59%': { background: "url('src/assets/images/bubbles/bubble2.svg')" },
        },
        faultBubbleAppearance: {
          '0%, 29%, 95%, 100%': { background: 'none' },
          '30%, 59%': { background: "url('/src/assets/images/bubbles/redBubble.svg')" },
        },
        appear: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        leftMove: {
          '0%': { left: '0' },
          '25%': { left: '25%' },
          '50%': { left: '50%' },
          '75%': { left: '75%' },
          '100%': { left: '105%' },
        },
        righMove: {
          '0%': { right: '0' },
          '25%': { right: '25%' },
          '50%': { right: '50%' },
          '75%': { right: '75%' },
          '100%': { right: '105%' },
        },
        leftShake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px) translateY(-2px)' },
          '50%': { transform: 'translateX(2px) translateY(2px)' },
          '75%': { transform: 'translateX(-2px) translateY(-2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        rightShake: {
          '0%': { transform: 'translateX(0) scaleX(-1)' },
          '25%': { transform: 'translateX(-2px) translateY(-2px) scaleX(-1)' },
          '50%': { transform: 'translateX(2px) translateY(2px) scaleX(-1)' },
          '75%': { transform: 'translateX(-2px) translateY(-2px) scaleX(-1)' },
          '100%': { transform: 'translateX(0) scaleX(-1)' },
        },
        leftMove: {
          '0%': { left: '0' },
          '25%': { left: '25%' },
          '50%': { left: '50%' },
          '75%': { left: '75%' },
          '100%': { left: '105%' },
        },
        rightMove: {
          '0%': { right: '0' },
          '25%': { right: '25%' },
          '50%': { right: '50%' },
          '75%': { right: '75%' },
          '100%': { right: '105%' },
        },
      },
      animation: {
        handAnimations: 'handAnimations 4s infinite',
        alienAnimation: 'randomMove 4s infinite alternate, appear 1s',
        citizenRightAnimation: 'rightMove 10s linear infinite, leftShake 0.5s ease infinite',
        citizenLeftAnimation: 'leftMove 10s linear infinite,  rightShake 0.5s ease infinite',
        bubbleAppearance: 'bubbleAppearance 4s infinite',
        randomMove: 'randomMove 4s infinite alternate',
        appear: 'appear 0.5s ease-in-out',
        leftMove: 'leftMove 4s infinite',
        rightMove: 'rightMove 4s infinite',
        handMove: 'handMove 4s infinite',
        handClick: 'handClick 4s infinite',
        exitScreenAnimation: 'exitScreenAnimation 2s',
        leftShake: 'leftShake 4s infinite',
        rightShake: 'rightShake 4s infinite',
        faultBubbleAppearance: 'faultBubbleAppearance 4s infinite',
      },
    },
  },
  plugins: [],
};
