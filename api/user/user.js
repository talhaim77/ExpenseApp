const { express } = require('../../server/server');
const router = express.Router();


//get deals around
router.get('', async (request, response) => {
    const { category, distance, latitude, longtitude } = request.query;
    // const coordinates = JSON.parse(coordinatesFromQuery);
});

//add deal
router.post('', async (request, response) => {
    const deal = request.body;
});

//edit deal
router.post('/:id', async (request, response) => {
    const deal = request.body;
    const { id } = request.params;
});

//delete deal
router.delete('/:id', async (request, response) => {
    const { id } = request.params;
});

router.get('/location', async (request, response) => {
    console.log('in api/deals/location');
    const { dealsID } = request.query;

    // console.log(dealsID);
    getDealsLocation(dealsID)
        .then((res) => {
            response.send(res);
        }).catch((err) => {
            console.log('in error func');
            response.status(400).send(err.message);
        });
});

//get deal
router.get('/:id', async (request, response) => {
    const { id } = request.params;
    console.log('in api/deals/getdeal');
});


module.exports = router;