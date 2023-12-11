//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false; //This variable will be used to check if the user has entered the correct password.

app.use(bodyParser.urlencoded({ extended: true })); //This line is needed to parse the body of the request.

function passwordCheck(req, res, next) { //This function will be used as middleware to check if the user has entered the correct password.
    const password = req.body["password"]; //req.body is the body of the request. We are accessing the password field of the body.
    if (password === "mortadela01") {
        userIsAuthorised = true; //If the password is correct, we set the variable to true.
    }
    next(); //We call next() to continue with the next middleware.
}

app.use(passwordCheck); //We use the middleware we just created.

app.get("/", (req, res) => { //This is the route for the home page.
    res.sendFile(__dirname + "/public/index.html"); //We send the index.html file.
});

app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html"); //If the user is authorised, we send the secret.html file.
    } else {
        res.sendFile(__dirname + "/public/index.html"); //If the user is not authorised, we send the index.html file again.
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});