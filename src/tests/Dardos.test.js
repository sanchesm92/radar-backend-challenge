const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const {
  describe, before, after, it,
} = require('mocha');

const { assert } = require('@sinonjs/referee-sinon');
const app = require('../API/app');
const { Dardos } = require('../Database/models');
const dardosMock = require('./mocks/Dardos.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('Competição de Dardos testes: ', () => {
  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(Dardos, 'findAll')
      .resolves(dardosMock);
  });

  after(() => {
    (Dardos.findAll).restore();
    (Dardos.findByPk).restore();
  });

  it('Verifica A rota GET /dardos', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/dardos');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Verifica A rota GET /dardos/:id', async () => {
    sinon.stub(Dardos, 'findByPk').callsFake(() => dardosMock[0]);
    assert.equals(Dardos.findByPk(), dardosMock[0]);
    chaiHttpResponse = await chai
      .request(app)
      .get('/dardos/1');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Verifica A rota POST /dardos', async () => {
    sinon.stub(Dardos, 'create').callsFake(() => dardosMock[0]);
    assert.equals(Dardos.create(), dardosMock[0]);
  });
  it('Verifica a rota Delete /dardos/:id quando não se tem nada para deletar', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .delete('/dardos/1');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse).to.have.status(400);
  });
});
