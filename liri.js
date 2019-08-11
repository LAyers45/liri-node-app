require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment")

var whichApi = process.argv[2];
var whatInfo = process.argv.slice(3).join(" ");

function appStart(whichApi, whatInfo) {
    switch (whichApi) {
        case "concert-this":
            concertThis(whatInfo);
            break;

        case "spotify-this-song":
            console.log("help")
            spotifyThis(whatInfo);
            break;

        case "movie-this":
            movieThis(whatInfo);
            break;

        case "do-what-it-says":
            liriGo(whatInfo);
            break;

        default: console.log("\nType one of these after 'node liri.js': \nconcert-this <artist/band name here>\nspotify-this-song <song title>\nmovie-this <movie title>\ndo-what-it-says")
            console.log(whichApi);
            console.log(whatInfo);

    }
}
function concertThis() {
    var bandSearch = "https://rest.bandsintown.com/artists/" + whatInfo + "/events?app_id=codingbootcamp";

    request(bandSearch, function (error, response, body) {

    })
}

function spotifyThis(song) {
    var spotify = new Spotify(keys.spotify);

    if (!song) {
        song = "The Sign";
    };

    spotify.search({ type: "track", query: song }, function (err, data) {
        if (err) {
            console.log("I have Broken " + err);
        }
        //search result follows line
        console.log("----------------------------");
        // artist response
        console.log("Artist Name: " + data.tracks.items[0].album.artist[0].name + "\n")
        // song name response
        console.log("Song Name: " + data.tracks.items[0].name + "\n")
        // preview link response
        console.log("Song Preview URL: " + data.tracks.items[0].href + "\n")
        // album response
        console.log("Album: " + data.tracks.items[0].album.name + "\n")

        // put text in log.txt
        var logIt = "-----Spotify Log-----\nArtist Name: " + data.tracks.items[0].album.artist[0].name + "\nSong Name: " + data.tracks.items[0].name + "\nSong Preview URL: " + data.tracks.items[0].href + "\nAlbum: " + data.tracks.items[0].album.name + "\n"

        fs.appendFile("log.txt", logIt, function (err) {
            if (err) {
                console.log(err)
            }
        })
    });
}
appStart(whichApi, whatInfo);