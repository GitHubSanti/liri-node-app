            // Core node package for reading and writing files
            var fs = require("fs");
            // Object created using constructor for results of do-what-it-says query
            var DoWhatItSays = function() {
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
                
            }

            module.exports = DoWhatItSays;