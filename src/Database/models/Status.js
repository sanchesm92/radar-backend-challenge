const status = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    yoga: DataTypes.STRING,
    hidratacao: DataTypes.STRING,
    peso: DataTypes.STRING,
    dardos: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Status',
  });
  return Status;
};
module.exports = status;
