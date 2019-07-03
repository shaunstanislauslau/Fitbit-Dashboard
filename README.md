#Fitbit Dashboard

Features:-

1. Pull User Profile
2. Pull

`brew install node`
`npm install -g nodemon`
`node fitbit-user-script-data.js`

If you look into `fitbit-user-script-data.js` , you will see a `path` value which you may append the data endpoint you want according to Fitbit API documentation.

for e.g.
`path: '/1/user/-/activities/heart/date/2019-06-08/1d/1sec/time/00:00/23:59.json'`
`path: '/1/user/-/profile.json'`

you will see an output of data
