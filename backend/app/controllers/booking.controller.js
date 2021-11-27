const Booking = require("../models/booking.model.js");

// Create and Save a new Booking
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Booking
    const booking = new Booking({
        id: req.body.id,
        accountId: req.body.accountId,
        square: req.body.square,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut
    });

    
    Booking.create(booking, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Booking."
            });
        else res.send(data);
    });
};

// Retrieve all Booking from the database
exports.findAll = (req, res) => {
    const id = req.query.id;

    Booking.getAll(id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving booking."
        });
      else res.send(data);
    });
  };



// Delete a Booking with the booking id in the request
exports.delete = (req, res) => {
    Booking.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Booking with number ${req.params.id}.`
                });
            } 
            else {
                res.status(500).send({
                    message: "Could not delete Booking with id " + req.params.id
                });
            }
        } 
        else res.send({ message: `Booking was deleted successfully!` });
      });  
};

// Delete all booking

exports.deleteAll = (req, res) => {
    Booking.deleteAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while delete Bookings."
            });
        else res.send({ message: "All Bookings have been deleted successfully!" });
    });
};