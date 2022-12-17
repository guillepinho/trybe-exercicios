import sequelize from 'sequelize';
import Authors from './database/models/AuthorsModel';
import Books from './database/models/BooksModel';

(async () => {
  const data = await Authors.findAll({
    include: {
      model: Books,
      attributes: [],
    },
    raw: true,
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
  });

  console.log(data);
  process.exit(0);
})();