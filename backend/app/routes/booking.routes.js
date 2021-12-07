module.exports = app => {
    const booking = require("../controllers/booking.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Booking
    router.post("/", booking.create);
  
    // Retrieve all Booking
    router.get("/", booking.findAll);

    // Retrieve a single Room with number
    router.get("/:roomNumber", booking.findByNumber);

    // Update a Booking with id
    router.put("/:id", booking.update);

    // Delete a Booking with number
    router.delete("/:id", booking.delete);
  
    // Delete all Booking
    router.delete("/", booking.deleteAll);
  
    app.use('/booking', router);
  };