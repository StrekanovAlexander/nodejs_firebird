const Model = require('./Model')

class Rate extends Model {
  constructor() {
    super('rates')
    this.fields = [
      'currency', 
      'buy', 
      'sale', 
      'retail_buy', 
      'retail_sale',
    ]
  }

  insert(data) {
    super.insert(this.fields, data)
  }

}

module.exports = Rate