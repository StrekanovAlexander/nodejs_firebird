module.exports.select = (db, table) => {
  db.query(`SELECT * FROM ${table}`, (err, result) => {
    if (err) { throw err }
      result.forEach(el => {
        let s = '';
        for (key in el) {
          s += `${key}: ${el[key]}\t`
        }
        console.log(s)
      })
  db.detach()
  });
} 

module.exports.insert = (db, table, fields, data) => {
  const params = new Array(fields.length).fill('?')
  db.query (
    `INSERT INTO ${table} (${fields.join()}) 
    VALUES (${params.join()})`, data, (err, result) => {
      if (err) throw { err }
    })
  db.detach()
}