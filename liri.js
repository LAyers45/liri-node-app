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
            liriGo();
            break;

        default: console.log("\nType one of these after 'node liri.js': \nconcert-this <artist/band name here>\nspotify-this-song <song title>\nmovie-this <movie title>\ndo-what-it-says")
            console.log(whichApi);
            console.log(whatInfo);

    }
}
function concertThis() {
    var bandSearch = "https://rest.bandsintown.com/artists/" + whatInfo + "/events?app_id=codingbootcamp";

    axios.get(bandSearch).then(
        function (response) {
            // seperate the retrieved data
            console.log("-----------------------")
            // venue response
            console.log("Name of Venue: " + response.data[0].venue.name);
            // location response
            console.log("Venue Location: " + response.data[0].venue.city);
            // date response
            console.log("Date of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY"))


            // put text in log.txt
            var logIt = "\n-----Concerts Log-----\nArtist Name: " + whatInfo + "\nName of Venue: " + response.data[0].venue.name + "\nVenue Location: " + response.data[0].venue.city + "\nDate of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n"

            fs.appendFile("log.txt", logIt, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });

};


function spotifyThis() {
    var spotify = new Spotify(keys.spotify);

    if (!whatInfo) {
        whatInfo = "The Sign";
    };

    spotify.search({ type: "track", query: whatInfo, limit: 1 }, function (err, data) {
        if (err) {
            console.log("I have Broken " + err);
        }
        //search result follows line
        console.log("----------------------------");
        // artist response
        console.log("Artist Name : " + data.tracks.items[0].album.artist[0].name)
        // song name response
        console.log("Song Name : " + data.tracks.items[0].name)
        // preview link response
        console.log("Song Preview URL : " + data.tracks.items[0].href)
        // album response
        console.log("Album : " + data.tracks.items[0].album.name)

        // put text in log.txt
        var logIt = "\n-----Spotify Log-----\nArtist Name: " + data.tracks.items[0].album.artist[0].name + "\nSong Name: " + data.tracks.items[0].name + "\nSong Preview URL: " + data.tracks.items[0].href + "\nAlbum: " + data.tracks.items[0].album.name + "\n"

        fs.appendFile("log.txt", logIt, function (err) {
            if (err) {
                console.log(err)
            }
        })
    });
}

function movieThis(whatInfo) {
    if (!whatInfo) {
        whatInfo = "Mr. Nobody";
    }
    var queryURL = "http://www.omdbapi.com/?t=" + whatInfo + "&y=&plot=short&apikey=trilogy";

    axios.request(queryURL).then(
        function (response) {
            //search result follows line
            console.log("----------------------------");
            // title response
            console.log("Title : " + response.data.Title)
            // release year response
            console.log("Release Year : " + response.data.Year)
            // imdb response
            console.log("IMDB Rating : " + response.data.imdbRating)
            // rotton tomato response
            console.log("Rotten Tomato Rating : " + response.data.Ratings[1].Value)
            // country response
            console.log("Country: " + response.data.Country)
            // language response
            console.log("Language: " + response.data.Language)
            // plot response
            console.log("Plot: " + response.data.Plot)
            // actors response
            console.log("Actors: " + response.data.Actors)

            var logIt = "\n-----Movie Log-----\nTitle : " + response.data.Title + "\nRelease Year : " + response.data.Year + "\nIMDB Rating : " + response.data.imdbRating + "\nRotten Tomato Rating : " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\n"

            fs.appendFile("log.txt", logIt, function (err) {
                if (err) {
                    console.log(err);
                }
            });

        });

}

function liriGo() {

}
appStart(whichApi, whatInfo);