const competicao = (sequelize, DataTypes) => {
  const Competicao = sequelize.define('Dardos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    competicao: DataTypes.STRING,
    atleta: DataTypes.STRING,
    value: DataTypes.STRING,
    unidade: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Dardos',
  });
  return Competicao;
};
module.exports = competicao;
