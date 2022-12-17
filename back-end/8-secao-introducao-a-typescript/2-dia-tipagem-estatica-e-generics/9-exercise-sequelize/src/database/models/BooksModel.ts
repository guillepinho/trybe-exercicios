import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

import Authors from './AuthorsModel';

class Books extends Model {
  declare id: number;
  declare title: string;
  declare author_id: number;
  declare genre_id: number;
}

Books.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  author_id: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'authors',
      key: 'id',
    }
  },
  genre_id: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id',
    }
  }
},
{
  sequelize: db,
  modelName: 'books',
  timestamps: false,
});

Authors.hasMany(Books, { foreignKey: 'author_id' });
Books.belongsTo(Authors, { foreignKey: 'id' });

export default Books;