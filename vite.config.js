import { defineConfig } from 'vite'
import { resolve } from 'path'
import inputPath from './src/plugin/vite-plugin-input-path'
export default defineConfig({
  root: 'src',
  resolve: {
    alias: {
      '@': resolve(__dirname, "src"),
      'pages': resolve(__dirname, "src/pages")
    }
  },
  plugins: [inputPath()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: { index: resolve(__dirname, 'src/index.html') }
    },
  },
})
