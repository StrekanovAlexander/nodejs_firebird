const Model = require('./Model')

class Currency extends Model {
  constructor() {
    super('currencies')
    this.fields = [
      'id', 
      'code_id',
    ]
  }
}

module.exports = Currency