//Makes sensitive API keys environmental variable - protected.
require("dotenv").config();
//console.log(process.env);

var axios = require("axios");
var moment = require("moment");

var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

//Handle CLI arguments
var liriArgOne = process.argv[2];
var liriArgArray = [];
for (var i = 3; i < process.argv.length; i++) {
	liriArgArray.push(process.argv[i]);
}
var liriArgTwo = liriArgArray.join(" ");

//concert-this
function concertThis(artist) {
	axios
		.get(
			`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`
		)
		.then(function(response) {
			console.log(
				"\n-------------------------------------------------------\n"
			);

			for (var i = 0; i < response.data.length; i++) {
				//artist lineup
				let lineup = [];
				for (var j = 0; j < response.data[i].lineup.length; j++) {
					lineup.push(response.data[i].lineup[j]);
				}
				console.log(`Band lineup:`, lineup.join(", "));
				console.log(`Venue name:`, response.data[i].venue.name);
				console.log(
					`Location`,
					response.data[i].venue.city,
					response.data[i].venue.country
				);
				console.log(
					`Date:`,
					moment(response.data[i].datetime).format("l")
				);

				console.log(
					"\n-------------------------------------------------------\n"
				);
			}

			//for (var i = 0; i < response.data.length; i++) {}

			// Name of the venue
			// Venue location
			// Date of the Event (use moment to format this as "MM/DD/YYYY")
		})
		.catch(function(error) {
			console.log(error);
		});
}

// NEED TO ADD
// 'If no song is provided then your program will default to "The Sign" by Ace of Base.'

//spotify-this-song
function spotifyThisSong(track) {
	spotify
		.search({ type: "track", query: track, limit: 1 })
		.then(function(response) {
			console.log(
				"\n-------------------------------------------------------\n"
			);
			// Artist(s)
			// console.log(
			// 	`\n----------\nresponse.tracks.items[0].artists[0].name`
			// );
			console.log(
				`* Artist(s):`,
				response.tracks.items[0].artists[0].name
			);

			// The song's name
			// console.log(`\n----------\nresponse.tracks.items[0].name`);
			console.log(`\n* Song name:`, response.tracks.items[0].name);

			// A preview link of the song from Spotify
			// console.log(`\n----------\nresponse.tracks.items[0].preview_url`);
			console.log(
				`\n* Spotify song preview link:`,
				response.tracks.items[0].preview_url
			);

			// The album that the song is frome
			// console.log(`\n----------\nresponse.tracks.items[0].album.name`);
			console.log(`\n* Album:`, response.tracks.items[0].album.name);
			console.log(
				"\n-------------------------------------------------------\n"
			);
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
			// console.log(response.data);
			console.log(
				"\n-------------------------------------------------------\n"
			);
			console.log("* Title: ", response.data.Title);
			console.log("\n* Year released: ", response.data.Year);
			console.log(
				"\n*",
				response.data.Ratings[0].Source,
				"rating:",
				response.data.Ratings[0].Value
			);
			console.log(
				"\n*",
				response.data.Ratings[1].Source,
				"rating:",
				response.data.Ratings[1].Value
			);
			console.log("\n* Production country: ", response.data.Country);
			console.log("\n* Languages: ", response.data.Language);
			console.log("\n* Plot: ", response.data.Plot);
			console.log("\n* Actors: ", response.data.Actors);
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
