use("oceanjar");
var cities = ['Bentota', 'Kandy']

city_ids = db.city
  .find({
    name: { $in: cities },
  })
  .toArray()
  .map((city) => city.planningid.toNumber());

city_ids.forEach((city_id) => {
  const cid = city_id;
  const sp = "TRIPLAZE";
  const mg = `${sp}\\\|${cid}_SEP`;
  const datab = `DATABASE\\\|${cid}_SEP`;

  console.log(mg);

  result = db.hotel_alternates.remove({ hotelCacheKey: new RegExp(mg) });
  console.log(result);
  result = db.room_alternates.remove({ hotelCacheKey: new RegExp(mg) });
  console.log(result);

  console.log(datab);

  result = db.hotel_alternates.remove({ hotelCacheKey: new RegExp(datab) });
  console.log(result);
  result = db.room_alternates.remove({ hotelCacheKey: new RegExp(datab) });
  console.log(result);
});
