db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: { $nin: ["Crime", "Horror"] },
      "imdb.rating": { $in: ["PG", "G"] },
      languages: { $all: ["English", "Spanish"] },
    },
  },
  {
    $project: { _id: false, titulo: "$title", avaliado: "$imdb.rating", notaIMDB: "$imdb.rating", votosIMDB: "$imdb.votes", ano: "$year" },
  },
]);
