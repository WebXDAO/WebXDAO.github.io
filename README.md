<img alt="Web 3 Community" src="https://i.imgur.com/xKOfGSM.png"/>

---

<b>Web 3 Community is an Open Source Community that focuses on Web 3 and Blockchain technologies 🚀 </b>
 
We are currently implementing the design from Figma to code. If you want to help, please check the [issue](https://github.com/web3community/web3community.github.io/issues/3) regarding about that. Any suggestions for our website, you can submit an issue [here](https://github.com/web3community/web3community.github.io/issues/new).

---

<br />

## Getting Started

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/web3community/web3community.github.io&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>


### 1\. Clone this Repository

```
git clone https://github.com/web3community/web3community.github.io.git
```

### 2\. Navigate to the directory

```
cd web3community.github.io
```

### 3\. Install dependencies

```
npm install
```

### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5\. Run Eleventy

```
npm run start
```

### 6\. ✨ Enjoy

<br />

## Technologies used

* [Netlify CMS](https://www.netlifycms.org/) (Currently WIP 🚧) :

Netlify CMS is used to handle the CMS part of this static website. It uses git as backend so there is no need to maintain a different server. Maintained by the awesome folks at Netlify.

* [Eleventy (11ty)](https://github.com/11ty/eleventy) :

Eleventy is a simpler static site generator using javascript. Eleventy will compile all of our files and generate a static output where we can host it anywhere.

* [Alpine.js](https://alpinejs.dev/) :

Alpine JS is a minimal framework to provide JavaScript behavior in our markup. Think it as a lite version of React & Vue. We use Alpine JS to add JavaScript components like Dropdown, Toggle etc.

* [Tailwind CSS](https://tailwindcss.com/) :

Tailwind CSS is a utility first CSS Framework. It has a set of preset utility classes to style anything without touching CSS file.
    
## Folder Structure

Root `/` folder of our project contains all configuration files like `tailwind.config.js`, `.eleventy.js` etc..

`/src` folder contains all of our site contents and data. Before configuring anything, you go to the `/src` folder and make some changes to see if its working.

## Make Changes

Go to the `/src` folder and open `index.html` file. Now make any changes and save it to see if the changes are reloading or not. If its reloading with your changes, then it means its working perfectly. If you have any issues, comment here or raise an issue in the github.

* This is the new folder structure :

```
src
│   index.html
│
└───__data
│   │   navigation.yaml
│   │   settings.yaml
│   
└───__includes
│   │   default.html
│   │
│   └───partials
│       │   navbar.html
│       │   footer.html
│
└───static
│   │  
│   └───css
│   │
│   └───img
.eleventy.js
.eleventyignore
.gitignore
.nojekyll
CODE_OF_CONDUCT.md
LICENSE
package.json
package-lock.json
postscss.config.js
tailwind.config.js
README.md
```

## Nunjucks

Writing code with NEAT Stack is fun because of [Nunjucks](https://mozilla.github.io/nunjucks/). Eleventy supports Nunjucks Templating language by default. So that you can split HTML Code and avoid writing repetitive code like a boss.

Including a part of HTML is easy. Go to `src/_includes/partials/navbar.html` and make some changes there. Now we can include the navbar anywhere we wanted using `{% include ..}`

Another great feature of Nunjucks is the Loops. Suppose you have a card block repeating over 10 times, using Nunjucks, just write it once and loop it. means you will be able to modify easily by changing in one place. The data should be seperated here and It will be handled seamlessly by our Eleventy.

Example Nunjucks loop :
* `_data/navigation.yaml` :
```yaml
---
items:
  - text: HOME
    url: "/"
  - text: LEARN
    url: "/learn"
  - text: BLOG
    url: "/blog"
  - text: ABOUT
    url: "/about"
  - text: PROJECTS
    url: "/projects"
```

* `navbar.html` :
```html
<ul>
    {% for item in navigation.items %}
        <li class="nav__item">
            <a  href="{{ item.url }}">{{ item.text }}</a>
        </li>
    {% endfor %}
</ul>
```

That's it. Adding classes or modifying layout is now easier since Eleventy & Nunjucks combined do all the magic for us.

## Eleventy Data

Since we talked about the `_data` above. If you enter the data as raw text inside a page, it means you cannot edit that text using CMS. So its important to plan initially according to your needs. Make an list on which data you need to change later and which is not.

By default, Eleventy looks for a folder called `_data/` and get the data from the files inside. They accept json, yaml, js etc. So you can write data in any format you like. If you have to fetch a data from a different server, you can create .js file which returns the data.

> The `_data` folder name can be changed using Eleventy configuration

## Writing HTML

Its really simple to create pages or sections in Eleventy. Just create an HTML file in the /src folder and it will automatically build it as a page. If you are writing a blog, you can even use markdown .md as well.

Exemple to create a blog page :
1. Create a file called `blog.html`
```html
---
title: Our Blog
layout: default
path: blog
---

<div class="container max-w-3xl mt-6 px-6">

    <h1 class="font-bold text-5xl">{{title}}</h1>

    {{ content | safe }}

</div>
```
2. Acces it to localhost:8080/blog/

## Alpine JS

Adding interactivity is easy using Alpine JS. You can learn more about from the docs. Here's how a simple Toggle works with Alpine JS.

```html
<nav x-data="{ isOpen: false }" @keydown.escape="isOpen = false">
  <button @click="isOpen = !isOpen"">Menu </button>
  <div :class="{ 'block': isOpen, 'hidden': !isOpen }" @click.away="isOpen = false" x-show.transition="true">
     ... menu
  </div>
</nav>
```
Here you can see the initial data is created for `isOpen` and its set to `false` and it changes the data on button click. Based on the Value, we just toggle the `div` visibility. Wasn't it easy compared to jQuery? We didn't even created a `js` file.
