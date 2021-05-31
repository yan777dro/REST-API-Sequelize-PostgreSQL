const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.Occupation) {
      res.status(400).send({
        message: "error employee could not be created, this field is required!"
      });
      return;
    }
  
    
    const creatingEmployee = {
      firstName:  req.body.firstName,
      lastName:   req.body.lastName,
      Occupation: req.body.Occupation,
      Salary:     req.body.Salary
    };
  
    
    Employee.create(creatingEmployee)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "error creating an employee"
        });
      });
  };
  
 
  exports.findAll = (req, res) => {
    const find = req.query.Occupation;
    var condition = find ? { find: { [Op.iLike]: `%${find}%` } } : null;
  
    Employee.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "error occured while retreiving employees."
        });
      });
  };
  
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Employee.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving employee by id" + id
        });
      });
  };
  
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Employee.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "employee updated."
          });
        } else {
          res.send({
            message: "Cannot update employee id=${id}."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating employee with=" + id
        });
      });
  };
  
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employee.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "employee deleted sucessfully"
          });
        } else {
          res.send({
            message: `Cannot delete employee with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete employee with id=" + id
        });
      });
  };
  
  
  exports.deleteAll = (req, res) => {
    Employee.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} All employees have been deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "error occured while deleting all employees."
        });
      });
  };
