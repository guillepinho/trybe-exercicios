module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    {
      timestamps: false,
      tableName: 'patient_surgeries',
      underscored: true,
    });

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patient',
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
    });
  };

  return PatientSurgery;
};