import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {federation} from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'host',
      remotes: {
        app1: {
          type: 'module',
          name: 'app1',
          entry: 'http://localhost:5002/app1/remoteEntry.js',
        },

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
