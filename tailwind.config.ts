import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import bagelTheme from './bageltheme';

const isProduction = process.env.NODE_ENV === 'production';

export default {
	darkMode: 'class',
	content: [
		`./src/**/*.{html,js,svelte,ts}`,
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
	},
	plugins: isProduction ? [] : [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					bagelTheme
				]
			}
		})
	],
} satisfies Config;
