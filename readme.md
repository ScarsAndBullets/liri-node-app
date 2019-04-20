# LIRI - a NODE.JS application

The programming of LIRI was designed to fulfill basic academic requirements for NODE.JS and Node Packages from NPM. LIRI uses a list menu that allows you to query one of three entertainment API's with user text input, and an option to query those API's by formatted terms in a text file.

## Getting Started

Start by cloning the LIRI repo to a chosen directory on your system:
```
$ git clone git@github.com:ScarsAndBullets/liri-node-app.git
```
Once you have successfully cloned the repository to your system, ensure that you are running NODE and NODE Package Manager (NPM). Use the following commands to see which version of NODE and NPM you are running.
```
$ node -v
```
```
$ npm -v
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

    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need to place them in the `.env` file we'll create during installation.

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

-   [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
-   [Maven](https://maven.apache.org/) - Dependency Management
-   [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

-   **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

-   Hat tip to anyone whose code was used
-   Inspiration
-   etc
