# Sign-Up Page for E-Commerce Website

## Overview:
I had started developing my first E-Commerce Website project, in which, currently, I had developed the Sign-Up page for new users.

## How to Run the Project in your Local System:
Here are the following steps to run the project in your local system:
1. Clone this repository in your local system;
2. Make sure that the `node_modules` folder and the `auxillary folders and files` mentioned in the `.gitignore` file are downloaded in your local system;
3. Run the command `npm run dev` in your terminal/CLI, to start the local server in which you can access the webpage.

## Tech Deep-Dive:
I had developed this responsive Ecommerce Website and it's Sign-Up page, by just using frontend technologies: **HTML, CSS, Tailwind, JavaScript and React**. In future, I will be also using *Redux/Redux Toolkit* for state management.

## Development Journey:
I got this project as an assignment from *Roc8 Careers*, and the final look or design of the webpage was posted by them in *Figma*. This was my first time using Figma, and I am really glad that it is beginner-friendly. After understanding the design of the webpage, first, I started creating the header of the webpage, by dividing it into three major components: `options`, `navBar` and `msgBar`, as the header is static in the sign-up page, as well as in the login page. The header also contains few icons, so, I learn to import and use SVG icons from Figma to the webpage. 
Then I understood about the Sign-Up component, which contains two major components: `sign-up` component, in which the user enter ther info/credentials; and `verification` component, in which the user's email will be verified by sending an 8-digit code to his/her email (*currently, not functional*). First, in the sign-up component, all the input form elements were made React controlled-components by using State and Props. Then, by implementing Events and defining additional State and Props on the sign-up component, the verification component gets rendered on the webpage, as the user clicks on the `create account` button. I had also made the input fields in the sign-up component `required`, which dont' allows the user to move to the verification part, before filling all the input fields.

## Conlusion:
Finally, after so many days, it's a dream come true of started developing an Ecommerce Website project, on my own. Stay tuned for more updates🙏😇...!