# Liri-Bot

Overview
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Before You Begin

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

Make a new GitHub repository called liri-node-app and clone it to your computer.

To retrieve the data that will power this app, you'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

Node-Spotify-API

Axios

You'll use Axios to grab data from the OMDB API and the Bands In Town API

Moment

DotEnv


Instructions

Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

node_modules
.DS_Store
.env

Make a JavaScript file named keys.js.

Inside keys.js your file will look like this:

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

This file will be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.

If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.

Make a file called random.txt.

Inside of random.txt put the following in with no extra characters or white space:

spotify-this-song,"I Want it That Way"

Make a JavaScript file named liri.js.

At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();

Add the code required to import the keys.js file and store it in a variable.

  var keys = require("./keys.js");

You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);

Make it so liri.js can take in one of the following commands:

concert-this
spotify-this-song
movie-this
do-what-it-says

What Each Command Should Do

node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")

node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

Step One: Visit https://developer.spotify.com/my-applications/#!/

Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

Edit the text in random.txt to test out the feature for movie-this and concert-this.