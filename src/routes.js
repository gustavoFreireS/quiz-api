const { Resources } = require('fastexpress');
const Pessoas = require('./resources/Pessoas');

const routers = new Resources({
  namespace: '/api/v1/'
})
  .add('pessoas', Pessoas)
  .getRouters();

module.exports = routers;
