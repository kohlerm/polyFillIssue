import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import nodePolyfills from 'rollup-plugin-polyfill-node';
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),nodePolyfills(/* options */)]
})
