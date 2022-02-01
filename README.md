# CUBE CSS with Tailwind CSS

⚠️ **THIS IS VERY MUCH A PROTOTYPE AND LIKELY BROKEN** ⚠️

👀 **DEMO: <https://cube-css-with-tailwind.netlify.app/>** 👀

📝 **MORE INFO [I wrote up about this whole thing here](https://piccalil.li/blog/i-used-tailwind-for-the-u-in-cube-css-and-i-liked-it/)**

An example of how you can use [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) as the U (utilities) in
[CUBE CSS](https://cube.fyi/). It also uses the following:

1. [Every Layout](https://every-layout.dev/) layouts as compositional layouts (the C in CUBE CSS)
2. [Utopia](https://utopia.fyi/) for fluid type and spacing scales
3. [Post CSS](https://postcss.org/) to bundle up CSS files

## Why?

I work with clients that like to use Tailwind and I, as part of the
consultancy work I do, try to encourage them down the path of a CSS
methodology, rather than leaning all-in on a CSS framework.

Tailwind is _fantastic_ at generating utility classes with an
easy-to-understand config file, but I find it very limiting and rigid as the
entire CSS codebase, so this project uses it how I would ideally use it:
purely as the utility generator.

Consider this project diplomacy.

## Getting started

1. Run `npm install`
2. Run `npm start` to spin up a little local server and watch for CSS changes
3. Run `npm build` to compress CSS etc

## Contributing

No thanks, but if you see something fundamentally wrong (not just your
opinions, thanks), then let me know in the issues!
