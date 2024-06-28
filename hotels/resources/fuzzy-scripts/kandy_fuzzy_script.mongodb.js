var bulk = db.getCollection('hotel').initializeUnorderedBulkOp();
//EXPEDIA
// Oak Ray Serene Garden Hotel -> Oak Ray Serene Garden Hotel
bulk.find({"hotelCodeBySourceProvider.EXPEDIA":"2133781"}).update({$set:{"hotelCodeBySourceProvider.TRIPLAZE":"3850"}});
//AGODA
// Oak Ray Serene Garden Hotel -> Oak Ray Serene Garden Hotel
bulk.find({"hotelCodeBySourceProvider.AGODA":"195543"}).update({$set:{"hotelCodeBySourceProvider.TRIPLAZE":"3850"}});
bulk.execute();
