# WEB102 Prework - *Indie Game Library*

Submitted by: **Kushagra Taneja**

**Indie Game Library** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] Better Visuals. Website background colors and button colors are changed to look more visually pleasing.
* [x] Buttons change color and are more responsive when you hover over them.
* [x] Search functionality

## Video Walkthrough

Here's a walkthrough of implemented features:


[Watch walkthrough video](https://imgur.com/a/n26g1Yr)

<!-- Replace this with whatever GIF tool you used! -->
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One of the main challenges I encountered in this project was managing the dynamic interaction between JavaScript and the HTML DOM, particularly when it came to updating content in response to user input. For example, making the "Show Unfunded Only" and other filter buttons work correctly required a good understanding of event listeners, DOM manipulation, and the need to clear existing content before appending new elements. Initially, I forgot to use the deleteChildElements function, which led to duplicate content being displayed each time a filter was applied. This taught me the importance of cleaning up the DOM to maintain a seamless user experience.

Another difficulty involved understanding how data was being imported and used. The games data was stored as a JSON string and needed to be parsed correctly to be usable in array operations like filter and reduce. I also struggled with proper image referencing at first, as missing or incorrect paths prevented the images from loading. This experience reinforced the need to verify file structure and use relative paths correctly.

A valuable lesson from this project was the power of built-in JavaScript functions like filter, reduce, and map, which helped process and display data efficiently. I also learned to implement responsive and interactive features using CSS transitions and JavaScript event handling—for instance, improving UX with a live search bar and responsive button styling.

Overall, this project helped solidify my understanding of DOM manipulation, event-driven programming, and how to structure code for maintainability and user engagement.

## License

    Copyright 2025 Kushagra Taneja

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
