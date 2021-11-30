const sql = require("./db.js")

//constructor
const Booking = function(booking) {
    this.id = booking.id;
    this.accountId = booking.accountId;
    this.roomNumber = booking.roomNumber;
    this.checkIn = booking.checkIn;
    this.checkOut = booking.checkOut;
    
}

Booking.create = (newBooking, result) => {
    sql.query("INSERT INTO booking SET ?", newBooking, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created booking: ", { number: res.insertNumber, ...newBooking});
        result(null, { number: res.insertNumber, ...newBooking });
    });
};
  
Booking.update = (room, result) => {
    sql.query(`UPDATE booking SET ? WHERE id = ${booking.id}`, booking.info, (err, res, fields) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Booking with number
        result({ kind: "not_found" }, null);
        return;
        }

        console.log("updated Booking with id: ", booking.id);
        result(null, res);
    });
};
Booking.getAll = (title, result) => {
    let query = "SELECT * FROM booking";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Booking: ", res);
        result(null, res);
    });
};
    
Booking.delete = (id, result) => {
    sql.query("DELETE FROM booking WHERE id = ?", id, (err, res) => {
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

        console.log("deleted booking with id: ", id);
        result(null, res);
    });
};

Booking.deleteAll = result => {
    sql.query("DELETE FROM booking", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} bookings`);
        result(null, res);
    });
};

module.exports = Booking;