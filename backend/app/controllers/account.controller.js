const Account = require("../models/account.model.js");

// Create and Save a new Account
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create an Account
    const account = new Account({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        phone: req.body.phone,
        country: req.body.country
    });

    // Save account in the database
    Account.create(account, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Account."
            });
        else res.send(data);
    });
};

// Retrieve all Accounts from the database (with condition).
exports.findAll = (req, res) => {
    const id = req.query.id;

    Account.getAll(id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving account."
        });
      else res.send(data);
    });
  };

// Find a single account with id
exports.findById = (req, res) => {
    Account.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: "Not found Account with id ${req.params.id}."
                });
            } 
            else {
                res.status(500).send({
                message: "Error retrieving Account with id " + req.params.id
                });
            }
        } 
        else res.send(data);
      }); 
};

// Update an Account identified by id in the request
exports.update = (req, res) => {
  
};

// Delete an Account with the specified id in the request
exports.delete = (req, res) => {
    Account.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: "Not found Account with id ${req.params.id}."
                });
            } 
            else {
                res.status(500).send({
                    message: "Could not delete Account with id " + req.params.id
                });
            }
        } 
        else res.send({ message: "Account was deleted successfully!" });
      });  
};

// Delete all accounts 
exports.deleteAll = (req, res) => {
    Account.deleteAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while delete account."
            });
        else res.send({ message: "All accounts have been deleted successfully!" });
    });
};