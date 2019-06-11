import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import request from "request";
import {createConnection, Connection} from "typeorm";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, function() {
    console.log("Bot is listening on port " + PORT);
}); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup DB Connection //
const db: Promise<void> = createConnection()
    .then(() => {
        if (process.env.APP_ENV === 'development') {
            console.log('Connected to development PostGres DB');
        } else {
            console.log('Connected to prod PostGres DB');
        }  
  }).catch((error) => {
      console.log(`DB Connection Failed: ${error}`)}
    );

app.post("/command", (req, res) => {
  var data = {form: {
        token: process.env.SLACK_AUTH_TOKEN,
        channel: "#general",
        text: "Hi! :wave: \n I'm your new bot."
      }};

  request.post("https://slack.com/api/chat.postMessage", data, function (error, response, body) {
        // Sends welcome message
        res.json();

    });
});

export default db;