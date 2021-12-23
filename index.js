const Firebird = require('node-firebird')
const global = require('./core/global')
const settings = require('./core/settings')
const crud = require('./core/utils/crud')
const json = require('./core/utils/json')

const options = settings.options(global.HOST, global.DB, global.USER, global.PWD)

const data = json.getData('data/rates.json')

Firebird.attach(options, (err, db) => {
  if (err) { throw err }
    const flds = ['currency', 'buy', 'sale', 'retail_buy', 'retail_sale']
    data.forEach(el => {
      crud.insert(db, 'rates', flds, 
      [el[flds[0]], el[flds[1]], el[flds[2]], el[flds[3]], el[flds[4]]]
    )
  });

})