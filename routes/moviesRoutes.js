const express = require("express");
const moviesController = require("../controllers/moviesController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware);
router.get('/movies', moviesController.getAllMovies);
router.post('/movies', moviesController.createMovie);
router.put('/movies/:id', moviesController.updateMovie);
router.delete('/movies/:id', moviesController.deleteMovie);

module.exports = router;