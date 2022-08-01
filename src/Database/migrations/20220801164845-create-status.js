module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Status', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      yoga: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hidratacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dardos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Status');
  },
};
