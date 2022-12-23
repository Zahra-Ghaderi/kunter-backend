require('dotenv').config()

const config = {
    user: process.env.REACT_APP_SQL_User,
    password: process.env.REACT_APP_SQL_Pass,
    server: process.env.REACT_APP_SQL_server,
    database:process.env.REACT_APP_SQL_DB,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
      options:{ 
        instanceName: process.env.REACT_APP_SQL_Instance,
        trustServerCertificate: true,         
        encrypt: false
    }, 
    port:1433  
};

module.exports = config;   