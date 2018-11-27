##Executive Interface

---

The Executive Interface is created with HTML, CSS, & JavaScript. It utilizes third-party libraries for icons and the sliding navbar. All third-party libraries are part of the root files, eliminating the need to have access to internet to load up these libraries. The original design is taken from Verys and is available through [Invision](https://www.invisionapp.com/). Please ask involved member (Theodore Matula) for permission access.

The EI would be run on the port that is opened through the controller just like the HiperInterface. The EI will function as a simple modern interface for user to interact with content such as putting content on the wall with ease, without having to worry about resizing content.

---

###Third Party Libaries:

######Font Awesome Icons v4.7.0 - [Link](https://fontawesome.com/v4.7.0/)
Icons in this interface is treated as fonts or SVG formatted resource. At the time of writing this, we are using v4.7.0.

<br>

######Codrops - [Link](https://tympanus.net/Development/MultiLevelPushMenu/)
Multi-Level Menu is inspired from this design and some of its functionality is derived from this demo.

<br>

######Custom Modernizr - [Link](https://modernizr.com/download/?csstransforms3d-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles)
Modernizr is used to automatically detects the availability of next-generation web technologies in user's browsers. This allows the EI detect and tailor the user's experience based on the actual capabilities of their browser.

<br>

######Normalize - [Link](https://github.com/necolas/normalize.css/)
Normalize is a CSS file that provides better cross-browser consisteny in the default styling of HTML elements.

---

###CSS

Excluding third-party files there are 2 main CSS files for the EI's design and functionality.

######component.css
This CSS file includes all the styling of all the components in the webpage.

######iconBar.css
This CSS file is responsible for the behavior of the icon bar and its styling.
