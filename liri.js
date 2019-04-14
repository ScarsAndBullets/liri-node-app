require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var liriArgOne = process.argv[2];

var liriArgArray = [];
for (var i = 3; i < process.argv.length; i++) {
	liriArgArray.push(process.argv[i]);
}
var liriArgTwo = liriArgArray.join(" ");

console.log(`LiriArgOne = ${liriArgOne}\nLiriArgTwo = ${liriArgTwo}\n`);
