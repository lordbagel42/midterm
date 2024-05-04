module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';


"scripts": {
  "build:css": "postcss styles/tailwind.css -o styles/output.css"
}
