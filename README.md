## liri-node-app (Language Interpretation and Recognition Interface)
**PURPOSE:** This is a CLI app that recognizes four commands (**concert-this**, **spotify-this-song**, **movie-this**, **do-what-it-says**). These commands will bring back different information. Read below to learn about the syntax used for these commands and the information retrieved.

***concert-this***
###### COMMAND LINE SYNTAX: node liri.js concert-this 'artist/band name here'
concert-this command will bring back the following data:
```
# of upcoming events by the artist/band
Concert/Venue/Festival name
Event location
Date of the event (formatted as 'MM/DD/YYYY')
```
['concert-this' screenshot example](images/concert-this.JPG)

***spotify-this-song***
###### COMMAND LINE SYNTAX: node liri.js spotify-this-song 'song name here'
[link to header](#liri-node-app)
spotify-this-song command will bring back the following data:
 ```
Artist(s)
Song's name
Preview link of the song from Spotify
Album name the song is from
 ```
 ['spotify-this-song' screenshot example](images/spotify-this-song.JPG)

***movie-this***
###### COMMAND LINE SYNTAX: node liri.js movie-this 'movie here'

movie-this command will bring back the following data:
```
Title of the movie
Year the movie came out
IMDB Rating of the movie
Rotten Tomatoes Rating of the movie
Country where the movie was produced
Language of the movie
Plot of the movie
Actors in the movie
```
['movie-this' screenshot example](images/movie-this.JPG)

***do-what-it-says***
###### COMMAND LINE SYNTAX: node liri.js do-what-it-says
do-what-it-says command will execute what has been 

## Bonus Features
* **spotify-this-song** command will open a window on your default browser and play a 30 second clip of the song being queried
