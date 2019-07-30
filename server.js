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

var googleData = data => {
  app.get("/googledata", (req, res) => {
    res.send(data);
  });
};

var apiData = () => {
  let resFull = [];
  axios
    .get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=AIzaSyARAq8VaHRUFkVEuiGQmlvgHbzurfJmHOY"
    )
    .then(response => {
      for (let i = 0; i < response.data.results.length; i++) {
        resFull.push(response.data.results[i].name);
      }
      // console.log(response.data.results[0].name);
      return resFull;
    })
    .then(googleData(resFull))
    .catch(error => {
      console.log(error);
    });
};

apiData();

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
