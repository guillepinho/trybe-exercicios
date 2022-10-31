const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const mockFile = {
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
};

describe('GET - Endpoint: /chocolates', function () {
  sinon.stub(fs.promises, 'readFile')
    .resolves(JSON.stringify(mockFile));

  afterEach(function () {
    sinon.restore();
  });

  it('Retorna a lista complete de chocolates', async function () {
    response = await chai
      .request(app)
      .get('/chocolates');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(mockFile.chocolates);
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    beforeEach(function () {
      sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockFile));
    });

    afterEach(sinon.restore);

    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna o número total de chocolates na base', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('totalChocolates');
      expect(response.body.totalChocolates).to.equal(4);
    });
  });

  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna o item buscado', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('chocolates');
      expect(response.body.chocolates).to.deep.equal(
        [
          {
            "id": 3,
            "name": "Mon Chéri",
            "brandId": 2
          },
          {
            "id": 4,
            "name": "Mounds",
            "brandId": 3
          }
        ]);
    });

    it('Retorna not found caso não encontre produtos', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('chocolates');
      expect(response.body.chocolates).to.deep.equal([]);
    });
  });
});

describe('PUT - Endpoint: /chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'writeFile').resolves();
  });

  afterEach(sinon.restore);

  describe('Usando o método PUT em /chocolates/:id para atualizar o id 1', function () {
    it('Atualiza o nome do chocolate id 1', async function () {
      const response = await chai.request(app)
        .put('/chocolates/1')
        .send({
          name: "Mint Pretty Good",
          brandId: 2,
        });

      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('chocolate');
      expect(response.body.chocolate).to.deep.equal({
        id: 1,
        name: "Mint Pretty Good",
        brandId: 2,
      });
    });
  });


});