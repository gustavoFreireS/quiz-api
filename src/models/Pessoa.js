module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define(
    'Pessoas',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {},
  );
  Pessoa.associate = () => {};
  return Pessoa;
};
