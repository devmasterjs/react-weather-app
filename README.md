# React Open Weather Web

This application uses the user's current location and displays the current address of the region's climatic data and a button to update the data on the interface.

To do this search, the Open Weather Map API is used [http://api.openweathermap.org/]

## Screenshots

### web

![Weather Component Web](https://github.com/devmasterjs/react-weather-app/tree/main/public/images/weather-page-web.png)

![Error Component Mobile](https://github.com/devmasterjs/react-weather-app/tree/main/public/images/error-component-web.png)

### mobile

## Installation

### `yarn`

Run yarn command for install the project dependencies.

## Configure Open Weather Web API-KEY

To use the OpenWeather API key, it is necessary to change the expression {API-KEY} by its corresponding API key.

This configuration is found in the .env file that is located in the main folder of the application.

If it does not exist, you can create it according to the example below:

```
REACT_APP_OPEN_WEATHER_API_KEY={API-KEY}
```

Let's say your OpenWeather api key is 1234567890987654321.

In this case, change the contents of the .env file to:

```
REACT_APP_OPEN_WEATHER_API_KEY=1234567890987654321
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
