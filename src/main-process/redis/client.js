const bluebird = require('bluebird')

const sshRedis = require('./redis-ssh')
/**
 * Connection type
 * @type {string}
 */
const connectionType = 'ssh'

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
 * @type {{}}
 */
const redisConfig = {
  host: '127.0.0.1',
  port: 6379,
  db: 0,
}

/**
 *
 * @param {String} command
 * @param {String} key
 * @param {Array} params
 * @returns {Promise<void>}
 */
module.exports.command = async (command, key, params) => {
  const { client, close } = await sshRedis.connect(sshConfig, redisConfig)

  client.on('error', () => {
    // TODO: Handle connection error
  })

  let promise

  bluebird.promisifyAll(client)
  if (command === 'get') {
    promise = await client.getAsync(key)
  } else {
    const asyncCommand = `${command}Async`
    promise = await client[asyncCommand](key, params)
  }
  close()
  return promise
}
