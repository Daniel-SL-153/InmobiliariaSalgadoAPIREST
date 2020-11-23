module.exports = app => {
    const estados = require("../controllers/estado.controller.js");

    // Retrieve all Estados
    app.get("/estados", estados.findAll);

    // Retrieve a single Estado with customerId
    app.get("/estados/:estadoId", estados.findOne);
};