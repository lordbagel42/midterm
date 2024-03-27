
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
		"--on-tertiary": "255 255 255",
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
		// secondary | #b5835a 
		"--color-secondary-50": "244 236 230", // #f4ece6
		"--color-secondary-100": "240 230 222", // #f0e6de
		"--color-secondary-200": "237 224 214", // #ede0d6
		"--color-secondary-300": "225 205 189", // #e1cdbd
		"--color-secondary-400": "203 168 140", // #cba88c
		"--color-secondary-500": "181 131 90", // #b5835a
		"--color-secondary-600": "163 118 81", // #a37651
		"--color-secondary-700": "136 98 68", // #886244
		"--color-secondary-800": "109 79 54", // #6d4f36
		"--color-secondary-900": "89 64 44", // #59402c
		// tertiary | #cdab8f 
		"--color-tertiary-50": "248 242 238", // #f8f2ee
		"--color-tertiary-100": "245 238 233", // #f5eee9
		"--color-tertiary-200": "243 234 227", // #f3eae3
		"--color-tertiary-300": "235 221 210", // #ebddd2
		"--color-tertiary-400": "220 196 177", // #dcc4b1
		"--color-tertiary-500": "205 171 143", // #cdab8f
		"--color-tertiary-600": "185 154 129", // #b99a81
		"--color-tertiary-700": "154 128 107", // #9a806b
		"--color-tertiary-800": "123 103 86", // #7b6756
		"--color-tertiary-900": "100 84 70", // #645446
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
		// surface | #77767b 
		"--color-surface-50": "235 234 235", // #ebeaeb
		"--color-surface-100": "228 228 229", // #e4e4e5
		"--color-surface-200": "221 221 222", // #ddddde
		"--color-surface-300": "201 200 202", // #c9c8ca
		"--color-surface-400": "160 159 163", // #a09fa3
		"--color-surface-500": "119 118 123", // #77767b
		"--color-surface-600": "107 106 111", // #6b6a6f
		"--color-surface-700": "89 89 92", // #59595c
		"--color-surface-800": "71 71 74", // #47474a
		"--color-surface-900": "58 58 60", // #3a3a3c
		
	}
}