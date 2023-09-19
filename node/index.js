const express = require("express");
const app = express();
const port = 3000;

const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

// Criando a tabela
connection.query("CREATE TABLE IF NOT EXISTS `people` (`id` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1");
date = new Date();

const sql = `INSERT INTO people(name) VALUES ("Tonin")`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
    
    var con = mysql.createConnection(config);
    
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT id, name FROM people;", function (err, result, fields) {
            var buffer = "";
            if (err) throw err;
            if (result.length > 0) {
                buffer += "<table><tr><th>ID</th><th>Name</th></tr>"
                for (i = 0; i < result.length; i++) {
                    buffer += "<tr><th>"+result[i].id+"</th><th>"+result[i].name+"</th></tr>"
                }
                buffer += "</table>"
            } else {
                buffer = "Nenhum resultado encontrado"
            }
            res.send("<h1>Full Cycle Rocks!</h1>" + buffer);
        });
    });
});

app.listen(port, () => {
    console.log("Rodando na porta " + port)
});