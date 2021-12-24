const common = require('./core/utils/common')
const json = require('./core/utils/json')
const Rate = require('./model/Rate')

const rate = new Rate()

const data = json.data('./data/rates.json')

// data.forEach(el => {
//   const arr = common.objectToArray(el, true)
//   rate.insert(arr)
// })

rate.select()