const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
// const connection = mysql.createConnection(config)

// const sql = `INSERT INTO people(name) values('Tonin')`
// const query = `SELECT * FROM people`
// connection.query(sql)
// connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>,')
    addName('Tonin');
    getNames(res);
    res.json('query')
})

const addName = (name) => {
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('${nome}')`
    connection.query(sql)
    connection.end()
}

const getNames = (res) => {
    const connection = mysql.createConnection(config)
    const sql = `SELECT * FROM people`
    connection.query(
        sql,
        (error, results, fields) => {
            if (error) {
                console.log(error);
                mysql.end();
                res.send(`<h1>${error}</h1>`);
            }
            if (results.length > 0) {
                console.log(results);
                results.forEach(element => {
                    page += `\n<h1>nome: ${element['name']}</h1>`
                });
                
            }
        }
    )
    connection.end()
}

app.listen(port, ()=> {
    console.log('Rodando na porta' + port)
})