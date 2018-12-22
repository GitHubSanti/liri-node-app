// Store user input
var userQuery = process.argv;
// process userQuery
userQuery = userQuery.slice(2, userQuery.length);
// Used to capture which liri command user wants to execute
var liriCommand = userQuery[0];

let liriApp = (liriCommand) => {
    switch (liriCommand) {
        case "concert-this":
            // Import ConcertThis functionality
            let ConcertThis = require("./ConcertThis");
            // Create new ConcertThis Object and assign to let concertThis
            let concertThis = new ConcertThis();
            // Parse thru arg after "concert-this" arg
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
            // Import SpotifyThisSong functionality
            let SpotifyThisSong = require("./SpotifyThisSong");
            // Create SpotifyThisSong instance w/ let spotifyThisSong
            let spotifyThisSong = new SpotifyThisSong();
            // Parse thru arg after "spotify-this-song" arg
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
            // Import MovieThis functionality
            let MovieThis = require("./MovieThis")
            // Create MovieThis instance w/ let moviethis
            let movieThis = new MovieThis();
            // Parse thru arg after "movie-this" arg
            let movieArray = userQuery.slice(1, userQuery.length);
            let movie = "";
            for (const x in movieArray) {
                movie += movieArray[x] + "+";
            }
            movie = movie.slice(0, movie.length - 1);
            movieThis.makeOMDbAPICall(movie);
            break;
        case "do-what-it-says":
            // Core node package for reading and writing files
            var fs = require("fs");
            fs.readFile("random.txt", "utf8", function(err, data) {
                // If the code experiences any errors it will log the error to the console.
                if (err) console.log(err);
                // Loop thru text and build out liriCommand first with phrase letter by letter
                let phrase = ``;
                for (const letter of data) {
                    phrase += letter;
                    switch (phrase) {
                        case "concert-this":
                            // Import ConcertThis functionality
                            let ConcertThis = require("./ConcertThis");
                            // Create new ConcertThis Object and assign to let concertThis
                            let concertThis = new ConcertThis();
                            // pick out concert of interest
                            let concert = data.slice(phrase.length + 2, data.length - 1);
                            concertThis.makeBandsInTownAPICall(concert)
                            break;
                        case "spotify-this-song":
                            // Import SpotifyThisSong functionality
                            let SpotifyThisSong = require("./SpotifyThisSong");
                            // Create SpotifyThisSong instance w/ let spotifyThisSong
                            let spotifyThisSong = new SpotifyThisSong();
                            let song = data.slice(phrase.length + 2, data.length - 1);
                            spotifyThisSong.makeSpotifyAPICall(song);
                            break;
                        case "movie-this":
                            // Import MovieThis functionality
                            let MovieThis = require("./MovieThis")
                            // Create MovieThis instance w/ let moviethis
                            let movieThis = new MovieThis();
                            let movie = data.slice(phrase.length + 2, data.length - 1);
                            movieThis.makeOMDbAPICall(movie);
                            break;
                        default:
                            break;
                    }
                }
            });
            break;
        default:
            console.log("liri doesn't recognize this command :/");
            break;
    }   
}

let continueQuerying = () => {
    var inquirer = require("inquirer");
    inquirer.prompt([{
        type: "confirm",
        name: "continueQuerying",
        message: "Do you want to execute another query?"
    }]).then(function(res) {
        console.log(res.continueQuerying);
    });
}

// Execute liri function
liriApp(liriCommand)
