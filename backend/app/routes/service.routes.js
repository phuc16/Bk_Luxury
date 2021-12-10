module.exports = app => {
    const service = require("../controllers/service.controller.js");
    var router = require("express").Router();
  

    // Create a new Service
    router.post("/", service.create);
    // Retrieve all Service
    router.get("/", service.getAll);
    // Retrieve Service with roomNumber
    router.get("/number/:number", service.getByNumber);
    // Retrieve Service with service
    router.get("/name/:service", service.getByService);
    // Delete all Rooms
    router.delete("/", service.deleteAll);
    // Delete all Service in a Room with roomNumber
    router.delete("/number/:number", service.deleteByNumber);
    // Delete a Service in all Room
    router.delete("/name/:service", service.deleteByService);


    app.use('/api/service', router);
};