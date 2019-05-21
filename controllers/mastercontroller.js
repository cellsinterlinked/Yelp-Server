var express = require('express');
var router = express.Router();
var axios = require('axios');

let url = 'https://api.yelp.com/v3/businesses/search?location=';

router.get('/:city/:state/:pricingInfo', (req, res) => {
    console.log("stuff");
    axios({
        method: 'get',
        url: url+`${req.params.city}${req.params.state}&price=${req.params.pricingInfo}`,
        headers: {
            Authorization: 'Bearer ZSxnG9nSDL4ri_0IouhHnO9yNnBSivVABa10ibZZlgy8XTsKW3Mz3Zcx95Tf677jg_0Xrx4g_4QKf7oGvGonq85fASHCcR-PoT8nZhLJGGnlpHBsoo0ENcp00R7kXHYx',
            'Content-Type': 'application/json'
        }
    })
    .then(response => { 
        res.send(response.data)
    })
    .catch(err => res.status(500).json(
        {error: err }
    ));
});

module.exports = router;