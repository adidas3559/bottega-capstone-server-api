module.exports = {
  //This is my localhost, ask if it can be other localhosts
    // HOST: "localhost",
    HOST: "192.168.1.13",
    PORT: "3306",
    USER: "forbes",
    PASSWORD: "@SMN3559indians!",
    DB: "rugby",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };