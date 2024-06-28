var bulk = db.getCollection('hotel').initializeUnorderedBulkOp();
//EXPEDIA
//AGODA
bulk.execute();
