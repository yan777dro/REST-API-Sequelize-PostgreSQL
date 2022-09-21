module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "your-password",
    DB: "employeesdb",
    dialect: "postgres",
    pool: {   
      max: 5,    //max and min connection in a pool, max # of millisecond the connection can be idle
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
