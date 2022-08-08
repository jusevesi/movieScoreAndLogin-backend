const executeQuery = require("../services/mysql.service");

const moviesController = {

    getAllMovies: async (req, res) => {
        try {
            //pagination limits
            const page = req.query.page;
            const limit = req.query.limit;
            const offset = (page*limit)-limit;
            //SELECT movies created by the user *session.idUser* and by others *public* with a limit for page
            const movies = await executeQuery(`SELECT * FROM movies WHERE owner = 'public' or owner = '${req.session.idUser}' LIMIT ${limit} OFFSET ${offset}`);

            if (movies.length > 0) {
                res.status(200).json({ message: 'Movies Scores:', movies });
            } else {
                res.status(404).json({ message: 'There are no movies on the main list yet' });
            }
        } catch (error) {
            res.json(error);
        }
    },
    createMovie: async (req, res) => {
        try {
            const { name, genre, score, prizes, year, owner } = req.body;
            const movie = await executeQuery(`SELECT * FROM movies WHERE name = '${name}'`);

            if (movie.length > 0 && owner === movie[0].owner) {
                res.status(404).json({ message: "This movie already exists" });
            } else {
                const response = await executeQuery(`INSERT INTO movies ( name, genre, score, prizes, year, owner ) VALUES ('${name}','${genre}','${score}','${prizes}','${year}','${owner}')`);
                res.status(201).json({ message: 'Movie created!' });
            }
        } catch (error) {
            res.json(error);
        }
    },
    updateMovie: async (req, res) => {
        try {
            const id = req.params.id;
            const { name, genre, score, prizes, year, owner } = req.body;
            const movie = await executeQuery(`SELECT * FROM movies WHERE idmovies = '${id}'`);

            if (movie.length > 0 && owner === movie[0].owner) {
                const response = await executeQuery(`UPDATE movies SET name = '${name}', genre = '${genre}', score = '${score}', prizes= '${prizes}', year ='${year}', owner= '${owner}' WHERE idmovies = '${id}'`);
                res.status(200).json({ message: 'Movie updated!' });
            } else {
                res.status(404).json({ message: "You cant edit this movie because it is public, doesn't exist anymore or belongs to someone else" });
            }
        } catch (error) {
            res.json(error);
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await executeQuery(`DELETE FROM movies WHERE (idmovies = '${id}');`);

            if (response.affectedRows >= 0) {
                res.status(200).json({ message: 'Movie deleted!' });
            } else {
                res.status(404).json({ message: 'This movie doesnt exist anymore' });
            }
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = moviesController;