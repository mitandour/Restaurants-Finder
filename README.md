# RestaurantsFinder
Deployed on : https://ndeye-restau-finder-react.herokuapp.com/

Allows a user to filter for restaurants by city and cuisine by creating separate pages for each filter, for example https://ndeye-restau-finder-react.herokuapp.com/cacequi, https://ndeye-restau-finder-react.herokuapp.com/american, https://ndeye-restau-finder-react.herokuapp.com/cacequi/american etc.

The Backend is a REST API NodeJs Application.

The FrontEnd is a React Application.

Images are pulled from a random source: https://source.unsplash.com.

# FrontEnd : React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install dependancies

In the project directory, you can run:

### `npm install`

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---

# BackEnd : REST API NodeJs Application

## Install dependancies

    npm install

## Run the app

    npm run debug

Runs the app in the development mode.\
Open [http://localhost:3030/api/restaurants]

Available Endpoints :

Filter the restaurants by city and/or cuisine :
GET http://localhost:3030/api/restaurants/?city={city}&cuisine={cuisine}

Get a restaurant by id:
GET http://localhost:3030/api/restaurants/{id}

List of existing cuisines:
GET http://localhost:3030/api/cuisines

List of existing cities :
GET http://localhost:3030/api/cities
