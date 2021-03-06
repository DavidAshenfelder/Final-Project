####Truckster####

Description:
Truck Tracker is an application that will connect food truck vendors with their clients. This application will give the clients access to what food trucks are active and where those trucks are located with the ability to favorite trucks and add reviews to truck vendors.

Technologies:
Angular
Angular-ui
underscore
bootstrap
google-maps-api
facebook-api
Owner Api

Features:
-(1)Create API database
-(2)CRUD Truck Profile
-(3)Authentication/Login: this will be handled by boiler plate ng-auth
-(4)CRUD Map Locations.
-(5)CRUD Client Profile


Stories:

(1)Story Name - Create API database
  + Size: Large
  + Value: A user will need to CRUD to a database so that info can be stored and returned to make the application render and display pertinent data.
  + Assumptions: I will be able to create my own API....haha.
  + Acceptance: Users will be able to CRUD to this database.

(2)Story Name - Truck Profile - CREATE/READ/UPDATE/DESTROY
  + Size: Large
  + Value: A user will have the ability to create a profile so that they can connect with clients and clients can view their information.
  + Assumptions:
    - User has the option to login and authenticate with google or facebook api.
  + Acceptance:
    - User will be able to succesfully create a profile.
    - User will be able to READ their profile via GET Method.
    - User will be able to UPDATE their profile via GET/PUT method.
    - User will be able to DESTROY their Profile via DELETE method.

(3)Story Name - Authentication/Login
  + Size: Medium
  + Value: A user will be able to login so that I can store data such as profile info, set truck location, add favorites, and add reviews.
  + Assumptions:
    - user will have an active account that can be authenticated.
    - user will have access to google+ or facebook profile or will be able to create account via email and password.
  + Acceptance: user will have account and will be able to login and authenticate.

(4)Story Name - Map Location - CREATE/READ/UPDATE/DESTROY
  + Size: Extra Large
  + Value: A user will have the ability to create/read/update/destroy their location on a google map so that their clients can access where they will be located and buy their product.
  + Assumptions:
    - user will have created an account and will be able to succesfully login and authenticate.
    - Database will be linked with google-maps-api.
    - location will be rendered on a map that is within view of where the truck is located.
  + Acceptance:
    - The user will successfully be able to input address or location and have that render on a map rendered on the page.
    - User will be able to retrieve their information via the GET method.
    - User will be able to update their location via GET/PUT methods, if they so choose.
    - User will be able to destroy their location.


(5)Story Name - User Profile CREATE/READ/UPDATE/DESTROY
  + Size: Medium
  + Value: User will be able to create profile so that they can login/authenticate so that they can store data on the database to be used for later features. (i.e. Favorites, Reviews/Comments, Message Board, Events, SMS notifications)
  + Assumptions:
    - User has the option to login and authenticate with google or facebook api.
  + Acceptance:
    - User will be able to CRUD on their profile.

Road Map:
- CRUD client Favorites
- CRUD truck reviews
- Check in at Truck Location
- Use client Home and work location to link for "this truck is near you notifications."
- SMS notifications for when the truck is near your (i.e. 10 miles)
- Event CRUD

# Angular Auth Demo with Satellizer

This is a simple demo MEAN application that is intended to demonstrate the use of authentication with [Satellizer](https://github.com/sahat/satellizer) with a small nodejs/express backend, but focusing more on the AngularJS side of things.


#### [Obtaining Oauth Keys](https://github.com/sahat/satellizer#obtaining-oauth-keys)

Please refer to Satellizer's Documentation to learn how to configure and obtain oauth keys.

#### Angular Modules




### Running Locally
- In terminal you need to start mongo => mongod
- If you get the following error when typing mongod `ERROR: dbpath (/data/db) does not exist.` then run the following
```bash
$ sudo mkdir -p /data/db
$ sudo chmod 0755 /data/db
$ sudo chown $USER /data/db
```

- `gulp serve-dev` // starts up the server, opens browser and starts livereload

### Deploying to Heroku

You'll need the [heroku cli toolbelt](https://toolbelt.heroku.com/) to perform the following commands.

```bash
$ heroku create appName
$ heroku addons:add mongolab
$ git push heroku master
```

### Directory Structure

``` javascript
|- app                                  // public folder (angularjs files)
|  |- vendor/                           // bower components
|  |- stylesheets/
|  |- auth/                             // auth feature
|  | |- directives
|  | | |- passwordMatch.js
|  | | |- passwordStrength.js
|  | |- views/
|  | | |- login.html
|  | | |- signup.html
|  | |- auth.login.js
|  | |- auth.logout.js
|  | |- auth.module.js
|  | |- auth.signup.js
|  |- posts/                            // posts feature
|  | |- views/
|  | | |- create.html
|  | | |- edit.html
|  | | |- list.html
|  | | |- show.html
|  | |- posts.js
|  | |- postsController.js
|  | |- postsServices.js
|  |- home/                            // home feature
|  | |- views/
|  | | |- home.html
|  | | |- navbar.html
|  | |- navbar.js
|  |- profile/                        // profile feature
|  | |- views/
|  | | |- profile.html
|  | |- profile.accountService.js
|  | |- profile.controller.js
|  | |- profile.module.js
|  |- app.js                         // main angular application module
|  |- index.html
|- routes
|  |- apiCrud.js
|  |- auth.js
|  |- helpers.js
|  |- profile.js
|- entities
|  |- User.js
|- .bowerrc                           // tells bower where to install dependencies
|- .gitignore
|- config.js                        // All the server side environment secrets
|- server.js                       // main nodejs app file
|- bower.json
|- package.json
|- Procfile

```
