use('oceanjar')

var CITY_NAME = ['Anuradhapura', 'Bandarawela', 'Bentota', 'Beruwala', 'Colombo', 'Dambulla', 'Dehiwala-Mount Lavinia', 'Ella', 'Galle', 'Kandy', 'Negombo', 'Nuwara Eliya', 'Yala']
var PROVIDER = "TRIPLAZE"

db.city.find({
    name : {
        $in : CITY_NAME
    }
}).forEach(city => {
    var cityPayload = {
        cityName : city.name,
        cityLatitude : city.latitude,
        cityLongitude : city.longitude,
        provider : PROVIDER,
        reComputeDistance : false,
        providerCityId : city.planningid.valueOf().low,
        minimumDistanceFromHotel : city.minimumDistanceFromHotel
    }
    console.log(JSON.stringify(cityPayload)+',')
})