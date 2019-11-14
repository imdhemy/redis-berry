/**
 * Set up connection to DB based on the configs on `config/database.js`
 */

const RxDB = require('rxdb')
const configs = require('../config/database')
const { connection, connections } = configs

/**
 * List of level down adapters
 * @type {string[]}
 */
const levelDownAdapters = ['memdown']

/**
 * Check if the specified adapter is a level-down adapter
 * @param name
 * @returns {boolean} {@code true} if the levelDownAdapters contains the
 * specified name
 */
const isLevelDownAdapter = (name) => {
  return levelDownAdapters.includes(name)
}

/**
 * Set up connection to DB
 */
module.exports.setUp = async () => {
  const params = connections[connection]
  // Require adapter plugin
  const { adapter } = params
  // level-down adapters need the leveldb plugin to work
  if (isLevelDownAdapter(adapter)) {
    RxDB.plugin(require('pouchdb-adapter-leveldb'))
    params.adapter = require(adapter)
  } else {
    RxDB.plugin(require(`pouchdb-adapter-${adapter}`))
  }
  // create DB
  return await RxDB.create(params)
}

module.exports.collection = async (connection, name) => {
  const schema = require(`./schemas/${name}.schema`)
  let config = require(`./collections/${name}.collection`)
  return connection.collection({
    name,
    schema,
    ...config,
  })
}