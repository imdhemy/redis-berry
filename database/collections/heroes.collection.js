/**
 * ---------------------------------------------------------------
 * Heroes Collection
 * ---------------------------------------------------------------
 * A collection stores documents of the same type.
 * Every collection needs a collection name and a valid RxSchema. Other
 * attributes are optional.
 *
 * By default the collections uses a schema with the same name, you can
 * assign a different schema using the `schema` key
 *
 * @link https://rxdb.info/rx-collection.html
 *
 * @type {{}}
 */
module.exports = {
  pouchSettings: {}, // (optional)
  statics: {}, // (optional) // ORM-functions for this collection
  methods: {}, // (optional) ORM-functions for documents
  attachments: {}, // (optional) ORM-functions for attachments
  options: {}, // (optional) Custom paramters that might be used in plugins
  migrationStrategies: {}, // (optional)
  autoMigrate: true, // (optional)
}
