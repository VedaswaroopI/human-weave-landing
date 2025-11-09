import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-tabs',
            '@radix-ui/react-accordion',
            '@radix-ui/react-dropdown-menu',
          ],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'animation': ['framer-motion'],
          'spline': ['@splinetool/react-spline', '@splinetool/runtime'],
        }
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
    exclude: [
      '@splinetool/react-spline',
      '@splinetool/runtime',
    ],
  },
}));
