/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import FlexApi = require('../FlexApi');
import Version = require('../../base/Version');
import { ConfigurationList } from './v1/configuration';
import { ConfigurationListInstance } from './v1/configuration';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of FlexApi
   *
   * @property configuration - configuration resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: FlexApi);

  readonly configuration: ConfigurationListInstance;
}

export = V1;
