use('hotels')

db.rapid_hotel.find(
    {
        hotelCode : "83997061"
    },
    {
        roomsMap : 1,
        _id : 1
    }
)