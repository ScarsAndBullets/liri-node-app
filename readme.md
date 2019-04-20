# LIRI - a NODE.JS application

The programming of LIRI was designed to fulfill basic academic requirements for NODE.JS and Node Packages from NPM. LIRI uses a list menu that allows you to query one of three entertainment API's with user text input, and an option to query those API's by formatted terms in a text file.

## Getting Started

Start by cloning the LIRI repo to a chosen directory on your system:
```
$  git clone git@github.com:ScarsAndBullets/liri-node-app.git
```
Once you have successfully cloned the repository to your system, ensure that you are running NODE and NODE Package Manager (NPM). Use the following commands to see which version of NODE and NPM you are running.
```
$  node -v
```
```
$  npm -v
```
NPM will refer to the `package.json` file to ensure that the correct versions of the required node packages are installed prior to

### Prerequisites

In order to run LIRI:
*  You must have a BASH (or ZSH) terminal running on your computer. Mac users will already have Terminal installed by default.
*  In the terminal you will need to have NODE.JS (an open source server environment that uses JavaScript) and and NPM (NODE Package Manager) which allows you to easily install the correct node packages required to run LIRI.
    * [Install NODE.JS](https://nodejs.org/en/download/package-manager/#macos)
    * [Install Node Package Manager](https://www.npmjs.com/get-npm)
*   If you don't have GIT, you will need to install GIT in order to clone/download the LIRI repository.
    * [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Spotify Developer API key - you will need the ID key and Secret key placed in a .env file (which will be explained in the install instructions).
    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need to place them in the `.env` file we'll create during installation. The `.env` file uses the [DOTENV module](https://www.npmjs.com/package/dotenv) that will store your API keys as a local environmental variable.

### Installing

1. At this point, you should have cloned the LIRI repo to a directory on your local machine and verifief that you have NODE and NPM installed.
2. Install all the necessary NODE moduels to run LIRI - from the liri-node-app directory, run:
```
$  npm i
```
![NPM I](https://github.com/ScarsAndBullets/liri-node-app/tree/master/images/NPM_I.png)
3. Create the `.env` file to store your Spotify API keys, then open the `.env` file:
```
$  touch .env
```
```

$  code .env
```
or
```
$  edit .env
```
4. Store your Spotify API keys in the `.env` file in this format:
```
# Spotify API keys

SPOTIFY_ID=YOUR ID KEY
SPOTIFY_SECRET=YOUR SECRET KEY
```
![ENV API KEYS](https://github.com/ScarsAndBullets/liri-node-app/tree/master/images/ENV_API-KEYS.png)

5. If you've succesfully installed the `liri-node-app`, you should be able to run the app:
```
$  node liri
```
This will bring up the following prompt:
![LIRI PROMPT](https://github.com/ScarsAndBullets/liri-node-app/tree/master/images/NODE_LIRI.png)


## Running the tests

[Short demo video of the app](https://github.com/ScarsAndBullets/liri-node-app/tree/master/images/LIRI_demo.mov)

## Built With

-   [node-spotify-api](https://www.npmjs.com/package/node-spotify-api)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [axios](https://www.npmjs.com/search?q=axios)
-   [Spotify API](https://developer.spotify.com/documentation/web-api/)
-   [Bands In Town API](https://manager.bandsintown.com/support/bandsintown-api)
-   [OMDB API](http://www.omdbapi.com/)
-   [NODE.JS](https://nodejs.org/en/)
-   [NODE Package Manager](https://www.npmjs.com/)
-   [Moment](https://www.npmjs.com/package/moment)

## Authors

-   **Stewart Brough** - _Initial work_ - [ScarsAndBullets](https://github.com/ScarsAndBullets)
