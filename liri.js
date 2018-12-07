// Used to mask API Keys
require("dotenv").config();
// Core node package for reading and writing files
var fs = require("fs");
// Load the NPM Package inquirer
var inquirer = require("inquirer");
// Store API keys
var keys = require("./keys.js");
// Open browser from node
var opn = require('opn');

// Function to carry out spotify-this-song command
function getSpotifyThisSong(song) {
    // API Spotify package
    var Spotify = require('node-spotify-api');

    // Object created using constructor for results of spotify-this-song query
    var SpotifyThisSong = function() {
        this.artists = [];
        this.songName;
        this.previewlink;
        this.songAlbum;
        this.showResults = function() {
            this.artistList = ""
            for (var val in this.artists) {
                val = this.artists + ",";
                artistList = val;
            }
            // Remove last comma added
            artistList = artistList.slice(0, -1);
            console.log("Artists: " + artistList + "\n" + "Song Name: " + this.songName + "\n" + "Preview link: " + this.previewlink + "\n" + "Album: " + this.songAlbum)
        }
    };

    // Spotify constructor to store IDs needed for API call
    function Spotify(jsKey) {
        this.id = jsKey["id"];
        this.secret = jsKey["secret"];
    };

    // Instance of Spotify object created
    var spotify = new Spotify(keys.spotify);

    spotify.search({
        type: 'track',
        query: "'" + song + "'",
        limit: 1
    }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        let spotifySongInfo = new SpotifyThisSong();
        // Artist(s)
        data.tracks.items[0].artists.forEach((element) => {
            spotifySongInfo.artists.push(element.name);
        });
        // The song's name
        spotifySongInfo.songName = data.tracks.items[0].name;
        // A preview link of the song from Spotify
        spotifySongInfo.previewlink = data.tracks.items[0].preview_url;
        // The album that the song is from
        spotifySongInfo.songAlbum = data.tracks.items[0].album.name;
        spotifySongInfo.showResults();
        // Open default browser to play previewlink of song
        opn(spotifySongInfo.previewlink);

    });

}


// Ask user for Song
inquirer.prompt([{
    type: "list",
    message: "What operation do you want to carry out?",
    choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "liriCommands"
}]).then(function(UserCommand) {
    console.log(UserCommand.liriCommands)

    switch (UserCommand.liriCommands) {
        case "concert-this":
            inquirer.prompt([{
                type: "input",
                message: "What artist/band? do you want to get upcoming concert info about?",
                name: "artistBand"
            }]).then(function(userResponse) {
                // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
                var axios = require("axios");
                // getSpotifyThisSong(userResponse.song);
                console.log(userResponse.artistBand);
                let requestURL = "https://rest.bandsintown.com/artists/" +  userResponse.artistBand + "/events?app_id=87074fca-89b3-400f-ac6a-9e0d5c3f709a";
                axios.get(requestURL).then(
                    function(response) {
                        console.log(response);
                    }
                );
            });
            break;
        case "spotify-this-song":
            inquirer.prompt([{
                type: "input",
                message: "What song do you want to look up?",
                name: "song"
            }]).then(function(userResponse) {
                getSpotifyThisSong(userResponse.song);
            });
            break;
        case "movie-this":
            console.log("user selected movie-this");
            break;
        case "do-what-it-says":
            console.log("user selected do-what-it-says");
            break;
        default:
            console.log("user selected a command not recognized")
    }

});


// fs.writeFile("song.txt", JSON.stringify(data), function(err) {

//     // If the code experiences any errors it will log the error to the console.
//     if (err) {
//         return console.log(err);
//     }

//     // Otherwise, it will print: "movies.txt was updated!"
//     console.log("song.txt was updated!");

// });