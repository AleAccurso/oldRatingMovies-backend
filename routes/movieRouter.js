const express = require("express");
const movieModel = require("../models/movieModel");
const router = express.Router();

const baseURLapi = "https://api.themoviedb.org/3";
const token = "7052aca73e0bf3c626e62371dd016c37";
const axios = require("axios");

router.get("/", (req, res) => {
  const movies = movieModel.find({}, (err, movies) => {
    if (err) {
      console.log("RETRIEVE error: " + err);
      res.status(500).send("Error");
    } else if (movies) {
      res.status(200).json(movies);
    }
  });
});

//Get a specific movie by id
router.get("/:id", (req, res) => {
  const movies = movieModel.findOne(
    { movieDbId: req.params.id },
    (err, movies) => {
      if (err) {
        console.log("RETRIEVE error: " + err);
        res.status(500).send("Error");
      } else if (movies) {
        res.status(200).json(movies);
      }
    }
  );
});

//Add a movie
router.post("/", (req, res) => {
  const movie = new movieModel({
    ...req.body,
  });
  movie
    .save()
    .then(() => res.status(201).json({ message: "Movie register sucessfull" }))
    .catch((error) => res.status(400).json({ error }));
});

//Update a movie
router.patch("/:id", (req, res) => {
  const movie = movieModel.updateOne(
    { _id: req.params.id },
    req.body,
    (err, movie) => {
      if (err) {
        console.log("RETRIEVE error: " + err);
        res.status(500).send("Error");
      } else {
        res.status(200).json(req.body);
      }
    }
  );
});

//Delete movie from DB
router.route("/delete/:id").delete((req, res) => {
  movieModel.deleteOne({ id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.status(200).json("Movie deleted");
    }
  });
});

//Get search result from api
router.post("/search/:title", (req, res) => {
  let url =
    baseURLapi +
    "/search/movie?api_key=" +
    token +
    "&query=" +
    req.params.title.replace(" ", "+");

  axios
    .get(url)
    .then((response) => {
      res.status(200).json(response.data["results"]);
    })
    .catch((error) => {
      console.log(error);
    });
});

//Get the information about a movie from api
router.post("/:id/getInfo", (req, res) => {
  axios
    .get(
      baseURLapi +
        "/movie/" +
        req.params.id +
        "?api_key=" +
        token +
        "&append_to_response=credits"
    )
    .then((response) => {
      let fullMovieData = response.data;
      let director;

      Object.entries(fullMovieData.credits.crew).forEach((crew) => {
        if (crew[1].job == "Director") {
          director = crew[1].name;
        }
      });

      let infoToReturn = {
        movieDbId: fullMovieData["id"],
        title: fullMovieData["original_title"],
        genre: fullMovieData["genres"],
        grade: fullMovieData["vote_average"],
        date: fullMovieData["release_date"],
        poster: fullMovieData["poster_path"],
        director: director,
        overview: fullMovieData["overview"],
      };

      res.status(200).json(infoToReturn);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
