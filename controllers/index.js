const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//const postRoutes = require("./api/post-routes");
//const postRoutes = require("./api");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router.use("/api/posts", postRoutes);

module.exports = router;
