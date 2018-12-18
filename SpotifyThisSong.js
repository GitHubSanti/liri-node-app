  // API Spotify package
  var Spotify = require("node-spotify-api");
  // Open browser from node
  var opn = require("opn");
  // Store API keys
  var keys = require("./keys.js");
  // Instance of Spotify object created to obtain API keys
  spotify = new Spotify(keys.spotify);


  // Object created using constructor for results of spotify-this-song query
  var SpotifyThisSong = function() {
      artists = [];
      this.songName;
      this.previewlink;
      this.songAlbum;

      this.makeSpotifyAPICall = function(song) {
          // Spotify constructor to store IDs needed for API call
          function Spotify(jsKey) {
              this.id = jsKey["id"];
              this.secret = jsKey["secret"];
          }

          spotify.search({
                  type: "track",
                  query: "'" + song + "'",
                  limit: 1
              },
              function(err, data) {
                  if (err) {
                      return console.log("Error occurred: " + err);
                  }
                  // Artist(s)
                  data.tracks.items[0].artists.forEach(element => {
                      artists.push(element.name);
                  });
                  // The song's name
                  this.songName = data.tracks.items[0].name;
                  // A preview link of the song from Spotify
                  this.previewlink = data.tracks.items[0].preview_url;
                  // The album that the song is from
                  this.songAlbum = data.tracks.items[0].album.name;

                  showResults();
                  // Open default browser to play previewlink of song
                  opn(this.previewlink);
              }
          )
      };

      // Display to terminal results of Spotify API Call
      showResults = function() {
          this.artistList = "";
          for (var val in this.artists) {
              val = this.artists + ",";
              artistList = val;
          }
          // Remove last comma added
          artistList = artistList.slice(0, -1);
          console.log(
              "Artists: " +
              artistList +
              "\n" +
              "Song Name: " +
              this.songName +
              "\n" +
              "Preview link: " +
              this.previewlink +
              "\n" +
              "Album: " +
              this.songAlbum
          );
      };
  };

  module.exports = SpotifyThisSong;