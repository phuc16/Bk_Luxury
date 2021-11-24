const sql = require("./db.js")

//constructor
const Service = function(service) {
    this.roomNumber = service.roomNumber;
    this.service = service.service;
}


Service.create = (service, result) => {
    sql.query(`INSERT INTO SERVICE SET roomNumber = (SELECT number FROM ROOM WHERE number = ${service.roomNumber}), service = '${service.service}';`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created service: ", service);
        result(null, service);
    })  ; 
}

Service.getAll = (result) => {
    let query = "SELECT * FROM service";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("rooms: ", res);
        result(null, res);
    });
};

Service.getByNumber = (number, result) => {
    sql.query(`SELECT * FROM service WHERE roomNumber = ${number}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Room with number
        result({ kind: "not_found" }, null);
        return;
        }
        result(null, res);
    });
};

Service.getByService = (service, result) => {
    sql.query(`SELECT * FROM service WHERE service = '${service}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Room with number
        result({ kind: "not_found" }, null);
        return;
        }
        result(null, res);
    });
};

Service.deleteAll = result => {
    sql.query("DELETE FROM service", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res);
    });
};

Service.deleteByNumber = (number, result) => {
    sql.query(`DELETE FROM service WHERE roomNumber = ${number}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Room with number
        result({ kind: "not_found" }, null);
        return;
        }
        result(null, res);
    });
};

Service.deleteByService = (service, result) => {
    sql.query(`DELETE FROM service WHERE service = '${service}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Room with number
        result({ kind: "not_found" }, null);
        return;
        }
        result(null, res);
    });
};


module.exports = Service;