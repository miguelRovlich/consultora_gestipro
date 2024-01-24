import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        '@/assets/GESTIPROLOGO.png',
        '@/assets/image(1).png',
        '@/assets/customer-gbc61c0a80_640.jpg',
        
        // Otros módulos externos si los tienes...
      ],
    },
  },
});
