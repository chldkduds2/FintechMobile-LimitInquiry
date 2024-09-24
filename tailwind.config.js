const plugin = require('tailwindcss/plugin')

const createTypography = (type) => {
    const baseStyles = {
        lineHeight: '145%',
        letterSpacing: '-0.01em',
    }

    const sizes = {
        bold: ['30', '27', '25', '24', '22', '20', '18', '16', '15', '14', '13', '12', '11', '10'],
        medium: ['30', '27', '25', '24', '22', '20', '18', '16', '15', '14', '13', '12', '11', '10'],
        regular: ['30', '27', '25', '24', '22', '20', '18', '16', '15', '14', '13', '12', '11', '10'],
        light: ['30', '27', '25', '24', '22', '20'],
    }

    const weights = {
        bold: '700',
        medium: '500',
        regular: '400',
        light: '300',
    }

    return Object.fromEntries(
        sizes[type].map((size) => [`${size}-${type}`, [`${size}px`, { ...baseStyles, fontWeight: weights[type] }]]),
    )
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        '../../packages/grinda/**/*.{jsx,tsx,ts,mdx}',
    ],
    safelist: [
        {
            pattern: /bg-(pink|green|red|indigo|beige|light-green|aqua|blue)-(95|70|60|50|40|30|20|10)/,
        },
        {
            pattern: /text-(red|indigo)-(95)/,
        },
    ],
    theme: {
        borderRadius: {
            DEFAULT: '0.25rem',
            none: '0',
            xs: '0.125rem',
            sm: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            full: '9999px',
        },
        colors: {
            transparent: 'transparent',
            indigo: {
                10: '#00105B',
                20: '#03208E',
                30: '#1E36AC',
                40: '#2847C9',
                50: '#4F63D2',
                60: '#707FDA',
                70: '#9BA3E4',
                80: '#C3C7EF',
                90: '#DCDEF9',
                95: '#E9EDFF',
                99: '#F7F8FB',
            },
            pink: {
                10: '#400005',
                20: '#67000C',
                30: '#8E0C20',
                40: '#AF2A42',
                50: '#D1445D',
                60: '#F35E7E',
                70: '#FF87A5',
                80: '#FFB2C8',
                90: '#FFDBEB',
                95: '#FFEEF9',
                99: '#FFF5FB',
            },
            red: {
                10: '#3F0400',
                20: '#650A00',
                30: '#8E1300',
                40: '#B5260D',
                50: '#E6492D',
                60: '#FC5E3B',
                70: '#FF9173',
                80: '#FFBDA5',
                90: '#FFDDCC',
                95: '#FCF1EA',
                99: '#FEF9F6',
            },
            beige: {
                10: '#2B1700',
                20: '#472A00',
                30: '#653E00',
                40: '#865300',
                50: '#A76900',
                60: '#C7821D',
                70: '#E69C37',
                80: '#FCBB4A',
                90: '#FFE6C4',
                95: '#FFF2E0',
                99: '#FFFBF5',
            },
            lightGreen: {
                10: '#002E12',
                20: '#004D1F',
                30: '#006B2B',
                40: '#008A37',
                50: '#06A847',
                60: '#13C75B',
                70: '#3AD857',
                80: '#75EA6E',
                90: '#ABF681',
                95: '#DCFF91',
                99: '#F3FFDA',
            },
            ['light-green']: {
                10: '#002E12',
                20: '#004D1F',
                30: '#006B2B',
                40: '#008A37',
                50: '#06A847',
                60: '#13C75B',
                70: '#3AD857',
                80: '#75EA6E',
                90: '#ABF681',
                95: '#DCFF91',
                99: '#F3FFDA',
            },
            green: {
                10: '#00201D',
                20: '#003733',
                30: '#00504B',
                40: '#006A63',
                50: '#00867D',
                60: '#18A89E',
                70: '#26BFAB',
                80: '#50DBC8',
                90: '#79EFDA',
                95: '#A5F9E5',
                99: '#EAFCF6',
            },
            aqua: {
                10: '#001F24',
                20: '#00363D',
                30: '#004F58',
                40: '#006874',
                50: '#008392',
                60: '#009FB1',
                70: '#23BCCF',
                80: '#4FD8EC',
                90: '#7CE6F8',
                95: '#A8F2FF',
                99: '#ECFCFF',
            },
            blue: {
                10: '#001A3E',
                20: '#002A65',
                30: '#003B8E',
                40: '#004EBA',
                50: '#1A6FE5',
                60: '#3B87F2',
                70: '#6AA4F6',
                80: '#9FC6F9',
                90: '#C6DBFB',
                95: '#E6EFFA',
                99: '#EFF3F7',
            },
            gray: {
                10: '#1A1A1A',
                20: '#262626',
                30: '#333333',
                40: '#4D4D4D',
                50: '#666666',
                60: '#7A7A7A',
                70: '#999999',
                80: '#B3B3B3',
                90: '#D9D9D9',
                95: '#E4E4E4',
                99: '#F5F5F5',
            },
            uniqueGray: {
                10: '#131B2C',
                20: '#283041',
                30: '#424A5E',
                40: '#545C6F',
                50: '#6F778B',
                60: '#8991A5',
                70: '#A3ABC0',
                80: '#C5C9D6',
                90: '#DEE0E8',
                95: '#EEEFF3',
                99: '#F5F6FA',
            },
            black: '#000000',
            white: '#FFFFFF',
        },
        extend: {
            fontFamily: {
                sans: [
                    'Spoqa Han Sans Neo',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                ],
            },
            spacing: {
                13: '3.25rem',
                15: '3.75rem',
                17: '4.25rem',
                18: '4.5rem',
                22: '5.5rem',
                23: '5.75rem',
                30: '7.5rem',
                'pc-form': '430px',
                pc: '1200px',
            },
            maxWidth: ({ theme }) => ({
                ...theme('spacing'),
            }),
            minWidth: ({ theme }) => ({
                ...theme('spacing'),
            }),
            borderWidth: {
                1: '1px',
                3: '3px',
            },
            transitionDuration: {
                240: '240ms',
                400: '400ms',
                600: '600ms',
            },
            fontSize: {
                ...createTypography('bold'),
                ...createTypography('regular'),
                ...createTypography('medium'),
                ...createTypography('light'),
            },
            zIndex: {
                1: '1',
                modal: '995',
                full: '5000',
            },
        },
        screens: {
            sm: {
                max: '360px',
            },
            md: {
                max: '768px',
            },
            lg: {
                min: '768px',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities(
                {
                    '.scrollbar-hide': {
                        /* IE and Edge */
                        '-ms-overflow-style': 'none',

                        /* Firefox */
                        'scrollbar-width': 'none',

                        /* Safari and Chrome */
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    },

                    '.scrollbar-default': {
                        /* IE and Edge */
                        '-ms-overflow-style': 'auto',

                        /* Firefox */
                        'scrollbar-width': 'auto',

                        /* Safari and Chrome */
                        '&::-webkit-scrollbar': {
                            display: 'block',
                        },
                    },
                    '.my-safe': {
                        marginTop: 'env(safe-area-inset-top)',
                        marginBottom: 'env(safe-area-inset-bottom)',
                    },
                    '.mb-safe': {
                        marginBottom: 'env(safe-area-inset-bottom)',
                    },
                    '.py-safe': {
                        paddingTop: 'env(safe-area-inset-top)',
                        paddingBottom: 'env(safe-area-inset-bottom)',
                    },
                    '.pb-safe': {
                        paddingBottom: 'env(safe-area-inset-bottom)',
                    },
                    '.bottom-safe': {
                        bottom: 'env(safe-area-inset-bottom)',
                    },
                    '.min-h-screen-safe': {
                        minHeight: [
                            'calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)))',
                            '-webkit-fill-available',
                        ],
                    },
                    '.h-screen-safe': {
                        height: [
                            'calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)))',
                            '-webkit-fill-available',
                        ],
                    },
                },
                ['responsive'],
            )
        }),
    ],
}
