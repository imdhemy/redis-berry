const connectionTypes = require('./connection-types')
const clientFactory = require('./client-factory')

/**
 * Connection type
 * @type {string}
 */
const connectionType = connectionTypes.LOCAL

/**
 *
 * @param {String} command
 * @param {String} key
 * @param {Array} params
 * @returns {Promise<void>}
 */
module.exports.command = async (command, key, params) => {
  const { client, close } = await clientFactory.create(connectionType)

  client.on('error', () => {
    // TODO: Handle connection error
  })

  clientFactory.promisify(client)

  let promise

  if (command === 'get') {
    promise = await client.getAsync(key)
  } else {
    const asyncCommand = `${command}Async`
    promise = await client[asyncCommand](key, params)
  }

  await client.scanAsync(0).then(res => {
    console.log(res)
  })
  close()
  return promise
}
