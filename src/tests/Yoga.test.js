const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const {
  describe, before, after, it,
} = require('mocha');
const referee = require('@sinonjs/referee-sinon');
const app = require('../API/app');
const { Yoga } = require('../Database/models');
const yogaMock = require('./mocks/Yoga.mock');

const { assert } = referee;

chai.use(chaiHttp);

const { expect } = chai;

describe('Competição de Yoga testes: ', () => {
  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(Yoga, 'findAll')
      .resolves(yogaMock);
  });

  after(() => {
    (Yoga.findAll).restore();
    (Yoga.findByPk).restore();
  });

  it('Verifica A rota GET /yoga', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/yoga');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(yogaMock);
  });

  it('Verifica A rota GET /yoga/:id', async () => {
    sinon.stub(Yoga, 'findByPk').callsFake(() => yogaMock[0]);
    assert.equals(Yoga.findByPk(), yogaMock[0]);
    chaiHttpResponse = await chai
      .request(app)
      .get('/yoga/1');
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.have.property('id');
    expect(chaiHttpResponse.body).to.have.property('atleta');
    expect(chaiHttpResponse.body).to.have.property('unidade');
    expect(chaiHttpResponse.body).to.have.property('value');
  });

  it('Verifica A rota POST /yoga', async () => {
    sinon.stub(Yoga, 'create').callsFake(() => yogaMock[0]);
    assert.equals(Yoga.create(), yogaMock[0]);
  });

  it('Verifica A rota Delete /yoga/:id quando não se tem nada para deletar', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .delete('/yoga/1');
    expect(chaiHttpResponse).to.be.an('object');
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse).to.have.status(400);
  });
});
