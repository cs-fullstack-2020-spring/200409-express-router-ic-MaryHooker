# 20-04-09 Express Router IC

[Resource](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#Routes_primer)

### Set Up
- Create an index.js file
- Generate the `package.json` file by running `npm init` in the terminal
- Install express and nodemon by running `npm install nodemon express` in the terminal
- Import the express module using the `require()` method
- Create a server called app using the `express()` method
- Allow that server to listen on port 8000 using the `listen()` method
- Create a routes directory
    - Create a route module for each route grouping specified below
    - Import express using the `require()` method in each router module
    -  Create a router using `express.Router()`
    - Export the router module at the bottom of each file

### Endpoints
#### Using Router
Use Express Router to group the following routes and mount them based on the section header
#### API
- Define a get request that sends the string `You attempted to read a single record` at the path `localhost:[PORT_NUMBER]/api/[RECORD_ID]`
- Create, test, and save endpoint in Postman
- Define a get request that sends the string `You attempted to read multiple records` at the path `localhost:[PORT_NUMBER]/api`
- Create, test, and save endpoint in Postman
- Define a post request that sends the body of the request sent in Postman at the path `localhost:[PORT_NUMBER]/api`
- Create, test, and save endpoint in Postman
    - Send a json object with properties `record_id` and `record_text`

#### User
- Define a get request that sends the string `Welcome back [USERNAME]` at the path `localhost:[PORT_NUMBER]/user/[USER_ID]`
- Create, test, and save endpoint in Postman
- Define a get request that sends the string `Hello New User` at the path `localhost:[PORT_NUMBER]/user`
- Create, test, and save endpoint in Postman