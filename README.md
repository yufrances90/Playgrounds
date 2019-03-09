# Playgrounds

Playground is a full-stack application that allows a user to keep track of playgrounds and weather.

### Preparation

* Run MongoDB
* Create a new database called **appDb**
* Create three collections: **Config**, **Playgrounds**, **Weather**
* In the **Config** collection, Create a new document like the following:
    > google_api_key: **(Your Google API Key Here)**
    > open_weather_api_key: **(Your Open Weather API Key Here)** 

#### NOTE: YOU MUST PURCHASE **Historical weather collection** FROM OPEN WEATHER TO USE THE **Check Weather** FEATURE

### Installation

* `git clone` [https://github.com/yufrances90/Playgrounds.git](https://github.com/yufrances90/Playgrounds.git)
* `cd back-end => cd playgrounds_server => cd src`
* `npm install`
* `node server.js`
* *Open a new terminal*
* `cd front-end => cd playgrounds_client`
* `npm install`
* `yarn start`

### Todos