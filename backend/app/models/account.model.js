const sql = require("./db.js")

//constructor
const Account = function(account) {
    this.firstName = account.firstName;
    this.lastName = account.lastName;
    this.email = account.email;
    this.password = account.password;
    this.dob = account.dob;
    this.phone = account.phone;
    this.country = account.country;
    this.isAdmin = account.isAdmin;
}

Account.create = (newAccount, result) => {
    sql.query("INSERT INTO account SET ?", newAccount, (err, res, fields) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created account: ", { id: res.insertId, ...newAccount });
        result(null, { id: res.insertId, ...newAccount });
    });
};
  
Account.findById = (id, result) => {
    sql.query(`SELECT * FROM account WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found account: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Account with id
        result({ kind: "not_found" }, null);
    });
};

Account.update = (account, result) => {
    sql.query(`UPDATE account SET ? WHERE id = ${account.id}`, account.info, (err, res, fields) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Account with id
        result({ kind: "not_found" }, null);
        return;
        }

        console.log("updated Account with id: ", account.id);
        result(null, res);
    });
};

Account.getAll = (title, result) => {
    let query = "SELECT * FROM account";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("accounts: ", res);
        result(null, res);
    });
};
    
Account.delete = (id, result) => {
    sql.query("DELETE FROM account WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Account with id
        result({ kind: "not_found" }, null);
        return;
        }

        console.log("deleted account with id: ", id);
        result(null, res);
    });
};

Account.deleteAll = (result) => {
    sql.query("DELETE FROM account", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} accounts`);
        result(null, res);
    });
};

Account.logIn = (input, result) => {
    sql.query(`SELECT * FROM account WHERE email = '${input.email}';`, (err, res, fields) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.length){
            if (res[0].password === input.password){
                result(null, {completed: true, result: res[0]});
                return;
            }
        }
        result(null, {completed: false, result: null});
    });

    
};

module.exports = Account;