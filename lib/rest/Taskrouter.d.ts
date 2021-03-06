/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./taskrouter/V1');
import { WorkspaceListInstance } from './taskrouter/v1/workspace';


declare class Taskrouter extends Domain {
  /**
   * Initialize taskrouter domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly v1: V1;
  readonly workspaces: WorkspaceListInstance;
}

export = Taskrouter;
