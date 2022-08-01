module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dardos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      competicao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      atleta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Dardos');
  },
};
