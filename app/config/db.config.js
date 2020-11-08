module.exports = {
  //This is my localhost, ask if it can be other locol hosts
    HOST: "localhost",
    // HOST: "192.168.1.13",
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