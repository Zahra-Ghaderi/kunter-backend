
const config = {
    user: 'Zefreh_SQLLogin_1',
    password: 'afy56an6jg',
    server: 'MadaenDB.mssql.somee.com',
    database:'MadaenDB',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
      options:{
        instanceName: '',
        trustServerCertificate: true,         
        encrypt: false
    }, 
    port:1433  
};

module.exports = config;   