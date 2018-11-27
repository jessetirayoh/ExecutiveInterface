## Executive Interface

---

The Executive Interface is created with HTML, CSS, & JavaScript. It utilizes third-party libraries for icons and the sliding navbar. All third-party libraries are part of the root files, eliminating the need to have access to internet to load up these libraries. The original design is taken from Verys and is available through [Invision](https://www.invisionapp.com/). Please ask involved member (Theodore Matula) for permission access.

The EI would be run on the port that is opened through the controller just like the HiperInterface. The EI will function as a simple modern interface for user to interact with content such as putting content on the wall with ease, without having to worry about resizing content.

---

### Dev Environment:

###### Text Editor - Visual Studio Code [RECOMMENDED]

Code production and preview can be done here.

Plugins / Extensions:

- Live Server by Ritwick Dey [<b>ESSENTIAL</b>]
  Launch a development local server with live reload feature for static and dynamic pages.

* JavaScript (ES6) Code Snippets by Charalampos Karypidis [<b>ESSENTIAL</b>]
  Allows user to avoid repetitive typing in the course of routine edit operations.

- Bracket Pair Colorizer by CoenraadS [<b>Optional</b>]
  Allows matching brackets to be identified with colors. Makes code easier to read.

* Prettier - Code Formatter by Esben Petersen [<b>Optional</b>]
  Allows formatting of Javascript and CSS. Makes code easier to read.

Modern Browser Compatibility: Modern features such as the dark custom navbar is available in Chrome but not supported in Firefox.

---

### Third Party Libaries:

###### Classie - [Link](https://github.com/desandro/classie)

A class helper function used to support older browsers that does not support `classList` function.
<br>

###### Codrops - [Link](https://tympanus.net/Development/MultiLevelPushMenu/)

Multi-Level Menu is inspired from this design and some of its functionality is derived from this demo.
<br>

###### Modernizr - [Link](https://modernizr.com/download/?csstransforms3d-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles)

Modernizr is used to automatically detects the availability of next-generation web technologies in user's browsers. This allows the EI detect and tailor the user's experience based on the actual capabilities of their browser.
<br>

###### Font Awesome Icons v4.7.0 - [Link](https://fontawesome.com/v4.7.0/)

Icons in this interface is treated as fonts or SVG formatted resource. At the time of writing this, we are using v4.7.0.
<br>

###### Normalize - [Link](https://github.com/necolas/normalize.css/)

Normalize is a CSS file that provides better cross-browser consistency in the default styling of HTML elements.

---

### CSS

###### component.css

CSS file contains all the styling of all the components in the webpage.

###### font-awesome.css (3rd party)

CSS file contains the styling of the default Font Awesome icons.

###### iconBar.css

CSS file is responsible for the custom styling of the Font Awesome icons in the icon bar section.

###### icons.css (3rd party)

CSS file contains the styling of the default Codrops icons. (<i>Codrops icons are not used in the time of this documentation writing</i>)

###### normalize.css (3rd party)

CSS file provides a better cross-browser consistency in the default styling of HTML elements.

---

### JavaScript

###### classie.js (3rd party)

JavaScript file to check if it supports `classList` in older browsers.

###### main.js

JavaScript file for main functionality of the interface. All XML HttpRequest will be implemented here interacting with the HiperInterface.

###### mlpushmenu.js (3rd party)

JavaScript file for creating the multi-level menu with nested folders navigation.

###### modernizr.custom.js (3rd party)

JavaScript file that contains custom code to automatically detect the availability of next-generation web technologies in user's browsers.
