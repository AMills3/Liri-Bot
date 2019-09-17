require("dotenv").config();

var fs = require("fs");

var keys = require('./keys.js');

var query = process.argv[2];
var option = process.argv[3];

var Concert = require("concert");
var Spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");

// Concert function

    var queryUrl = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";

    function getConcert(band) {
        request(queryUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {
            var result  =  JSON.parse(body)[0];
            console.log("Venue name " + result.venue.name);
            console.log("Venue location " + result.venue.city);
            console.log("Date of Event " +  moment(result.datetime).format("MM/DD/YYYY"));
            }
        });
    }

// Spotify function

    var spotify = newSpotify(keys.spotifyKeys);

    function getSpotify(song) {
        if (!song) {
            song = "The Sign";
        }
        spotify.search({
            type: "track",
            query: song
        }, function(err, data) {
            if (err) {
                return console.log("Error occured" + err);

                console.log("Artist: " + data.tracks.items[0].artists[0].name);
                console.log("Song Title: " + data.tracks.items[0].name);
                console.log("Preview Link: " + data.tracks.items[0].preview_url);
                console.log("Album: " + data.tracks.items[0].album.name);
                }
            });
        }

// OMDB Function

        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy";

        function getOmdb(movieName) {
            if (!movieName) {
                movieName = "Mr. Nobody";
            }
            request(queryUrl, function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log("Title of the movie: " + omdb.Title);
                    console.log("Year the movie came out: " + omdb.Year);
                    console.log("imdbRating: " + omdb.imdbRating);
                    console.log("Rotten Tomatoes Rating of the movie: " + omdb.Ratings[1].Value);
                    console.log("Language of the movie: " + omdb.Language);
                    console.log("Plot of the movie: " + omdb.Plot);
                    console.log("Actors in the movie: " + omdb.Actors);
                }
            });
        }

// Read file function

        function readFile() {
            fs.readFile("random.txt", "utf-8", function(error, data) {
                if (error) {
                    return console.log(error);
                }
                
                var dataInfo = data.split(" , ");
                console.log(dataInfo);
            });
        }