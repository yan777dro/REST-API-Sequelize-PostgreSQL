module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        firstName: {
        type: Sequelize.STRING
        },
       
        lastName: {
        type: Sequelize.STRING
      },
       Occupation: {
        type: Sequelize.STRING
      },
      Salary: {
      type: Sequelize.INTEGER
      }
    });
  
    return Employee;
  };