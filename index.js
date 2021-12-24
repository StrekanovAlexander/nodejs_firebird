const json = require('./core/utils/json')
const Rate = require('./model/Rate')
const rate = new Rate()

const data = json.getData('./data/rates.json')

rate.insert(['usd', 1.0, 2.0, 3.0, 4.0]) 