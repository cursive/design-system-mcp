import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@/atoms': resolve(__dirname, './src/atoms'),
            '@/molecules': resolve(__dirname, './src/molecules'),
            '@/organisms': resolve(__dirname, './src/organisms'),
            '@/tokens': resolve(__dirname, './src/tokens'),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                tokens: resolve(__dirname, 'src/tokens/index.ts'),
                // Individual component entries for tree-shaking
                'components/Button': resolve(__dirname, 'src/molecules/Button/index.ts'),
                'components/PanelHeader': resolve(__dirname, 'src/molecules/PanelHeader/index.ts'),
                'components/StarRating': resolve(__dirname, 'src/molecules/StarRating/index.ts'),
                'components/Carousel': resolve(__dirname, 'src/organisms/Carousel/index.ts'),
                'components/Supporting': resolve(__dirname, 'src/organisms/Supporting/index.ts'),
                'components/Reviews': resolve(__dirname, 'src/organisms/Reviews/index.ts'),
                'components/FAQ': resolve(__dirname, 'src/organisms/FAQ/index.ts'),
                'components/HowItWorks': resolve(__dirname, 'src/organisms/HowItWorks/index.ts'),
                'components/Membership': resolve(__dirname, 'src/organisms/Membership/index.ts'),
                'components/Hero': resolve(__dirname, 'src/organisms/Hero/index.ts'),
                'components/PDPTemplate': resolve(__dirname, 'src/templates/index.ts'),
            },
            name: 'FigmaDesignSystem',
            formats: ['es'],
            fileName: (format, entryName) => `${entryName}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },
        outDir: 'dist'
    }
});


