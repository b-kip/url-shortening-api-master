# Shortly: URL Shortening API

## Overview

***Shortly*** uses the [shrtcode API](https://shrtco.de/docs/) to shorten user URLs and allows the user to
copy the shortened URL of their choice.

This project is a Frontend Mentor Challenge solution.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty


### Screenshot

![](./screenshot.png)

### Links

- [View solution code](https://github.com/b-kip/url-shortening-api-master)
- [View live site](https://url-shortening-api-master-psi.vercel.app)

## My process

### Built with

This application was first built using vanilla JavaScript only. In this first step I used:
  - Semantic HTML5 markup
  - CSS custom properties
  - CSS Flexbox
  - Mobile-first workflow
  - Sass
  - Vanilla JavaScript
  - Parcel Bundler

I later converted it to a React Application.
  - React

### What I learned

  - Controlling widths of flex items to achive changing and constant sizes at different breakpoints. The Shorten it button was set to a constant width while the input size was allowed to grow to a maximum width.
  
  - Converting working folder from a structure that supports Parcel Bundler to one that supports Webpack.

  - Solidified on creating React custom hooks. Created `useSemiPersistentState` custom hook to ensure that the latest user input was persisted in the browser between multiple sessions.

  - Working with the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).

### Continued development

  - Testing the React application.
  - Recreate this application using AngularJS or Vue.js.

### Useful resource

  - MDN for [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).

## Author

[b-kip](https://github.com/b-kip)