'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var AwsList = require('./credential/aws').AwsList;
var PublicKeyList = require('./credential/publicKey').PublicKeyList;

var CredentialList;

/* jshint ignore:start */
/**
 * @description Initialize the CredentialList
 *
 * @param {Twilio.Accounts.V1} version - Version of the resource
 */
/* jshint ignore:end */
CredentialList = function CredentialList(version) {
  /* jshint ignore:start */
  /**
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Accounts.V1.CredentialContext}
   */
  /* jshint ignore:end */
  function CredentialListInstance(sid) {
    return CredentialListInstance.get(sid);
  }

  CredentialListInstance._version = version;
  // Path Solution
  CredentialListInstance._solution = {};

  // Components
  CredentialListInstance._publicKey = undefined;
  CredentialListInstance._aws = undefined;

  Object.defineProperty(CredentialListInstance,
    'publicKey', {
    get: function publicKey() {
      if (!this._publicKey) {
        this._publicKey = new PublicKeyList(this._version);
      }

      return this._publicKey;
    }
  });

  Object.defineProperty(CredentialListInstance,
    'aws', {
    get: function aws() {
      if (!this._aws) {
        this._aws = new AwsList(this._version);
      }

      return this._aws;
    }
  });

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  /* jshint ignore:end */
  CredentialListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  CredentialListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return CredentialListInstance;
};

module.exports = {
  CredentialList: CredentialList
};
