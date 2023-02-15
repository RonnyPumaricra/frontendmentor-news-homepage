# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  <!-- - [Screenshot](#screenshot) -->
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

<!-- ### Screenshot -->

<!-- ![](./screenshot.jpg) -->

### Links

- Solution URL: [GitHub repository](https://github.com/ronnypumaricra/frontendmentor-news-homepage/)
- Live Site URL: [GiHub pages](https://ronnypumaricra.github.io/frontendmentor-news-homepage/)

## My process

### Steps

1. Creating the necesary classes, tags and content inside `index.html`.
2. Structuring the (Post)CSS files:

    **Outside `./components`**
    - index.css, imports all PostCSS files
    - reset.css: [Josh's reset](https://www.joshwcomeau.com/css/custom-css-reset/), with some tweaks
    - theme.css: Required colors for the project
    - fonts.css: Setting up the local font
    - utility.css: Classes that aren't tied
3. 

### Built with

- Semantic HTML5 markup
- CSS
  - CSS custom properties
  - Flexbox
  - CSS Grid
  - Media Queries
- Basic JavaScript

### Technologies & methodologies
- [Josh Comeau's CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)
- [mkweb](https://manz.dev/software/mkweb)'s folder structure
  - ViteJS
  - ESLint
  - StyleLint
  - PostCSS
- Desktop-first workflow

### Problems faced

**``format("truetype")`` or ``format("ttf")``**

Fonts ending with `.ttf` or `.otf` are called `truetype` and `opentype` inside `format()` 🤦‍♂️

```css
@font-face {
  /* Correct */
  src: url("/smth.ttf") format("truetype");
}
```