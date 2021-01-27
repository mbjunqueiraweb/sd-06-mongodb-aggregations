db.trips.aggregate([
  {
    $match: {
      $and: [
        { birthYear: { $nin: [""] } },
        { birthYear: { $exists: 1 } },
      ],
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);
