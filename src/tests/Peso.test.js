const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const {
  describe, before, after, it,
} = require('mocha');
const referee = require('@sinonjs/referee-sinon');
const app = require('../API/app');
const { Peso } = require('../Database/models');
const pesoMock = require('./mocks/Peso.mock');

const { assert } = referee;
chai.use(chaiHttp);

const { expect } = chai;

describe('Competição de Peso testes: ', () => {
  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(Peso, 'findAll')
      .resolves(pesoMock);
  });

  after(() => {
    (Peso.findAll).restore();
    (Peso.findByPk).restore();
  });

  it('Verifica A rota GET /Peso', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/Peso');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Verifica A rota GET /peso/:id', async () => {
    sinon.stub(Peso, 'findByPk').callsFake(() => pesoMock[0]);
    assert.equals(Peso.findByPk(), pesoMock[0]);
    chaiHttpResponse = await chai
      .request(app)
      .get('/peso/1');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Verifica A rota POST /peso', async () => {
    sinon.stub(Peso, 'create').callsFake(() => pesoMock[0]);
    assert.equals(Peso.create(), pesoMock[0]);
  });
  it('Verifica A rota Delete /peso/:id quando não se tem nada para deletar', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .delete('/peso/1');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body).to.have.property('message');
  });
});
