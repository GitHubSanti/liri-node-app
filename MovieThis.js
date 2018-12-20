// Used to mask API Keys
require("dotenv").config();
// Used to make API call to OMDDB
var axios = require("axios");
// Object created using constructor for results of movie-this query
var MovieThis = function() {
    this.makeOMDbAPICall = function(movie) {
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + process.env.OMDb).then(
            function(response) {
                console.log(`Movie Title: ` + response.data.Title);
                console.log(`Release Year: ` + response.data.Year);
                console.log(`IMDB Rating: ` + response.data.Rated);
                for (const iterator in response.data.Ratings) {
                    for (const key in response.data.Ratings[iterator]) {
                        const element = response.data.Ratings[iterator][key];
                        if (response.data.Ratings[iterator][key] == `Rotten Tomatoes`) {
                            console.log(element + ` Rating: ` + response.data.Ratings[iterator].Value);
                        }
                    }
                }
                console.log(`Country Produced in: ` + response.data.Country);
                console.log(`Language: ` + response.data.Language);
                console.log(`Plot: ` + response.data.Plot);
                console.log(`Actors: ` + response.data.Actors);
            }
        );
    }
}

module.exports = MovieThis;