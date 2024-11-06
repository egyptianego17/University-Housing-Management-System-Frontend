import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'
import { glob } from 'glob';

const files = glob.sync('public/**/*').filter((file) => file.endsWith('.png') || file.endsWith('.svg'))
export default defineConfig({
  preset,
  images: files
})
