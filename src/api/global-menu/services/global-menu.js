'use strict';

/**
 * global-menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-menu.global-menu');
