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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        phone: req.body.phone,
        country: req.body.country,
        isAdmin: req.body.isAdmin
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
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    else if ((isNaN(req.params.id) || req.params.id == '') ||
            (req.body.firstName== '') || 
            (req.body.lastName == '') ||
            (req.body.phone == '') ||
            (req.body.country == '') ||
            (req.body.dob == '') ||
            (req.body.password == '')) {
                
        return res.status(400).send({
            message: "Invalid input!"
        });
    }
    const account = {
        id: req.params.id,
        info: req.body
    };

    Account.update(account, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while updating the Account."
            });
        else res.send(data);
    });
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

// Authenticate account log in
exports.logIn = (req, res) => {
    Account.logIn(req.body.input, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            }); 
        } 
        else if (!data.completed){
            res.status(404).send({
                message: "Email or password incorrect"
            });
        }
        else {
            if (req.cookies.id === undefined) {
                res.cookie('id', data.result.id, { expires: new Date(Date.now() + 86400*1000*30)});
                res.cookie('isAdmin', data.result.isAdmin, { expires: new Date(Date.now() + 86400*1000*30)});
                console.log('successfully');
            } else {
                console.log('cookie exists', req.cookies.id);
            } 
            // next();
            res.send(`Log in completed. Welcome user id: ${data.result.id} email: ${data.result.email}`)
        };
    }); 
};