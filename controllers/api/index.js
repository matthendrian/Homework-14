const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
//const postRoutes = require("./api/post-routes");

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
//router.use("/api/posts", postRoutes);

module.exports = router;
