# Eat-Da_Burger!

![Project Status](https://img.shields.io/badge/status-in%20progress-yellow)
![License](https://img.shields.io/badge/License-wtfpl-blue)

## Description
This project is designed using a MVC file structure. The application uses an appropriate range of models, views, and controllers to neatly organize program elements. The application utilizes a mySQL database to manage persistent data.

## Table of Contents
- User Notes
- Installation
- Usage


### User Notes
This application is intended to be launched on Heroku. However, there was an unresolvable error connecting to JAWSDB. The incomplete application can be found at [https://floating-waters-38263.herokuapp.com/](https://floating-waters-38263.herokuapp.com/)

### Installation
To install and run this application locally, clone the repository and run the following git command:
```git
npm install
```

In order to set up the mySQL database, open <b>/config/connection.js</b>, fill connection with your credentials, and run the following code to execute a mySQL connection:

```git
mysql -u root -p
```
(enter your password)

```mysql
source schema.sql
source seeds.sql
```

### Usage
Once the node modules are installed and the server is successfully running, a main page will load with a section to enter burgers to be made and such burgers allocated to lists of devoured burgers and burgers ready to eat. The user can go through the lists to eat burgers, have them made again, or have them removed from the lists.



*© 2020 ajhami - Alexander James Hamilton. All Rights Reserved.*