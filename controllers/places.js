const express = require('express')
const app = express()
const router =  express.Router()

// GET /places
router.get('/', (req, res) => {
   let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/h-thai-ml.jpg'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/catCafe.jpg'
          }]
    
    res.render('places/index', {places})
  })
  
module.exports = router
