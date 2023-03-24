# Bank-React-App
The original code for this exercise was created by faculty for MiT xPro's Professional Certificate in Coding: Full Stack Development with MERN course (August 2022 cohort). I modified the appearance of the app in five CSS stylesheets. Styles in the components folder modify bootstrap components. Also, I optimized and added functionality to the JavaScript files, which include JSX elements.

##### Caroline J. France
Last updated on 23 March 2023

### Project Description
This React app is from the course's Module 18 exercise: Bad Bank. Viewers will see a single-page create React app that is an interface for a bank with no security; this version is not connected to a backend. Upon loading, the user needs to create an account and log in before being able to access the deposit, withdraw, and users' account information pages.

### Future Improvements
Here are some redesign/reconfigure ideas for this project:
* Connect user data to a database.
* Add stricter ES6 validation for form fields.
* Add options: currency, language, and dark mode.
* Make the design more responsive for small screens. Although current components are responsive, the design does not yet accommodate very small or large screens.
* Get the toggle button to work for the navigation bar. I may need to start over with a new React bootstrap navigation bar, rather than work around a standard bootstrap nav.

### View the Live App
View the live build on Netlify at [https://carolinefrancebankingapp.netlify.app/](https://carolinefrancebankingapp.netlify.app/)

### Locally Run the App
Download all files in the Bank-React-App repository into a directory on your computer. Open the directory in your code editor. You should have Node installed.

In the terminal or command prompt, run the following commands:

Open the directory with the app files in your code editor.
* cd/bank

Install the following dependencies:
*	npm install bootstrap
>>> bootstrap navigation and cards are used in this app

* npm install react-router-dom
>>> enables navigation between pages

* npm install react-bootstrap
>>> enables bootstrap functionality in react

* npm install react-hook-form
>>> enables functionality of forms in react

*	npm start
>>> app is now visible on your local computer in the browser at [http://localhost:3000/](http://localhost:3000/)

### Technologies Used
# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Images
Free licensed images from Adobe Stock [https://stock.adobe.com/Library/urn:aaid:sc:US:c6e64467-4274-4b77-8709-13f30cddf20e](https://stock.adobe.com/Library/urn:aaid:sc:US:c6e64467-4274-4b77-8709-13f30cddf20e)

### Author of the Revised Project
Caroline J. France

### License: Starter Code
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.