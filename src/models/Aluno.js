import { Model, DataTypes } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      idade: {
        type: DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Campo idade deve ser um número inteiro',
          },
        },
      },
      peso: {
        type: DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Campo peso deve ser um número',
          },
        },
      },
      altura: {
        type: DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Campo altura deve ser um número',
          },
        },
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}

export default Aluno;
