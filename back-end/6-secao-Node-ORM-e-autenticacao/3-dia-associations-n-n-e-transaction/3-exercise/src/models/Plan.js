module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    'Plan',
    {
      planId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      timestamps: false,
      underscored: true,
    });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'planId', as: 'patient' });
  };

  return Plan;
};