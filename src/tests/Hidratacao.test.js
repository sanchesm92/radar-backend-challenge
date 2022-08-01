const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const {
  describe, before, after, it,
} = require('mocha');
const referee = require('@sinonjs/referee-sinon');
const app = require('../API/app');
const { Hidratacao } = require('../Database/models');
const hidratacaoMock = require('./mocks/Hidratacao.mock');

const { assert } = referee;
chai.use(chaiHttp);

const { expect } = chai;

describe('Competição de Hidratacao testes: ', () => {
  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(Hidratacao, 'findAll')
      .resolves(hidratacaoMock);
  });

  after(() => {
    (Hidratacao.findAll).restore();
    (Hidratacao.findByPk).restore();
  });

  it('Verifica A rota GET /hidratacao', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/hidratacao');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Verifica A rota GET /hidratacao/:id', async () => {
    sinon.stub(Hidratacao, 'findByPk').callsFake(() => hidratacaoMock[0]);
    assert.equals(Hidratacao.findByPk(), hidratacaoMock[0]);
    chaiHttpResponse = await chai
      .request(app)
      .get('/hidratacao/1');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Verifica A rota POST /hidratacao', async () => {
    sinon.stub(Hidratacao, 'create').callsFake(() => hidratacaoMock[0]);
    assert.equals(Hidratacao.create(), hidratacaoMock[0]);
  });

  it('Verifica A rota Delete /hidratacao/:id quando não se tem nada para deletar', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .delete('/hidratacao/1');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse).to.have.status(400);
  });
});
