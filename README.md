mongoimport -d sureberry -c countries --file ./seeds/countries.json --jsonArray
Countries.find({}, (err, countries) =>{
    res.json(countries)
})
