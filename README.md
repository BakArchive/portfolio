# Portfolio
A portfolio page for programmer with simple design and centralized configuration, helps you build your own portfolio in short time, integrating with APIs from LeetCode, GitHub, TMDB.

Demo: [link](https://me.mashiro.best)

## Features
- Dark mode
- Flexible and centralized configuration
- Light animation that no bother to content
- LeetCode API: fetch your LeetCode info from API and load in page
- TMDB API: fetch your TMDB list from API and load in page
- GitHub Activities: fetch data from API and showing your commit activity in a GitHub-styled heat map
- GitHub Projects: fetch all your public repos on GitHub and show them in cards
- Component Lazy load Optimization: boost up first screen rendering
- Error Router handle: built-in error router configuration
- General error handling for API
- General cache for API through LocalStorage with expiration feature

## How to Configure
To build your own portfolio based on this project, you need to create your own `/src/config.js` file.  
Please refer to `/src/config_template.js` to adjust your `config.js`.

## How to Contribute
### Technical Stack
| Purpose | Techniques |
| --- | ------ |
| Core | [react](https://github.com/facebook/react) |
| Frontend Router | [react-router](https://github.com/remix-run/react-router) |
| UI and animation | [tailwindcss](https://github.com/tailwindlabs/tailwindcss), [daisyui](https://github.com/saadeghi/daisyui), [animationcss](https://github.com/animate-css/animate.css) |
| 3rd-party component |  |
| Building tool | [vite](https://github.com/vitejs/vite) |

### How to Run the project
Make sure you have already install NodeJS (version >= 20)
```shell
# clone the project to local
git clone https://github.com/MuenYu/portfolio.git
# locate to project folder
cd portfolio
# install dependencies
npm i
# run the project
npm run dev
```

**Since data fetched from API will be stored in localstorage, if you updated config file, please clean your localstorage to preview.**

### Project Folders
```
├───public: public static resources
└───src: source code folder
    ├───api: all api related staff
    ├───components: all UI components including related features
    ├───layout: the layout of the page, containers of all components
    ├───config_template.js: the configuration template that you should follow
    ├───global.css: the global style that will be applied to all pages
    ├───main.jsx: the entrance of the whole application
    └───router.jsx: the route object for react-router
```

## How to Report Issue?
Please use the `issue` feature of GitHub. There are two template for issue report:
- Bug: use it when you find anything works abnormal and know how to reproduce the issue.
- Feature: use it when you want a feature that is not in this project

**Please follow the template to raise your issue!**