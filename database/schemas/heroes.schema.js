/**
 * ---------------------------------------------------------------
 * Heroes schema
 * ---------------------------------------------------------------
 * @type {{}}
 *
 * Schemas define how your data looks. Which field should be used as primary,
 *   which fields should be used as indexes and what should be encrypted. The
 *   schema also validates that every inserted document of your collections
 *   conforms to the schema. Every collection has its own schema. With RxDB,
 *   schemas are defined with the jsonschema-standard which you might know from
 *   other projects.
 *
 *   @link http://json-schema.org/
 */
module.exports = {
  title: 'heroes schema',
  version: 0,
  description: 'describes a simple hero',
  type: 'object',
  properties: {
    /**
     * The name property is primary. This means its an unique, indexed,
     * required string which can be used to definitely find a single document.
     */
    name: { type: 'string', primary: true },
    /**
     * The color property
     */
    color: { type: 'string' },
    /**
     * The healthPoints-field must be a number between 0 and 100
     */
    healthPoints: { type: 'number', min: 0, max: 100 },
    /**
     * The skills-attribute must be an array with objects which contain the
     * name and the damage-attribute. There is a maximum of 5 skills per hero.
     */
    skills: {
      type: 'array',
      maxItems: 5,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: { name: { type: 'string' }, damage: { type: 'number' } },
      },
    },
  },
  /**
   * The color-field is required for every document
   */
  required: ['color'],
  /**
   * Allows adding attachments and store them encrypted
   */
  attachments: {
    'encrypted': true,
  },
}
