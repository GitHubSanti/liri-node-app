## liri-node-app (Language Interpretation and Recognition Interface)
**PURPOSE:** This is a CLI app that recognizes four commands ([**concert-this**](#concert-this), [**spotify-this-song**](#spotify-this-song), [**movie-this**](#movie-this), [**do-what-it-says**](#do-what-it-says)). These commands will bring back different information. Read below to learn about the syntax used for these commands and the information retrieved.

### ***concert-this***
###### COMMAND LINE SYNTAX: node liri.js concert-this 'artist/band name here'
concert-this command will bring back the following data:
```
# of upcoming events by the artist/band
Concert/Venue/Festival name
Event location
Date of the event (formatted as 'MM/DD/YYYY')
```
['concert-this' screenshot example](images/concert-this.JPG) <br/>
[Back to the top of README.md](#liri-node-app-language-interpretation-and-recognition-interface)

### ***spotify-this-song***
###### COMMAND LINE SYNTAX: node liri.js spotify-this-song 'song name here'
spotify-this-song command will bring back the following data:
 ```
Artist(s)
Song's name
Preview link of the song from Spotify
Album name the song is from
 ```
 ['spotify-this-song' screenshot example](images/spotify-this-song.JPG) <br/>
 [Back to the top of README.md](#liri-node-app-language-interpretation-and-recognition-interface)


### ***movie-this***
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
['movie-this' screenshot example](images/movie-this.JPG) <br/>
[Back to the top of README.md](#liri-node-app-language-interpretation-and-recognition-interface)


### ***do-what-it-says***
###### COMMAND LINE SYNTAX: node liri.js do-what-it-says
do-what-it-says command will execute the command found within the random.txt file. The random.txt file will have the following SYNTAX:
###### RANDOM.TXT SYNTAX: [concert-this|spotify-this-song|movie-this],"[parameter to pass to query]"
The following [random.txt screenshot](images/'random.txt'-example.JPG) indicates to use the movie-this liri query and the "Finding Nemo" parameter for that query. That will produce the following output: <br/>
[do-what-it-says screenshot example](images/do-what-it-says.JPG)<br/>
[Back to the top of README.md](#liri-node-app-language-interpretation-and-recognition-interface)

## Bonus Features
* **spotify-this-song** command will open a window on your default browser and play a 30 second clip of the song being queried <br/>
[Back to the top of README.md](#liri-node-app-language-interpretation-and-recognition-interface)
