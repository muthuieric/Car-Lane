# VisionaryGerm 
VisionaryGerm is an online art museum dedicated to curating and displaying an exquisite collection of artworks. This repository contains the code for the VisionaryGerm website, built using React.

## Live Site



## Table of Contents

- [Features](#features)
- [Prerequistics](#prerequisites)
- [Installation](#installation)
- [Fetch Data](#fetch-data)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Technologies Used](#technologies-used)
- [Licence](#license)
- [Author](#author)

## Features
- Explore a vast collection of artworks from different artists and origins.
- View detailed information about each artwork, including the title, artist, department, place of origin, year, credit line, and publication history.
- Send messages and inquiries  via the contact form.


## Prerequisites
Before running the application, make sure you have the following installed:
Node.js (v12 or higher)
npm (v6 or higher)

## Installation
1. Clone the repository to your local machine: `git clone https://github.com/your-username/visionarygerm.git`
2. Navigate to the project directory:`cd visionarygerm`
3. Install the required dependencies:`npm install`
4. To start the development server, run the following command:`npm start`   
This will launch the application in your default web browser at http://localhost:3000.


## Fetch Data

The project uses The Art Institute of Chicago's API to fetch artwork data for display. The API provides endpoints to retrieve a list of artworks and details of a specific artwork.

### List of Artworks

To fetch a list of artworks, the project calls the following endpoint:

GET https://api.artic.edu/api/v1/artworks

This endpoint returns a list of artworks from The Art Institute of Chicago's collection.

### Artwork Details

To fetch details of a specific artwork, the project calls the following endpoint with the `id` parameter representing the artwork's unique identifier:

GET https://api.artic.edu/api/v1/artworks/{id}


This endpoint returns detailed information about a specific artwork, including its title, artist, place of origin, year, and more.

Please note that you need an internet connection to fetch data from the API, and if the API is unavailable or the request fails, the project will display a loading message.

For more information about The Art Institute of Chicago's API, please visit their [documentation](https://artic.edu/docs).


## Deployment
The application can be manually deployed by creating a production build and hosting the build folder on a web server. To create a production build, run the following command:
`npm run build`
This will generate optimized production-ready files in the build folder. Upload the contents of the build folder to your web server to make the application live.

For automatic deployments, you can use Netlify, which can integrate with your GitHub repository and automatically deploy the latest changes whenever you push to your repository.

## Contributing
Contributions to VisionaryGerm  are welcome. If you find any issues or have improvements to suggest, feel free to create a pull request or open an issue in the repository.

## Technologies Used
- React
- Tailwind
- Netlify

## License
The VisionaryGerm project is open-source and licensed under the MIT License. You can find the license information in the LICENSE file.

## Author
Author: `Eric Muthui`


Thank you for exploring the VisionaryGerm repository!!



<!-- Folder Structure

|-- src
    |-- components
        |-- About.js
        |-- ArtWorkDetails.js
        |-- ArtWorkItem.js
        |-- ArtWorkList.js
        |-- Contact.js
        |-- Form.js
        |-- Home.js
        |-- NavBar.js
    |-- images
        |-- homepagepic.jpg
    |-- App.js
    |-- index.js
src: Contains all the source code for the application.
components: Contains the individual components used in the application, such as About, ArtWorkDetails, ArtWorkItem, ArtWorkList, Contact, Form, Home, and NavBar.
images: Contains images used in the application, such as homepagepic.jpg.
App.js: Main application component that handles routing and renders the appropriate components based on the URL path.
index.js: Entry point of the application where the React app is rendered into the DOM.
Routing
The application uses React Router for client-side routing. The different routes and components associated with them are defined in the App.js file.

/: Home page displaying an image and hero content.
/art: Artwork list page displaying a collection of artworks.
/art/:id: Artwork details page showing detailed information about a specific artwork.
/contacts: Contact page with a contact form and museum information.
Data Fetching
The application fetches data from the Art Institute of Chicago API to display the list of artworks and artwork details. The ArtWorkList component fetches the list of artworks, and the ArtWorkDetails component fetches the details of a specific artwork using the fetch API. -->