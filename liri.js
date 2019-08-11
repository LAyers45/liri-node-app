require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
var request = require("request")
var whichApi = process.argv[2];
var whatInfo = process.argv.slice(3).join(" ");

switch (whichApi) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        liriGo();
        break;

    default: console.log("\nType one of these after 'node liri.js': \nconcert-this <artist/band name here>\nspotify-this-song <song title>\nmovie-this <movie title>\ndo-what-it-says")

        break;

}

function concertThis() {
    var bandSearch = "https://rest.bandsintown.com/artists/" + whatInfo + "/events?app_id=codingbootcamp";

    request(bandSearch, function (error, response, body) {

    })
}