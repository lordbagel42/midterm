// uno.config.ts
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import { presetDaisy } from "unocss-preset-daisy";
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetDaisy({
      themes: ["light", "dark"],
    }),
  ],
});
