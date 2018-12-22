## liri-node-app (Language Interpretation and Recognition Interface)
**PURPOSE:** This is a CLI app that recognizes four commands (**concert-this**, **spotify-this-song**, **movie-this**, **do-what-it-says**). These commands will bring back different information. Read below to learn about the syntax used for these commands and the information retrieved.

***concert-this***
###### COMMAND LINE SYNTAX: node liri.js concert-this 'artist/band name here'
concert-this command will bring back the following data:
```
number of upcoming events by the artist/band
concert/venue/festival name
event location
date of the event (formatted as 'MM/DD/YYYY')
```
['concert-this' screenshot example](images/concert-this.JPG)

***spotify-this-song***
###### COMMAND LINE SYNTAX: node liri.js spotify-this-song 'song name here'

spotify-this-song command will bring back the following data:
 ```
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
 ```
 ['spotify-this-song' screenshot example](images/spotify-this-song.JPG)
**movie-this**

**do-what-it-says**

## Bonus Features
* spotify-this-song command will open a window on your default browser and play 30 sec clip of the song being queried
