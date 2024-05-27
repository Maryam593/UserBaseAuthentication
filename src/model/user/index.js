//calling model 

import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';

const UserAuthenticationModel = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    // firstName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // lastName: {
    //   type: DataTypes.STRING,
    //   // allowNull defaults to true
    // },
    Name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
       type: DataTypes.STRING,
       allowNull: false,
       unique: true
    },
    password : {
        type: DataTypes.STRING,
    },
    phoneNo : { 
          type : DataTypes.DOUBLE,
          validate: {
            len : [10,12]
          }
    }

  },
  {
    // Other model options go here
    timestamps : false
  },
);

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

export default UserAuthenticationModel;