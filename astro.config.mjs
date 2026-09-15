import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ici-industrial.example',
  vite: {
    plugins: [tailwindcss()],
  },
});
