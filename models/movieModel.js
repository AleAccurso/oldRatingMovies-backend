const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    movieDbId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    genre: { type: Array, required: true },
    grade: { type: Number, required: true }, //vote_average in themoviedb
    date: { type: String, required: true },
    poster: { type: String, required: true },
    director: { type: String, required: true },
    overview: { type: String, required: true },
});

module.exports = mongoose.model("Movie", MovieSchema);