use('hotels')

db.hotel.find(
  {
    'hotelCodeBySourceProvider.EXPEDIA': '11904197'
  }
)