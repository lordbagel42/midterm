import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import App from './lib/Navbar.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
