// Used to mask API Keys
require("dotenv").config();
// Core node package for reading and writing files
var fs = require("fs");
// Store user input
var userQuery = process.argv;
// process userQuery
userQuery = userQuery.slice(2, userQuery.length);
// Used to capture which liri command user wants to execute
var liriCommand = userQuery[0];

switch (liriCommand) {
    case "concert-this":
        // Bring import ConcertThis functionality
        let ConcertThis = require("./ConcertThis");
        // Create new ConcertThis Object and assign to let concertThis
        let concertThis = new ConcertThis();

        let concertArray = userQuery.slice(1, userQuery.length);
        let concert = "";

        for (const x in concertArray) {
            concert += concertArray[x] + " ";
        }
        concert = concert.slice(0, concert.length - 1);
        concert = "" + concert + "";
        concertThis.makeBandsInTownAPICall(concert);
        break;
    case "spotify-this-song":
        //   Create new SpotifyThisSong Object
        let SpotifyThisSong = require("./SpotifyThisSong");
        // Create SpotifyThisSong instance w/ let spotifyThisSong
        let spotifyThisSong = new SpotifyThisSong();

        let songArray = userQuery.slice(1, userQuery.length);
        let song = "";

        for (const x in songArray) {
            song += songArray[x] + " ";
        }
        song = song.slice(0, song.length - 1);
        song = "'" + song + "'";
        spotifyThisSong.makeSpotifyAPICall(song);
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;
    default:
        console.log("liri doesn't recognize this command :/");

        break;
}

// fs.writeFile("song.txt", JSON.stringify(data), function(err) {

//     // If the code experiences any errors it will log the error to the console.
//     if (err) {
//         return console.log(err);
//     }

//     // Otherwise, it will print: "movies.txt was updated!"
//     console.log("song.txt was updated!");

// });