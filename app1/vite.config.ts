import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {federation} from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/app1/',
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'app1',

      filename: 'remoteEntry.js',

      exposes: {
        './mount': './src/bootstrap.ts',
      },

      shared: {
        vue: { singleton: true },
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
