
import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';
import plugin from 'windicss/plugin';
import lineClampPlugin from 'windicss/plugin/line-clamp';
import scrollbarPlugin from '@windicss/plugin-scrollbar';
import colors from './tools/windicss/theme/colors';
import height from './tools/windicss/shortcuts/height';
import bg from './tools/windicss/shortcuts/bg';
import border from './tools/windicss/shortcuts/border';
import text from './tools/windicss/shortcuts/text';
import button from './tools/windicss/shortcuts/button';

export default defineConfig({
    darkMode: 'class',
    plugins: [
        typography({
            modifiers: ['DEFAULT', 'sm', 'md', 'lg', 'xl', '2xl'],
        }),
        lineClampPlugin,
        scrollbarPlugin,
        plugin(({ variants }) => {
            variants({
                scrollbar: 'rounded-10px'
            });
        })
    ],
    safelist: 'w-20px w-30px h-20px h-30px mt-296px rotate-[-15deg] rotate-[-8deg] rotate-[8deg] rotate-[-4deg] rotate-[4deg] rotate-[15deg] gap-x-7px',
    theme: {
        fontFamily: {
            sans: ['-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
            serif: ['-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
        },
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
        },
        extend: {
            colors,
            fontFamily: {
                roboto: ['roboto Medium'],
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            screens: {
                sm: { max: '750px' },
                md: { min: '750px', max: '1024px' },
                lg: { min: '1024px', max: '1200px' },
                xl: { min: '1200px', max: '1600px' },
                '2xl': { min: '1600px', max: '2560px' },
                '3xl': { min: '2560px' },
            },
            lineClamp: {
                sm: '2',
                md: '3',
            },
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed',
            crosshair: 'crosshair',
            'zoom-in': 'zoom-in',
        },
    },
    shortcuts: {
        ...height,
        ...bg,
        ...border,
        ...text,
        ...button,
        'pp-scrollbar': 'scrollbar-thin scrollbar-track-dark-0 scrollbar-thumb-neutral-600 scrollbar-corner-dark-0',
    },
    extract: {
        include: ['**/*.{vue,js,jsx,tsx,css,svelte}'],
        exclude: ['node_modules', '.git', '.nuxt','dist'],
    },
});
