// Used to mask API Keys
require("dotenv").config();
// Used to make API call to BandsInTown
var axios = require("axios");
// Used to format date of events
var moment = require("moment");

var ConcertThis = function() {
    this.concertName;
    this.concertVenue;
    this.concertTime;

    this.makeBandsInTownAPICall = function(concert) {
        let requestURL =
            "https://rest.bandsintown.com/artists/" +
            concert +
            "/events?app_id=" + process.env.BANDS_IN_TOWN;
        axios.get(requestURL).then(function(response) {
            console.log("Number of upcoming events: " + response.data.length);
            console.log(
                "*****************************************************************************"
            );
            for (const iterator in response.data) {
                this.eventRow = response.data[iterator];
                concertName = "";
                if (eventRow.description == "") {
                    concertName = "Venue Name: ";
                    concertName += eventRow.venue["name"];
                } else if (eventRow.description !== "") {
                    concertName = "Concert Name: ";
                    concertName += eventRow.description;
                }
                concertVenue = "Location: ";
                concertVenue += eventRow.venue["city"] + ", ";
                concertVenue += eventRow.venue["country"];
                concertTime = moment(eventRow.datetime).format("MM/DD/YYYY");
                console.log(concertName);
                console.log(concertVenue);
                console.log("Time: " + concertTime);
                console.log(
                    "*****************************************************************************"
                );
            }
        });
    }

}

module.exports = ConcertThis;