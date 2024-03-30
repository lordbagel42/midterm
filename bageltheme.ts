
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const bagelTheme: CustomThemeConfig = {
    name: 'bageltheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "1px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #986a44 
		"--color-primary-50": "240 233 227", // #f0e9e3
		"--color-primary-100": "234 225 218", // #eae1da
		"--color-primary-200": "229 218 208", // #e5dad0
		"--color-primary-300": "214 195 180", // #d6c3b4
		"--color-primary-400": "183 151 124", // #b7977c
		"--color-primary-500": "152 106 68", // #986a44
		"--color-primary-600": "137 95 61", // #895f3d
		"--color-primary-700": "114 80 51", // #725033
		"--color-primary-800": "91 64 41", // #5b4029
		"--color-primary-900": "74 52 33", // #4a3421
		// secondary | #F2D19C 
		"--color-secondary-50": "253 248 240", // #fdf8f0
		"--color-secondary-100": "252 246 235", // #fcf6eb
		"--color-secondary-200": "252 244 230", // #fcf4e6
		"--color-secondary-300": "250 237 215", // #faedd7
		"--color-secondary-400": "246 223 186", // #f6dfba
		"--color-secondary-500": "242 209 156", // #F2D19C
		"--color-secondary-600": "218 188 140", // #dabc8c
		"--color-secondary-700": "182 157 117", // #b69d75
		"--color-secondary-800": "145 125 94", // #917d5e
		"--color-secondary-900": "119 102 76", // #77664c
		// tertiary | #F2C64B 
		"--color-tertiary-50": "253 246 228", // #fdf6e4
		"--color-tertiary-100": "252 244 219", // #fcf4db
		"--color-tertiary-200": "252 241 210", // #fcf1d2
		"--color-tertiary-300": "250 232 183", // #fae8b7
		"--color-tertiary-400": "246 215 129", // #f6d781
		"--color-tertiary-500": "242 198 75", // #F2C64B
		"--color-tertiary-600": "218 178 68", // #dab244
		"--color-tertiary-700": "182 149 56", // #b69538
		"--color-tertiary-800": "145 119 45", // #91772d
		"--color-tertiary-900": "119 97 37", // #776125
		// success | #3584e4 
		"--color-success-50": "225 237 251", // #e1edfb
		"--color-success-100": "215 230 250", // #d7e6fa
		"--color-success-200": "205 224 248", // #cde0f8
		"--color-success-300": "174 206 244", // #aecef4
		"--color-success-400": "114 169 236", // #72a9ec
		"--color-success-500": "53 132 228", // #3584e4
		"--color-success-600": "48 119 205", // #3077cd
		"--color-success-700": "40 99 171", // #2863ab
		"--color-success-800": "32 79 137", // #204f89
		"--color-success-900": "26 65 112", // #1a4170
		// warning | #f6d32d 
		"--color-warning-50": "254 248 224", // #fef8e0
		"--color-warning-100": "253 246 213", // #fdf6d5
		"--color-warning-200": "253 244 203", // #fdf4cb
		"--color-warning-300": "251 237 171", // #fbedab
		"--color-warning-400": "249 224 108", // #f9e06c
		"--color-warning-500": "246 211 45", // #f6d32d
		"--color-warning-600": "221 190 41", // #ddbe29
		"--color-warning-700": "185 158 34", // #b99e22
		"--color-warning-800": "148 127 27", // #947f1b
		"--color-warning-900": "121 103 22", // #796716
		// error | #e01b24 
		"--color-error-50": "250 221 222", // #faddde
		"--color-error-100": "249 209 211", // #f9d1d3
		"--color-error-200": "247 198 200", // #f7c6c8
		"--color-error-300": "243 164 167", // #f3a4a7
		"--color-error-400": "233 95 102", // #e95f66
		"--color-error-500": "224 27 36", // #e01b24
		"--color-error-600": "202 24 32", // #ca1820
		"--color-error-700": "168 20 27", // #a8141b
		"--color-error-800": "134 16 22", // #861016
		"--color-error-900": "110 13 18", // #6e0d12
		// surface | #9a9996 
		"--color-surface-50": "240 240 239", // #f0f0ef
		"--color-surface-100": "235 235 234", // #ebebea
		"--color-surface-200": "230 230 229", // #e6e6e5
		"--color-surface-300": "215 214 213", // #d7d6d5
		"--color-surface-400": "184 184 182", // #b8b8b6
		"--color-surface-500": "154 153 150", // #9a9996
		"--color-surface-600": "139 138 135", // #8b8a87
		"--color-surface-700": "116 115 113", // #747371
		"--color-surface-800": "92 92 90", // #5c5c5a
		"--color-surface-900": "75 75 74", // #4b4b4a
		
	}
}