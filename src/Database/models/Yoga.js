const competicao = (sequelize, DataTypes) => {
  const Competicao = sequelize.define('Yoga', {
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
    tableName: 'Yoga',
  });
  return Competicao;
};
module.exports = competicao;
