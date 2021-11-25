module.exports = app => {
    const room = require("../controllers/room.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Room
    router.post("/", room.create);
  
    // Retrieve all Rooms
    router.get("/", room.findAll);
  
    // Retrieve a single Room with number
    router.get("/:number", room.findByNumber);

  
    // Update a Room with number
    //router.put("/:number", room.update);
  
    // Delete a Room with number
    router.delete("/:number", room.delete);
  
    // Delete all Rooms
    router.delete("/", room.deleteAll);
  
    app.use('/room', router);
  };