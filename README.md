## Online Demo 
    http://cherifproject.herokuapp.com/

## Running Locally

### Installing Node.js and npm

This application has been tested on Node.js 6 and npm 3 - these packages should
be available for download [here](https://nodejs.org/en/) - choose the "Current"
version for download.

### Installing Node.js modules

Once you have Node and npm installed and this repository downloaded, you'll need
to install the application's dependencies. Do this with:

    npm install

For development you'll probably want to install the following modules globally:

    npm install -g grunt-cli sequelize-cli

    
### Running the application

To run the application in development mode:

    npm start

Or :

    grunt


To run the application simulating production settings:

    NODE_ENV=production
    grunt collect_static
    npm start

## License
    
