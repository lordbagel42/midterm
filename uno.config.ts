// uno.config.ts
import { defineConfig, presetAttributify } from "unocss";
import presetUno from "@unocss/preset-uno";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify,
    presetDaisy({
      themes: ["light", "dark"],
    }),
  ],
});
