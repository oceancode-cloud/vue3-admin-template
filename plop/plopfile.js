const storeGenerator = require('./store-template/prompt')
const pageGenerator = require('./page-template/prompt')

module.exports = (plop) => {
  plop.setGenerator('store', storeGenerator)
  plop.setGenerator('page', pageGenerator)
}
