use('hotels')
db.hotel.update(
    {
        planningToolId : 1049858
    },
    {
        $set : {
            status : 'n'
        }
    }
)