//Facilitate public repo without exposing sensitive Spotify API keys
require("dotenv").config();

var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");
var moment = require("moment");

var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Global variable for UI formatting
var divider = "\n-------------------------------------------------------\n";

// Global variables for LIRI command and the search term for the API call.
var command;
var term;

inqOne();

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
			if (JSON.stringify(response.data) === "[]") {
				console.log(
					`"${term}" doesn't appear to be touring currently.`
				);
				inqTwo();
			} else {
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
				inqOne();
			}
		})
		.catch(function(error) {
			console.log(
				`"${term}" isn't in the www.bandsintown.com database. Try a different band.`
			);
			inqTwo();
			// console.log(error);
		});
}

//spotify-this-song
function spotifyThisSong(track) {
	if (!track) {
		track = "The Sign Ace of Base";
	}
	spotify
		.search({ type: "track", query: track, limit: 1 })
		.then(function(response) {
			// console.log(response);
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
			inqOne();
		})
		.catch(function(err) {
			console.log(
				`"${term}" could not be found, try a different song title.`
			);
			inqTwo();
			// console.log(err);
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
			if (
				response.data.Reponse == "false" ||
				response.data.Error == "Movie not found!"
			) {
				console.log(
					`"${term}" could not be found, try a different movie title.`
				);
				inqTwo();
			} else {
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
				inqOne();
			}
		})
		.catch(function(error) {
			// console.log(error);
		});
}

function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) throw err;
		command = data.split(",")[0];
		term = data.split(",")[1];
		main();
		inqOne();
	});
}

function inqOne() {
	command = "";
	term = "";
	inquirer
		.prompt({
			type: "list",
			name: "command",
			message: "Choose a LIRI command:",
			choices: [
				"Look up concerts for a band",
				"Look up a song on Spotify",
				"Look up a movie",
				"Do what random.txt says",
				"Exit LIRI"
			]
		})
		.then(answers => {
			switch (answers.command) {
				case "Look up concerts for a band":
					command = "concert-this";
					inqTwo();
					break;
				case "Look up a song on Spotify":
					command = "spotify-this-song";
					inqTwo();
					break;
				case "Look up a movie":
					command = "movie-this";
					inqTwo();
					break;
				case "Do what random.txt says":
					doWhatItSays();
					break;
				case "Exit LIRI":
					break;
			}
		});
}

function inqTwo() {
	inquirer
		.prompt({
			type: "input",
			name: "term",
			message: "Enter the name to look up:"
		})
		.then(answers => {
			term = answers.term;
			main();
		});
}

function main() {
	switch (command) {
		case "concert-this":
			concertThis(term);
			break;
		case "spotify-this-song":
			spotifyThisSong(term);
			break;
		case "movie-this":
			movieThis(term);
			break;
	}
}
