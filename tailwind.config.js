/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{html,js}',
        './src/**/*.{html,js}',
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['HYKuYaHei', 'sans-serif'],
            },
            colors: {
                'coffee': {
                    DEFAULT: '#6F4E37',
                    'dark': '#5A3E2B',
                    'light': '#8B6D4E'
                },
                'cream': {
                    DEFAULT: '#FFFDD0',
                    'light': '#FFFFF0'
                }
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out forwards',
                'fade-out': 'fadeOut 1s ease-in-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'bounce-delayed-1': 'bounce 1s infinite 0.2s',
                'bounce-delayed-2': 'bounce 1s infinite 0.4s',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(20px)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
    animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-out': 'fadeOut 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'bounce-delayed-1': 'bounce 1s infinite 0.2s',
        'bounce-delayed-2': 'bounce 1s infinite 0.4s',
    },
}