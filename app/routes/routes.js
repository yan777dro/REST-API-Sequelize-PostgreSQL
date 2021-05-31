module.exports = app => {
    const Employee = require("../controller/controller.js");
  
    var router = require("express").Router();
  
    
    router.post("/", Employee.create);
  
    
    router.get("/", Employee.findAll);

  
    
    router.get("/:id", Employee.findOne);
  
    
    router.put("/:id", Employee.update);
  
    
    router.delete("/:id", Employee.delete);
  
    router.delete("/", Employee.deleteAll);
  
    app.use("/api/employees", router);
  };