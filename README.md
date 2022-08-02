# RADAR-BACKEND-CHALLENGE
  API RESTful em nodeJS criada para o COR (Comitê Olímpico Radar), com as seguintes categorias:

  - Competição de hidratação;

  - Competição de yoga;

  - Competição de perda de peso;

  - Competição de dardos;

# Stacks utilizadas

  - Javascript;
  - NodeJs;
  - Express;
  - Sequelize;
  - Joi;
  - Mocha;
  - Chai;
  - Sinon;
  - Cors;
  - Sqlite

# Funcionalidades

  - Criar uma competição;
  - Cadastrar resultados para uma competição;

  Ex: Fazendo uma requisição do tipo POST para a rota **/peso**

  ```json
  {
    "atleta": "Claudio",
    "value": "10",
    "unidade": "cal"
  }
  ```
  Objeto que será cadastrado: 

  ```json
  {
    "competicao": "competição perda de peso", 
    "atleta": "Claudio", 
    "value": "10", 
    "unidade": "cal"
  }
  ```
  **Obs:** caso não envie o campo unidade ele terá o seu padrão default:
    yoga em segundos;
    hidratacao em litros;
    perda de peso em calorias;
    dardos em metros;

  - Finalizar uma competição.
    A rota /${Nome da competição}/finish
    irá finalizar a competição mostrando o ranking e bloquear criação de novos competidores.
    obs: a competição será reiniciada caso não tenha participantes cadastrados.

  - Retornar o ranking da competição.
    A rota /${Nome da competição}/ranking irá mostrar o ranking parcial da competição.

  # Requisições e Retornos
  GET: 
  ```json
  [
    {
      "id": "1",
      "competicao": "competição perda de peso", 
      "atleta": "Claudio", 
      "value": "10", 
      "unidade": "cal"
    }
  ]
  ```
  GET (ranking)
  ```json
  {
    "status": 200,
    "Ranking": [
      {
        "position": 1,
        "atleta": "Renata"
      },
      {
        "position": 2,
        "atleta": "Claudio"
      },
      {
        "position": 3,
        "atleta": "Vinicíus"
      }
    ]
  }
  ```

  POST: 
  ```json
  {
    "status": 201,
    "message": "Created",
    "object": {
      "id": 1,
      "atleta": "Claudio",
      "value": "10",
      "unidade": "cal",
      "competicao": "competição perda de peso"
    }
  }
  ```
  PUT
  ```json
  {
    "status": 200,
    "message": "Updated"
  }
  ```
  DELETE


# Como rodar a API

  - Clone esse repositório
  - Rode o comando npm install para instalar as dependencias
  - Rode o comando npm start, ele irá executar o banco de dados e iniciar a aplicação na porta 3000

# Endpoints
  Tipos de rotas:
  - /NomeDaRota
  - /NomeDaRota/:id
  - /NomeDaRota/ranking
  - /NomeDaRota/finish
  - http://localhost:3000/NomeDaRota

  **Obs:** as rotas podem ser: 
  - yoga
  - peso
  - hidratacao
  - dardos

# Encontrou algum bug ou tem alguma sugestão para me ajudar a melhorar?
  Entre em contato comigo pelo links:
  - https://www.linkedin.com/in/felipesanchesm/
  - https://github.com/sanchesm92

# Divirta-se.
