const { express } = require('../server/server');
const groupRoutes = require('./groups/groups');
const userRoutes = require('./user/user');
const expenseRoutes = require('./expense/expense');

const router = express.Router();

router.use('/expense', expenseRoutes);
router.use('/user', userRoutes);
router.use('/groups', groupRoutes);

module.exports = router;