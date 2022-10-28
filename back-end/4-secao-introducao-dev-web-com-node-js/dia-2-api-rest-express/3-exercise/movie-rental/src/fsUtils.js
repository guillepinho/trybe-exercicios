const fs = require('fs').promises;
const path = require('path');

const DIR_PATH = '../data/movies.json';

const readMovies = async () => {
  try {
    const data = await fs.readFile(path.resolve(
      __dirname,
      DIR_PATH,
    ));
    const jsonedData = JSON.parse(data);
    return jsonedData;
  } catch (e) {
    console.log(e.message);
  }
};

const getNextId = (array) => {
  let highestID = array[0].id;
  array.forEach((each) => {
    if (each.id > highestID) highestID = each.id;
  });
  return highestID + 1;
};

const writeNewMovie = async (newMovie) => {
  const oldMovies = await readMovies();
  const id = getNextId(oldMovies);
  const newMovieObject = { id, ...newMovie };

  try {
    await fs.writeFile(
      path.resolve(__dirname, DIR_PATH),
      JSON.stringify([...oldMovies, newMovieObject]),
    );
  } catch (e) {
    console.log(e.message);
  }
};

const updateMovie = async (id, data) => {
  const oldMovies = await readMovies();

  const updatedData = { id, ...data };
  const updatedMovies = oldMovies.reduce((movieArray, cur) => {
    if (cur.id === id) return [...movieArray, updatedData];
    return [...movieArray, cur];
  }, []);

  try {
    await fs.writeFile(
      path.resolve(__dirname, DIR_PATH),
      JSON.stringify(updatedMovies),
    );
  } catch (e) {
    console.log(e.message);
  }
};

const deleteMovie = async (id) => {
  const oldMovies = await readMovies();
  const updatedMovies = oldMovies.filter((each) => each.id !== id);

  try {
    await fs.writeFile(
      path.resolve(__dirname, DIR_PATH),
      JSON.stringify(updatedMovies),
    );
  } catch (e) {
    console.log(e.message);
  }
};

const searchMovie = async (query) => {
  const movies = await readMovies();

  const queriedMovie = movies.filter((each) => each.movie.toLowerCase().includes(query));
  return queriedMovie;
};

module.exports = {
  readMovies,
  writeNewMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
};