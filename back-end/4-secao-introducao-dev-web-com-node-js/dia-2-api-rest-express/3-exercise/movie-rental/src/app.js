const express = require('express');
const {
  readMovies,
  writeNewMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
} = require('./fsUtils');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  try {
    const movies = await readMovies();
    return res.status(200).json({ movies });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readMovies();
    const thisMovie = movies.find((each) => each.id === Number(id));
  
    if (!thisMovie) return res.status(404).json({ message: 'Movie not found' });
    return res.status(200).json({ movie: thisMovie });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const obj = { movie, price };
    await writeNewMovie(obj);
  
    return res.status(201).json({ message: `Added ${movie.movie} successfully!` });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body; 
    await updateMovie(Number(id), data);
  
    return res.status(201).json({ message: `Updated ${data.movie} successfully!` });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteMovie(Number(id));
  
    return res.status(204).json({ message: `Removed movie with Id ${id} successfully!` });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (q) {
      const foundMovie = await searchMovie(q);
      if (foundMovie.length === 0) return res.status(200).json({ message: 'No movie found' });
      return res.status(200).json(foundMovie);
    }
    return res.status(200).end();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

module.exports = app;