# Bank-React-App
The original code for this exercise was created by faculty for MiT xPro's Professional Certificate in Coding: Full Stack Development with MERN course (August 2022 cohort). I modified the appearance of app in the CSS stylesheet and optimized the code in the React JS and JSX files.

##### Caroline J. France
Last updated on 21 March 2023

### Project Description
This React exercise is from the course's Module 18: Bad Bank. To view, please download all files in this repo. Viewers will see a simple, single-page create React app that is an interface for a bank with no security. At the moment, users can create an account, deposit withdraw funds, and see account information. Viewers are unable to withdraw funds that exceed the dollar amount in the account balance.

### Future Improvements
Here are some redesign/reconfigure ideas for this project:
* I plan to add functionality to the JSX file, which includes error messages, log-in validation, timed messages related to the updated balance, a currency option, a language option, etc.
* I plan to change the design. Specifically, I want to experiment with designing specifically for React components in an SCSS file.
* I plan to connect this to a database.

### Run These Commands in Terminal or Command Prompt
* cd/bank
*	npm install bootstrap
bootstrap navigation and cards are used in this app
* npm install react-router-dom
enables navigation between pages
* npm install react-bootstrap
enables bootstrap functionality in react
* npm install react-hook-form
enables functionality of forms in react
* npm install -g json-server
enables passing and storing of user data from forms to the data.json file
* if you want to view json data
npm run server
Open browser and go to http://localhost:8000/users
*	npm start
app is now visible in browser at http://localhost:3000/

### How to Locally Run the Bank-React-App
From this Bank-React-App repository, download these files:
* index.html
* atm.js
* styles.css
* nyc.png
* deposit.png
* withdraw.png
* spacer.png

Next, open Terminal (Mac) or Command Prompt (PC), and type the following commands:
* npm install --global http-server
* http-server -c1-1
Then, open a browser, and paste the link to view on your machine:
* http://127.0.0.1:8080

# Getting Started with Create React App

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

### License
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