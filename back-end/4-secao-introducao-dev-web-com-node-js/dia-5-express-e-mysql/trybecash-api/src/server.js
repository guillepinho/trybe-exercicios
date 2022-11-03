require('dotenv').config();
const app = require('./app');
const connection = require('./db/connection');

const port = 3001;

app.listen(port, async () => {
  console.log(`A API Trybecash está sendo executada na porta ${port}`);

  // O código abaixo é para testarmos a conexão com o MySQL
  const [ result ] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL Connection status: ok.');
  }
})