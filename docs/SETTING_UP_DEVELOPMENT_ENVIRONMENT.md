# Setting up a development environment

Because of the slight complexity of my website and how it works, there are some steps involved in getting a development environment up and running.

## Prerequisites
- Node.js (I used version 16.9.1 to make this website)
- Either npm or yarn (I used yarn version 1.22.11 to make this website)
- Git (to checkout the repository)
- A text editor or IDE of your choice (I made this website using JetBrains WebStorm and I've added the configuration files to make coding in WebStorm much easier so I recommend you use it, but ultimately it doesn't really matter)

## Obtaining API keys
My website utilizes multiple different APIs. Some of these API keys are not required, and others are.

- [NASA API](https://api.nasa.gov) key (not required - enables the NASA easter egg functionality)
- [ReCAPTCHA v2](https://www.google.com/recaptcha/about/) API key (required if you want the contact form to work, not required otherwise)
- [Formspree.io](https://formspree.io) form ID (required to render a contact form)
- [Project Honeypot](https://projecthoneypot.org) QuickLink (see more below)
- A namespace for the [Count API](https://countapi.xyz) (see more below)

Once you've got all the API keys, read on to see where to put them.

## Configuration files
My website utilizes both environment variables and a `config.json` file in the `src/` directory.

You should store all of your API keys in their respective environment variables. To do this, copy the `.env.example` file from the project root directory to `.env` and open this copy in your favorite text editor.

You should see multiple different environment variables with placeholder values. Replace the placeholder values with your actual API keys.

**Please note: Any changes to environment variables, including changes to the `.env` file, will require you to restart your development server. This does not apply to changes made to `config.json` as it is dynamically reloaded by the development server.**

### config.json structure
The `config.json` file is where you will put all of the "dynamic" content that will be rendered on the website. This file should be safe to commit to Git assuming you do not put any sensitive information in there. You can find an example `config.json` file in the `src/` folder, copy `config.example.json` to `config.json` and open it in your favorite text editor.

**Make sure you save your `config.json` to the `src/` folder otherwise the website will not work!**

## Project Honeypot
Project Honeypot is a network of "honeypots" that are used to catch spam or otherwise malicious bots and users and prevent them from accessing your website. Cloudflare websites automatically use Project Honeypot to block malicious actors, however my website takes this integration a step further.

If you wish to enable the Project Honeypot functionality, you must obtain a "QuickLink" from the service. You can sign up for free and obtain a QuickLink at https://projecthoneypot.org

The QuickLink is effectively an invisible link that you put on your website to catch spam bots. Regular users will not be able to see this link and it should not affect their browsing experience in the slightest.

You should store your QuickLink in the `.env` file in order to make it work with my website.

Bots that visit the link will be publicly recorded in the honeypot and will not be able to access your website.

## Count API namespaces
My website utilizes [CountAPI](https://countapi.xyz) on the 404 page to enable a cute little easter egg.

This integration, however, requires that you set a custom namespace value for the Count API. This is done in order to prevent your local counter from interfering with the counter on the live version of my website, or anyone else's website for that matter (basically to prevent conflicts between counters).

You can set the value of the namespace to whatever you want, but you must ensure it is sufficiently unique. For instance, you cannot set your namespace to `localhost` because there could be multiple people using that namespace for their own websites. A good namespace to use would be something like "localhost" and a series of random letters and numbers, such as `localhost-ald174bzx` (but don't use this one because I just publicized it).

You should store your self-selected custom namespace value in the `.env` file in order to make it work with my website.

## Starting a development server
Once you have all of the configuration files and environment variables in place, simply run the following commands in the project's root directory to install dependencies and start up a development server on port 3000!

```bash
$ yarn install
$ yarn run start
```

This is assuming that you use Yarn, but if you prefer to use npm then simply run `npm install` in the project root directory to install dependencies and then run `npm run start` to start the development server.

## Contributing
If you wish to make a code contribution to this project, check out the [Contributor Guidelines](https://github.com/sanelk2004/.github/blob/main/CONTRIBUTING.md) to ensure that your contribution is accepted.