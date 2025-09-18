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
                'tokens/index': resolve(__dirname, 'src/tokens/index.ts'),
                'atoms/index': resolve(__dirname, 'src/atoms/index.ts'),
                'molecules/index': resolve(__dirname, 'src/molecules/index.ts'),
                'organisms/index': resolve(__dirname, 'src/organisms/index.ts'),
                'templates/index': resolve(__dirname, 'src/templates/index.ts'),
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


