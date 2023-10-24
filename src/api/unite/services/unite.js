'use strict';

/**
 * unite service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unite.unite');
