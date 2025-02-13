import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({
      open: true,                // Ouvre automatiquement le rapport dans ton navigateur après le build
      filename: 'bundle-analysis.html', // Nom du fichier généré pour le rapport
      gzipSize: true,            // Affiche également la taille gzip
      brotliSize: true           // Affiche la taille Brotli
    })  
  ],
})
