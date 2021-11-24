const Service = require("../models/service.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Room
    const service = new Service({
        roomNumber: req.body.roomNumber,
        service: req.body.service
    });

    // Save Tutorial in the database
    Service.create(service, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Service"
            });
        else res.send(data);
    });
};

// Retrieve all Service from the database
exports.getAll = (req, res) => {
    Service.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving service."
            });
        else res.send(data);
    });
};

exports.getByNumber = (req, res) => {
    Service.getByNumber(req.params.number, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Service with roomNumber ${req.params.number}.`
                });
            } 
            else {
                res.status(500).send({
                    message: "Error retrieving Service with roomNumber " + req.params.number
                });
            }
        } 
        else res.send(data);
      });  
};

exports.getByService = (req, res) => {
    Service.getByService(req.params.service, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Service ${req.params.service}.`
                });
            } 
            else {
                res.status(500).send({
                    message: "Error retrieving Service" + req.params.service
                });
            }
        } 
        else res.send(data);
      });  
};

exports.deleteAll = (req, res) => {
    Service.deleteAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while delete service."
            });
        else res.send({ message: `Service was deleted successfully!` });
    });
};

// Delete all Service in a room
exports.deleteByNumber = (req, res) => {
    Service.deleteByNumber(req.params.number, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Room with number ${req.params.number}.`
                });
            } 
            else {
                res.status(500).send({
                    message: "Could not delete service in room " + req.params.number
                });
            }
        } 
        else res.send({ message: `Service in room ${req.params.number} was deleted successfully!` });
      });  
};

exports.deleteByService = (req, res) => {
    Service.deleteByService(req.params.service, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Service ${req.params.service}.`
                });
            } 
            else {
                res.status(500).send({
                    message: "Could not delete service " + req.params.service
                });
            }
        } 
        else res.send({ message: `Service ${req.params.service} was deleted successfully!` });
      });  
};