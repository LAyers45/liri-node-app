require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var whichApi = process.argv[2];
var whatInfo = process.argv[3];

switch (whichApi) {
    case "concert-this":

        break;
    case "spotify-this-song":

        break;
    case "movie-this":

        break;
    case "do-what-it-says":

        break;

    default:

        break;

}