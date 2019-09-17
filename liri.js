require("dotenv").config();

var fs = require("fs");

var keys = require('./keys.js');

var query = process.argv[2];
var option = process.argv[3];

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

// Twitter function

    var client = new Twitter(keys.twitter);
    var params = {
    screen_name: "VancityReynolds",
    count: 20
    };

    function myTweets() {
        client.get("statuses/user_timeline", params, function(error, tweets, response) {
            if (!error) {
                for (i = 0; i < tweets.length; i++) {
                    console.log(tweets[i].created_at);
                    console.log(tweets[i].text);
                }
            } else {
                console.log(error);
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