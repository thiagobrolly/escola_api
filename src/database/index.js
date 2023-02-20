import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';
import User from '../models/User';

const models = [Aluno, User, Foto];

const connection = new Sequelize(dbConfig);

// Aluno.init(connection);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
