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
});


