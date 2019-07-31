const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const https = require("https");
const axios = require("axios");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.json());

// app.get("/test", (req, res) => {
//   let userdata = https.get(
//     "https://jsonplaceholder.typicode.com/users",
//     response => {
//       return response;
//     }
//   );
//   console.log(userdata);
// });

var googleData = (data, route) => {
  app.get(route, (req, res) => {
    res.send(data);
  });
};

var apiData = (url, route) => {
  let resFull = [];
  axios
    .get(url)
    .then(response => {
      for (let i = 0; i < response.data.results.length; i++) {
        resFull.push(response.data.results[i]);
      }
      // console.log(response.data.results[0].name);
      return resFull;
    })
    .then(googleData(resFull, route))
    .catch(error => {
      console.log(error);
    });
};

const mainStreetURL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=AIzaSyARAq8VaHRUFkVEuiGQmlvgHbzurfJmHOY";
const annArborResURL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyARAq8VaHRUFkVEuiGQmlvgHbzurfJmHOY&query=Restaurants+in+48197";
const zipcodeResURL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyARAq8VaHRUFkVEuiGQmlvgHbzurfJmHOY&query=Restaurants+in+";

apiData(mainStreetURL, "/googledata");
apiData(annArborResURL, "/annarbor");

app.get("/zipcodeSearch/:id", (req, res) => {
  let resFull = [];
  axios.get(zipcodeResURL + req.params.id).then(response => {
    for (let i = 0; i < response.data.results.length; i++) {
      resFull.push(response.data.results[i]);
    }
    console.log(resFull);
    // return resFull;
    res.send(resFull);
  });
  // .then(res.send(resFull));
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
