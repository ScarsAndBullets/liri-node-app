//Makes sensitive API keys environmental variable - protected.
require("dotenv").config();
//console.log(process.env);

var axios = require("axios");

var keys = require("./keys");

//constructor function for spotify keys
var Spotify = require("node-spotify-api");

//pull in spotify keys for axios call
var spotify = new Spotify(keys.spotify);
//console.log(spotify);

//Store first argument
var liriArgOne = process.argv[2];
//Parse and store 2nd Argument
var liriArgArray = [];
for (var i = 3; i < process.argv.length; i++) {
	liriArgArray.push(process.argv[i]);
}
var liriArgTwo = liriArgArray.join(" ");
//console.log(`LiriArgOne = ${liriArgOne}\nLiriArgTwo = ${liriArgTwo}\n`);

//concert-this
function concertThis(artist) {
	axios
		.get(
			`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`
		)
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
}

//spotify-this-song
function spotifyThisSong(track) {
	spotify
		.search({ type: "track", query: track, limit: 1 })
		.then(function(response) {
			console.log(response);
			console.log(`\n----------\n`);
			console.log(response.tracks);
		})
		.catch(function(err) {
			console.log(err);
		});
}

//movie-this
function movieThis(movie) {
	var yourKey = "trilogy";
	axios
		.get(`http://www.omdbapi.com/?apikey=${yourKey}&t=${movie}`)
		.then(function(response) {
			console.log(
				"\n-------------------------------------------------------\n"
			);
			console.log("* Title: ", response.data.Title);
			console.log("* Year released: ", response.data.Year);
			console.log(
				"*",
				response.data.Ratings[0].Source,
				"rating:",
				response.data.Ratings[0].Value
			);
			console.log(
				"*",
				response.data.Ratings[1].Source,
				"rating:",
				response.data.Ratings[1].Value
			);
			console.log("* Production country: ", response.data.Country);
			console.log("* Languages: ", response.data.Language);
			console.log("* Plot: ", response.data.Plot);
			console.log("* Actors: ", response.data.Actors);
			console.log(
				"\n-------------------------------------------------------\n"
			);
		})
		.catch(function(error) {
			console.log(error);
		});
}

if (liriArgOne === "concert-this") {
	concertThis(liriArgTwo);
} else if (liriArgOne === "spotify-this-song") {
	spotifyThisSong(liriArgTwo);
} else if (liriArgOne === "movie-this") {
	movieThis(liriArgTwo);
} else if (liriArgOne === "do-what-it-says") {
	doWhatitSays();
} else {
	return false;
}
