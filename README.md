# sanelkukic.us.eu.org v2
Version 2.0 rewrite of my personal website made using React.js, react-bootstrap, and react-router-dom!

## View the live version
[Click here](https://sanelkukic.us.eu.org) to view the live version of the website.

## What technologies does this use?
- React.js
- `react-bootstrap`
- `react-router-dom`
- Cloudflare Pages for static web hosting

## Setting up a development environment
I made this entire website in Visual Studio Code, so if you wish to use that editor, I've included a `workspace.code-workspace` file that you can just double-click and the entire project will automatically open in Visual Studio Code.

### Requirements
- Node.js
- npm or yarn (I used yarn for this project)
- Visual Studio Code (optional)

### Steps for setting up development environment
- Run `yarn install` or `npm install` depending on which package manager you prefer to use. (This repository comes with a yarn.lock so I recommend using yarn)
- Run `yarn start` or `npm run start` to get a live-reloading development server on port 3000 by default. This command will also open the webpage in your default web browser automatically.

If you wish to create a production-ready build, you can run `yarn build` or `npm run build` and the build will be output to the `build/` folder. **For development purposes, you shouldn't need to do this because Cloudflare Pages does this automatically on every commit to main. But if you, for whatever reason, want to create a production build for yourself, you can run this command to do so.**

## License
The code in this repository is licensed under the terms of the MIT license. You can find the full license text in the [LICENSE.txt](./LICENSE.txt) file in this repository.
