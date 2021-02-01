const arrayActors = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate([
  { $match: { countries: "USA", "tomatoes.viewer.rating": { $gte: 3 }, cast: { $exists: true } } },
  { $addFields: { num_favs: { $size: { $setIntersection: ["$cast", arrayActors] } } } },
  { $sort: { num_favs: -1, "tomatoes.viewer.rating": -1, title: -1 } },
  { $skip: 24 },
  { $project: { title: true, _id: false } },
  { $limit: 1 },
]);
