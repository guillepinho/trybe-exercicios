require('dotenv/config');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

// A chave secreta, é com ela que os dados do usuário serão criptografados/encriptados. Em projetos reais, armazene em uma variável de ambiente.
const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const isBodyValid = (username, password) => username && password;

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!isBodyValid(username, password)) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login'});

    const user = await UserService.getByUsername(username);

    if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário inexistente ou senha inválida'});;

    // Criamos uma config básica para o nosso JWT
    // expiresIn -> tempo pelo qual o token é válido
    // algorithm -> algoritmo que vc usa para assinar a mensagem

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id }}, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};
