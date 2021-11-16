# sanelkukic.us.eu.org v2
Version 2.0 rewrite of my personal website made using React.js, react-bootstrap, and react-router-dom!

# View the live version
You can access my website through any of the following URLs:
- [sanelkukic.us.eu.org](https://sanelkukic.us.eu.org)
- [sanelkukic.is-a.dev](https://sanelkukic.is-a.dev)

# What technologies does this use?
- React.js
- `react-bootstrap`
- `react-router-dom`
- Cloudflare Pages for static web hosting

# Setting up a development environment
I made this entire website in Visual Studio Code, so if you wish to use that editor, I've included a `workspace.code-workspace` file that you can just double-click and the entire project will automatically open in Visual Studio Code.

## Requirements
- Node.js
- npm or yarn (I used yarn for this project)
- Visual Studio Code (optional)
- [NASA API key](https://api.nasa.gov) (required to enable the easter egg functionality)
- [ReCAPTCHA site key](https://www.google.com/recaptcha/about/) (required to enable ReCAPTCHA functionality in the contact form)
- [Formspree.io form ID](https://formspree.io) (required to enable the contact form)
- Namespace for the [Count API](https://countapi.xyz) (see more below)

## Steps for setting up development environment
- Obtain the required API keys, edit `.env.example` and enter those keys into their respective fields.
- Rename `.env.example` to `.env` if you haven't done so already.
- Run `yarn install` or `npm install` depending on which package manager you prefer to use. (This repository comes with a yarn.lock so I recommend using yarn)
- Run `yarn start` or `npm run start` to get a live-reloading development server on port 3000 by default. This command will also open the webpage in your default web browser automatically.

If you wish to create a production-ready build, you can run `yarn build` or `npm run build` and the build will be output to the `build/` folder. **For development purposes, you shouldn't need to do this because Cloudflare Pages does this automatically on every commit to main. But if you, for whatever reason, want to create a production build for yourself, you can run this command to do so.**

### Namespaces for the Count API
My website uses the [Count API](https://countapi.xyz) to power the cute little kitty easter egg on the 404 page.

In order to avoid conflicts, you must set your own namespace for this feature in the `.env` file.

Ideally, you should set it to the domain of your instance. However, if you are running in a development environment this may not be possible. In that case, you should set the namespace to `localhost` and a random string. For instance, `localhost-g1nzropg`. The longer the random string is, the better.

# License
The code in this repository is licensed under the terms of the MIT license. You can find the full license text in the [LICENSE.txt](./LICENSE.txt) file in this repository.
