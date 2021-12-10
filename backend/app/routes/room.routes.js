module.exports = app => {
    const room = require("../controllers/room.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Room
    router.post("/", room.create);
  
    // Retrieve all Rooms
    router.get("/", room.findAll);

    // Retrieve all Rooms Group By Name
    router.get("/GroupByName", room.findAllGroupByName);
  
    // Retrieve a single Room with number
    router.get("/:number", room.findByNumber);

     // Retrieve a single Room with type
     router.get("/type/:type", room.findByType);

     // Retrieve a single Room with name
    router.get("/name/:name", room.findByName);

  
    // Update a Room with number
    router.put("/:number", room.update);
  
    // Delete a Room with number
    router.delete("/:number", room.delete);
  
    // Delete all Rooms
    router.delete("/", room.deleteAll);
  
    app.use('/api/room', router);
  };