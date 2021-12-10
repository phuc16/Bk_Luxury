module.exports = app => {
    const account = require("../controllers/account.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Account
    router.post("/", account.create);
  
    // Retrieve all Accounts
    router.get("/", account.findAll);

    router.post('/login', account.logIn);

    // Retrieve a single Account with id
    router.get("/:id", account.findById);
  
    // Update an Account with id
    router.put("/:id", account.update);
  
    // Delete an Account with id
    router.delete("/:id", account.delete);
  
    // Delete all Accounts
    router.delete("/", account.deleteAll);

    app.use('/api/account', router);
  };