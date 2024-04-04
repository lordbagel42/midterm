# midterm

Midterm for my Intro to Web Development & Programming class.
This is severely over done, as I have used SvelteKit and skeletonUI, when we were taught to use vanilla JS and raw HTML.

## Running Locally

This site is hosted on https://bagelindustries.com/

It can be ran locally via the following commands:
```bash
git clone https://github.com/lordbagel42/midterm && cd midterm
pnpm i
pnpm run dev
```
OR
```bash
git clone https://github.com/lordbagel42/midterm && cd midterm
bun i
bun run dev
```
This site will eventually be migrated to a Bun runtime, and bun has the capability to install packages MUCH faster than `npm`, `pnpm`, or `yarn`.

## Building

To create a production version of your app:

```bash
pnpm run build
```
OR
```bash
bun run build
```

You can preview the production build with `npm run preview`.

> This project uses the Cloudflare Pages adapter.
