import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Le nom ici doit être IDENTIQUE au nom de votre repo GitHub
  // Attention aux majuscules/minuscules !
  base: "/Portfolio/", 
})
