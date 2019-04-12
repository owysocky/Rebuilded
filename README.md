# _Rebuilding a Site with Angular_

#### _4/05/2019_

#### By _**Olha Wysocky**_

## Description
_This is a rebuilt Yelp website https://www.yelp.com/biz/dukes-seafood-and-chowder-bellevue-bellevue-3?osq=Restaurants. All functionality descripted below._

## Known Bugs
_No known bugs._

## Specs
* _Reusable components._
* _Router to 'Write Review' page._
* _Firebase Database for reviews._
* _User can add and see review on the main page._
* _Stars in review section are shown accordingly to rating._

## Installation Requirements
* _Download and install Node.js_
* _Download and install TypeScript_

## Database Requirements
* _Make an account at https://firebase.google.com/ website._
* _Click Crate New Project._
* _Select Add Firebase to your web app._
* _In the project folder src/app create file 'api-keys.ts'._
* _Enter Firebase information to 'api-keys.ts' in this format:_
  *  _export const masterFirebaseConfig = {_
  *  _apiKey: "xxxx",_
  *  _authDomain: "xxxx.firebaseapp.com",_
  *  _databaseURL: "https://xxxx.firebaseio.com",_
  *  _storageBucket: "xxxx.appspot.com",_
  *  _messagingSenderId: "xxxx"_
  *  _};_
* _Import file 'sample-views.json' to your Firebase project._
* _In Firebase at Realtime DB page set Rules from false to true._

## Setup instructions
* _On GitHub, navigate to the main page of the repository._
* _On the right find the green button "Clone or download", click it._
* _To clone the repository in Desktop choose "Open in Desktop" or download the ZIP file._
* _For more information, see "Cloning a repository from GitHub to GitHub Desktop."_
* _Use Terminal to install the webpack $ npm install._
* _Use Terminal to run the program with command $ ng serve._

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Technologies Used

* _TypeScript_
* _HTML_
* _Angular_

### License
MIT
**

Copyright (c) 2019 **_Olha Wysocky_**
