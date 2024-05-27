import { Sequelize } from 'sequelize';

const dbUserName = process.env.DB_USERNAME
const dbName = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbLocalhost = process.env.LOCALHOST

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(dbUserName, dbName, dbPassword, {
  host: dbLocalhost, logging: console.log,
  dialect:  'postgres' 
});


//testing connection 

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export {connectDB};
export default sequelize;