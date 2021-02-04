db.trips.aggregate([
  { $group: {
    _id: { $dayOfWeek: "$startTime" },
    totalDias: { $sum: 1 },
  } },
  { $project: {
    _id: false,
    diaDaSemana: "$_id",
    total: "$totalDias",
  } },
  { $sort: {
    total: -1,
  } },
  { $limit: 1 },
]);
