//Makes sensitive API keys environmental variable - protected.
require("dotenv").config();

var fs = require("fs");
var inquirer = require("inquirer");

var axios = require("axios");
var moment = require("moment");

var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var divider = "\n-------------------------------------------------------\n";

//Handle CLI arguments
// var liriArgOne = process.argv[2];
// var liriArgArray = [];
// for (var i = 3; i < process.argv.length; i++) {
// 	liriArgArray.push(process.argv[i]);
// }
// var liriArgTwo = liriArgArray.join(" ");

//concert-this
function concertThis(artist) {
	if (!artist) {
		artist = "Red Hot Chili Peppers";
	}
	axios
		.get(
			`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`
		)
		.then(function(response) {
			console.log(divider);
			// loop for all venues
			for (var i = 0; i < response.data.length; i++) {
				// artist lineup loop
				let lineup = [];
				for (var j = 0; j < response.data[i].lineup.length; j++) {
					lineup.push(response.data[i].lineup[j]);
				}
				console.log(`Band lineup:`, lineup.join(", "));
				console.log(`Venue name:`, response.data[i].venue.name);
				if (response.data[i].venue.region != "") {
					console.log(
						`Location: ${response.data[i].venue.city}, ${
							response.data[i].venue.region
						}, ${response.data[i].venue.country}`
					);
				} else {
					console.log(
						`Location: ${response.data[i].venue.city}, ${
							response.data[i].venue.country
						}`
					);
				}
				console.log(
					`Date: ${moment(response.data[i].datetime).format("l")}`
				);

				console.log(divider);
			}
		})
		.catch(function(error) {
			console.log(error);
		});
}

// NEED TO ADD
// 'If no song is provided then your program will default to "The Sign" by Ace of Base.'

//spotify-this-song
function spotifyThisSong(track) {
	if (!track) {
		track = "The Sign Ace of Base";
	}
	spotify
		.search({ type: "track", query: track, limit: 1 })
		.then(function(response) {
			//console.log(response);
			console.log(divider);

			//Artist(s)
			console.log(
				`* Artist(s):`,
				response.tracks.items[0].artists[0].name
			);

			// The song's name
			console.log(`\n* Song name:`, response.tracks.items[0].name);

			//Spotify preview link
			console.log(
				`\n* Spotify song preview link:`,
				response.tracks.items[0].preview_url
			);

			//Spotify link
			console.log(
				`\n* Spotify link:`,
				response.tracks.items[0].external_urls.spotify
			);

			// The album that the song is frome
			console.log(`\n* Album:`, response.tracks.items[0].album.name);
			console.log(divider);
		})
		.catch(function(err) {
			console.log(err);
		});
}

//movie-this
function movieThis(movie) {
	var yourKey = "trilogy";
	if (!movie) {
		movie = "Mr. Nobody";
	}
	axios
		.get(`http://www.omdbapi.com/?apikey=${yourKey}&t=${movie}`)
		.then(function(response) {
			// console.log(response.data);
			console.log(divider);
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
			console.log(divider);
		})
		.catch(function(error) {
			console.log(error);
		});
}

function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) throw err;
		//logging the raw data from the asynchronous function
		console.log(data);
		var parameters = [];
		parameters = data.split(",");
		liriArgOne = parameters[0];
		liriArgTwo = parameters[1];
		chooseFunction();
	});
}

function chooseFunction() {
	if (liriArgOne === "concert-this") {
		concertThis(liriArgTwo);
	} else if (liriArgOne === "spotify-this-song") {
		spotifyThisSong(liriArgTwo);
	} else if (liriArgOne === "movie-this") {
		movieThis(liriArgTwo);
	} else if (liriArgOne === "do-what-it-says") {
		doWhatItSays();
	} else {
		return false;
	}
}

inquirer
	.prompt([
		{
			type: "list",
			name: "LIRI",
			message: "Choose a LIRI function:",
			choices: [
				"Look up concerts for a band",
				"Look up a song on Spotify",
				"Look up a movie",
				"Do what random.txt says"
			]
		},
		{
			type: "input",
			name: "search_term",
			message: "Enter the name to be searched for:"
		}
	])
	.then(answers => {
		console.log(JSON.stringify(answers, null, "  "));
		console.log(answers.LIRI);
		switch (answers.LIRI) {
			case "Look up concerts for a band":
				concertThis(answers.search_term);
				break;
			case "Look up a song on Spotify":
				spotifyThisSong(answers.search_term);
				break;
			case "Look up a movie":
				movieThis(answers.search_term);
				break;
			case "Do what random.txt says":
				doWhatItSays(answers.search_term);
				break;
		}
	});

// Backup of Inquirer Function

// inquirer
// 	.prompt([
// 		{
// 			type: "list",
// 			name: "LIRI",
// 			message: "Choose a LIRI function:",
// 			choices: [
// 				"Look up concerts for a band",
// 				"Look up a song on Spotify",
// 				"Look up a movie",
// 				"Do what random.txt says"
// 			]
// 		},
// 		{
// 			type: "input",
// 			name: "search_term",
// 			message: "Enter the name to be searched for:"
// 		}
// 	])
// 	.then(answers => {
// 		console.log(JSON.stringify(answers, null, "  "));
// 		console.log(answers.LIRI);
// 		switch (answers.LIRI) {
// 			case "Look up concerts for a band":
// 				concertThis(answers.search_term);
// 				break;
// 			case "Look up a song on Spotify":
// 				spotifyThisSong(answers.search_term);
// 				break;
// 			case "Look up a movie":
// 				movieThis(answers.search_term);
// 				break;
// 			case "Do what random.txt says":
// 				doWhatItSays(answers.search_term);
// 				break;
// 		}
// 	});

// chooseFunction();
