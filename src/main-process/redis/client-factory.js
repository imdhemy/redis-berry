const connectionTypes = require('./connection-types')
const sshRedis = require('./redis-ssh')
const nodeRedis = require('redis')
const bluebird = require('bluebird')

/**
 * SSH config
 * TODO: Get SSH config from DB
 * @type {{password: string, host: string, user: string}}
 */
const sshConfig = {
  host: '192.168.10.10',
  port: 22,
  user: 'vagrant',
  password: 'vagrant',
}

/**
 * Redis configs
 * @type {{port: number, host: string, db: number}}
 */
const redisConfig = {
  host: '127.0.0.1',
  port: 6379,
  db: 0,
}

/**
 * Promisify the specified client
 * @param client
 * @returns {Object}
 */
module.exports.promisify = (client) => {
  return bluebird.promisifyAll(client)
}

/**
 * Creates a REDIS client over SSH connection
 * @param sshConfig
 * @param redisConfig
 * @returns {Promise<{server, conn, client, close}>}
 */
const sshClient = async (sshConfig, redisConfig) => {
  return await sshRedis.connect(sshConfig, redisConfig)
}

/**
 * Create a default REDIS client
 * @param redisConfig
 * @returns {Promise<{client: *, close: *}>}
 */
const nodeClient = async (redisConfig) => {
  const client = nodeRedis.createClient(redisConfig)
  const close = () => {}
  return { client, close }
}

/**
 * Factory method
 * @param type
 * @returns {Promise<*>}
 */
module.exports.create = async (type) => {
  return type === connectionTypes.SSH ? await sshClient(sshConfig, redisConfig) : await nodeClient(redisConfig)
}
