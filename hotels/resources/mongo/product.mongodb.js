use("oceanjar");

db.city.update(
  {
    name : "Bentota"
  },
  {
    $addToSet: {
      hotelProviders : "TRIPLAZE"
    },
    $set : {
      hotelSourceProvider : "TRIPLAZE",
      firstCostingHotelSourceProvider : "TRIPLAZE"
    }
  }
)
