const Firebird = require('node-firebird')
const db = require('../core/db')
const global = require('../core/global')
const options = db.options(global.HOST, global.DB, global.USER, global.PWD)

class Model {

  constructor(table) {
    this.options = options
    this.table = table
  }

  select() {
    Firebird.attach(options, (err, db) => {
      if (err) { throw err }
      db.query(`SELECT * FROM ${this.table}`, (err, result) => {
        if (err) { throw err }
        let s = Object.keys(result[0]).reduce((acc, curr) => `${acc}${curr}\t`, '') +'\n'
        result.forEach(el => {
          s += Object.values(el).reduce((acc, curr) => `${acc}${curr}\t`, '') + '\n'
        })
        console.log(s)
      })
      db.detach()
    })
  }

  insert(fields, data) {
    Firebird.attach(options, (err, db) => {
      if (err) { throw err }
      const params = new Array(fields.length).fill('?')
      db.query (
        `insert into ${this.table} (${fields.join()}) 
        values (${params.join()})`, data, (err, result) => {
          if (err) throw { err }
        })
      db.detach()
    })
  }

}    

module.exports = Model