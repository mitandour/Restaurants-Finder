/** Each restaurant is linked to 1 city, a restaurant can serve many different cuisines */

const RESTAURANTS = [
  {
  "id": 1,
  "name": "Labadie, Rodriguez and Schmitt",
  "email": "ggonnin0@wiley.com",
  "telephone": "(471) 5073228",
  "city_id": 1,
  "image": "https://source.unsplash.com/1600x900/?food,meal"
}, {
  "id": 2,
  "name": "Schaden, McLaughlin and Lind",
  "email": "gconradie1@issuu.com",
  "telephone": "(790) 2196807",
  "city_id": 2,
  "image": "https://source.unsplash.com/1600x900/?food,dessert"
}, {
  "id": 3,
  "name": "Miller LLC",
  "email": "dsiveyer2@auda.org.au",
  "telephone": "(178) 4986827",
  "city_id": 3,
  "image": "https://source.unsplash.com/1600x900/?food,brunch"
}, {
  "id": 4,
  "name": "Boyer LLC",
  "email": "bessame3@wix.com",
  "telephone": "(794) 7414278",
  "city_id": 4,
  "image": "https://source.unsplash.com/1600x900/?restaurant"
}, {
  "id": 5,
  "name": "Kling, Mitchell and Muller",
  "email": "mbercher4@infoseek.co.jp",
  "telephone": "(868) 4461075",
  "city_id": 5,
  "image": "https://source.unsplash.com/1600x900/?food,restaurant"
}, {
  "id": 6,
  "name": "Shanahan Group",
  "email": "gkelley5@toplist.cz",
  "telephone": "(458) 5644846",
  "city_id": 1,
  "image": "https://source.unsplash.com/1600x900/?restaurant,food"
}, {
  "id": 7,
  "name": "Gleichner Group",
  "email": "flottrington6@jugem.jp",
  "telephone": "(573) 9049697",
  "city_id": 1,
  "image": "https://source.unsplash.com/1600x900/?restaurant,dessert"
}, {
  "id": 8,
  "name": "Thompson, Abernathy and Abbott",
  "email": "kramme7@mediafire.com",
  "telephone": "(613) 6997931",
  "city_id": 2,
  "image": "https://source.unsplash.com/1600x900/?dessert,restaurant"
}, {
  "id": 9,
  "name": "Lindgren, Hammes and Conn",
  "email": "mscoggin8@skype.com",
  "telephone": "(804) 1861964",
  "city_id": 3,
  "image": "https://source.unsplash.com/1600x900/?food,meal"
}, {
  "id": 10,
  "name": "Batz-Reichel",
  "email": "mgockelen9@blogs.com",
  "telephone": "(158) 7693055",
  "city_id": 4,
  "image": "https://source.unsplash.com/1600x900/?meal,restaurant"
}, {
  "id": 11,
  "name": "Skiles-Johnson",
  "email": "kcottinghama@time.com",
  "telephone": "(682) 1173152",
  "city_id": 5,
  "image": "https://source.unsplash.com/1600x900/?restaurant,meal"
}, {
  "id": 12,
  "name": "Predovic-Lockman",
  "email": "kromeb@imageshack.us",
  "telephone": "(302) 3826316",
  "city_id": 1,
  "image": "https://source.unsplash.com/1600x900/?food"
}, {
  "id": 13,
  "name": "Bosco-White",
  "email": "mkobielac@dailymail.co.uk",
  "telephone": "(241) 6352672",
  "city_id": 1,
  "image": "https://source.unsplash.com/1600x900/?brunch,restaurant"
}, {
  "id": 14,
  "name": "Runolfsdottir LLC",
  "email": "oprattingtond@ebay.co.uk",
  "telephone": "(869) 2688205",
  "city_id": 2,
  "image": "https://source.unsplash.com/1600x900/?brunch"
}, {
  "id": 15,
  "name": "Kertzmann and Sons",
  "email": "dboltee@mozilla.org",
  "telephone": "(222) 5877664",
  "city_id": 3,
  "image": "https://source.unsplash.com/1600x900/?dessert"
}, {
  "id": 16,
  "name": "Jenkins-Dare",
  "email": "eakeherstf@github.io",
  "telephone": "(986) 1663459",
  "city_id": 4,
  "image": "https://source.unsplash.com/1600x900/?restaurant,brunch"
}, {
  "id": 17,
  "name": "Kessler, Hamill and Osinski",
  "email": "hperrygog@ycombinator.com",
  "telephone": "(646) 7642709",
  "city_id": 5,
  "image": "https://source.unsplash.com/1600x900/?brunch,food"
}, {
  "id": 18,
  "name": "Haley, Schneider and Crist",
  "email": "mhawkshawh@hexun.com",
  "telephone": "(107) 2480930",
  "city_id": 2,
  "image": "https://source.unsplash.com/1600x900/?restaurant,food"
}, {
  "id": 19,
  "name": "Harvey-Luettgen",
  "email": "ysarchwelli@scientificamerican.com",
  "telephone": "(501) 9813290",
  "city_id": 1,
  "image": "https://source.unsplash.com/1600x900/?meal,food"
}, {
  "id": 20,
  "name": "Stiedemann, Johnston and Effertz",
  "email": "nduffreej@usgs.gov",
  "telephone": "(904) 8630712",
  "city_id": 2,
  "image": "https://source.unsplash.com/1600x900/?meal"
}

];

const CITIES = [
  {
  'id': 1,
  'city': "Cacequi"
  }, {
  'id': 2,
  'city': "Bang Phae"
  }, {
  'id': 3,
  'city': "Adelaide Mail Centre"
  }, {
  'id': 4,
  'city': "Wugong"
  }, {
  'id': 5,
  'city': "Iwkowa"
}]


const CUISINES = [
  {
    'id': 1,
    'name': 'American',
  },
  {
    'id': 2,
    'name': 'Chinese',
  },
  {
    'id': 3,
    'name': 'Italian',
  },
  {
    'id': 4,
    'name': 'Senegalese',
  },
  {
    'id': 5,
    'name': 'French',
  },
  {
    'id': 6,
    'name': 'Japaned',
  },
  {
    'id': 7,
    'name': 'Korean',
  },
  {
    'id': 8,
    'name': 'Mediteranean',
  },
  {
    'id': 9,
    'name': 'Brasilan',
  },
  {
    'id': 10,
    'name': 'Mexican',
  }
];



const RESTAURANTS_CUISINES = [
  {
  "id": 1,
  "restaurant_id": 1,
  "cuisine_id": 5
}, {
  "id": 2,
  "restaurant_id": 2,
  "cuisine_id": 2
}, {
  "id": 3,
  "restaurant_id": 3,
  "cuisine_id": 3
}, {
  "id": 4,
  "restaurant_id": 4,
  "cuisine_id": 4
}, {
  "id": 5,
  "restaurant_id": 5,
  "cuisine_id": 5
}, {
  "id": 6,
  "restaurant_id": 6,
  "cuisine_id": 6
}, {
  "id": 7,
  "restaurant_id": 7,
  "cuisine_id": 7
}, {
  "id": 8,
  "restaurant_id": 8,
  "cuisine_id": 8
}, {
  "id": 9,
  "restaurant_id": 9,
  "cuisine_id": 9
}, {
  "id": 10,
  "restaurant_id": 10,
  "cuisine_id": 10
}, {
  "id": 11,
  "restaurant_id": 11,
  "cuisine_id": 5
}, {
  "id": 12,
  "restaurant_id": 12,
  "cuisine_id": 1
}, {
  "id": 13,
  "restaurant_id": 13,
  "cuisine_id": 2
}, {
  "id": 14,
  "restaurant_id": 14,
  "cuisine_id": 3
}, {
  "id": 15,
  "restaurant_id": 15,
  "cuisine_id": 4
}, {
  "id": 16,
  "restaurant_id": 16,
  "cuisine_id": 5
}, {
  "id": 17,
  "restaurant_id": 17,
  "cuisine_id": 6
}, {
  "id": 18,
  "restaurant_id": 18,
  "cuisine_id": 7
}, {
  "id": 19,
  "restaurant_id": 19,
  "cuisine_id": 8
}, {
  "id": 20,
  "restaurant_id": 20,
  "cuisine_id": 9
}, {
  "id": 21,
  "restaurant_id": 0,
  "cuisine_id": 10
}, {
  "id": 22,
  "restaurant_id": 1,
  "cuisine_id": 1
}, {
  "id": 23,
  "restaurant_id": 2,
  "cuisine_id": 1
}, {
  "id": 24,
  "restaurant_id": 3,
  "cuisine_id": 2
}, {
  "id": 25,
  "restaurant_id": 4,
  "cuisine_id": 3
}, {
  "id": 26,
  "restaurant_id": 5,
  "cuisine_id": 4
}, {
  "id": 27,
  "restaurant_id": 6,
  "cuisine_id": 5
}, {
  "id": 28,
  "restaurant_id": 7,
  "cuisine_id": 6
}, {
  "id": 29,
  "restaurant_id": 8,
  "cuisine_id": 7
}, {
  "id": 30,
  "restaurant_id": 9,
  "cuisine_id": 8
}
]

module.exports = {
  RESTAURANTS,
  CUISINES,
  CITIES,
  RESTAURANTS_CUISINES
}