import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

const bagelTheme: CustomThemeConfig = {
  name: 'bageltheme',
  properties: {
    // Font
    '--theme-font-family-base': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
    '--theme-font-family-heading': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '1px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',

    // On-X Colors
    '--on-primary': '0xffffff',
    '--on-secondary': '0x000000',
    '--on-tertiary': '0x000000',
    '--on-success': '0x000000',
    '--on-warning': '0x000000',
    '--on-error': '0xffffff',
    '--on-surface': '0xffffff',

    // Colors
    // primary
    '--color-primary-50': `0xf0e9e3`, // #f0e9e3
    '--color-primary-100': `0xeae1da`, // #eae1da
    '--color-primary-200': `0xe5dad0`, // #e5dad0
    '--color-primary-300': `0xd6c3b4`, // #d6c3b4
    '--color-primary-400': `0xb7977c`, // #b7977c
    '--color-primary-500': `0x986a44`, // #986a44
    '--color-primary-600': `0x895f3d`, // #895f3d
    '--color-primary-700': `0x725033`, // #725033
    '--color-primary-800': `0x5b4029`, // #5b4029
    '--color-primary-900': `0x4a3421`, // #4a3421

    // secondary
    '--color-secondary-50': `0xfdf8f0`, // #fdf8f0
    '--color-secondary-100': `0xfcf6eb`, // #fcf6eb
    '--color-secondary-200': `0xfcf4e6`, // #fcf4e6
    '--color-secondary-300': `0xfaedd7`, // #faedd7
    '--color-secondary-400': `0xf6dfba`, // #f6dfba
    '--color-secondary-500': `0xf2d19c`, // #f2d19c
    '--color-secondary-600': `0xdabc8c`, // #dabc8c
    '--color-secondary-700': `0xb69d75`, // #b69d75
    '--color-secondary-800': `0x917d5e`, // #917d5e
    '--color-secondary-900': `0x77664c`, // #77664c

    // tertiary
    '--color-tertiary-50': `0xfdf6e4`, // #fdf6e4
    '--color-tertiary-100': `0xfcf4db`, // #fcf4db
    '--color-tertiary-200': `0xfcf1d2`, // #fcf1d2
    '--color-tertiary-300': `0xfae8b7`, // #fae8b7
    '--color-tertiary-400': `0xf6d781`, // #f6d781
    '--color-tertiary-500': `0xf2c64b`, // #f2c64b
    '--color-tertiary-600': `0xdab244`, // #dab244
    '--color-tertiary-700': `0xb69538`, // #b69538
    '--color-tertiary-800': `0x91772d`, // #91772d
    '--color-tertiary-900': `0x776125`, // #776125

    // success
    '--color-success-50': `0xe1edfb`, // #e1edfb
    '--color-success-100': `0xd7e6fa`, // #d7e6fa
    '--color-success-200': `0xcde0f8`, // #cde0f8
    '--color-success-300': `0xaecef4`, // #aecef4
    '--color-success-400': `0x72a9ec`, // #72a9ec
    '--color-success-500': `0x3584e4`, // #3584e4
    '--color-success-600': `0x3077cd`, // #3077cd
    '--color-success-700': `0x2863ab`, // #2863ab
    '--color-success-800': `0x204f89`, // #204f89
    '--color-success-900': `0x1a4170`, // #1a4170

    // warning
    '--color-warning-50': `0xfef8e0`, // #fef8e0
    '--color-warning-100': `0xfdf6d5`, // #fdf6d5
    '--color-warning-200': `0xfdf4cb`, // #fdf4cb
    '--color-warning-300': `0xfbedab`, // #fbedab
    '--color-warning-400': `0xf9e06c`, // #f9e06c
    '--color-warning-500': `0xf6d32d`, // #f6d32d
    '--color-warning-600': `0xddbe29`, // #ddbe29
    '--color-warning-700': `0xb99e22`, // #b99e22
    '--color-warning-800': `0x947f1b`, // #947f1b
    '--color-warning-900': `0x796716`, // #796716

    // error
    '--color-error-50': `0xfaddde`, // #faddde
    '--color-error-100': `0xf9d1d3`, // #f9d1d3
    '--color-error-200': `0xf7c6c8`, // #f7c6c8
    '--color-error-300': `0xf3a4a7`, // #f3a4a7
    '--color-error-400': `0xe95f66`, // #e95f66
    '--color-error-500': `0xe01b24`, // #e01b24
    '--color-error-600': `0xca1820`, // #ca1820
    '--color-error-700': `0xa8141b`, // #a8141b
    '--color-error-800': `0x861016`, // #861016
    '--color-error-900': `0x6e0d12`, // #6e0d12

    // surface
    '--color-surface-50': `0xf0f0ef`, // #f0f0ef
    '--color-surface-100': `0xebebea`, // #ebebea
    '--color-surface-200': `0xe6e6e5`, // #e6e6e5
    '--color-surface-300': `0xd7d6d5`, // #d7d6d5
    '--color-surface-400': `0xb8b8b6`, // #b8b8b6
    '--color-surface-500': `0x9a9996`, // #9a9996
    '--color-surface-600': `0x8b8a87`, // #8b8a87
    '--color-surface-700': `0x747371`, // #747371
    '--color-surface-800': `0x5c5c5a`, // #5c5c5a
    '--color-surface-900': `0x4b4b4a`, // #4b4b4a
  },
};

export default bagelTheme;
