# liri-node-app
Deployed Site: https://layers45.github.io/liri-node-app/
Liri is a node application that takes requests for concerts, songs, and or movies and returns information on them.

The proper commands to utilize this app are as follows:
'concert-this' <band name here>: This will give you the date and location of most eminent show.
  
'spotify-this-song' <song title>: This will give you various information about the requested song including Artist, Album, and a url for the song.
  
'movie-this' <movie title>: This will give you a summary of the movie, the actors in it and two seperate ratings for it (IMDB and Rotton Tomato).
  
'do-what-it-says': This will pick a song of liri's preference, namely "I Want it That Way" by Backstreet Boys.

This application uses BandsInTown API, Spotify API, OMDB API to find relevant information.

replace the following in your own .env page with your own personal key, and secret key.

Spotify API keys

SPOTIFY_ID=SPOTIFY-ID

SPOTIFY_SECRET=SPOTIFY-SECRET_ID

