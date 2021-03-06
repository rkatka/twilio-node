/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../Marketplace');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import serialize = require('../../../base/serialize');
import { InstalledAddOnExtensionList } from './installedAddOn/installedAddOnExtension';
import { InstalledAddOnExtensionListInstance } from './installedAddOn/installedAddOnExtension';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the InstalledAddOnList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function InstalledAddOnList(version: Marketplace): InstalledAddOnListInstance;

/**
 * Options to pass to update
 *
 * @property configuration - The JSON object representing the configuration
 * @property uniqueName - The string that uniquely identifies this Add-on installation
 */
interface InstalledAddOnInstanceUpdateOptions {
  configuration?: string;
  uniqueName?: string;
}

interface InstalledAddOnListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): InstalledAddOnContext;
  /**
   * create a InstalledAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: InstalledAddOnListInstanceCreateOptions, callback?: (error: Error | null, item: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
  /**
   * Streams InstalledAddOnInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: InstalledAddOnListInstanceEachOptions, callback?: (item: InstalledAddOnInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a installed_add_on
   *
   * @param sid - The unique Installed Add-on Sid
   */
  get(sid: string): InstalledAddOnContext;
  /**
   * Retrieve a single target page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: InstalledAddOnPage) => any): Promise<InstalledAddOnPage>;
  /**
   * Lists InstalledAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: InstalledAddOnListInstanceOptions, callback?: (error: Error | null, items: InstalledAddOnInstance[]) => any): Promise<InstalledAddOnInstance[]>;
  /**
   * Retrieve a single page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: InstalledAddOnListInstancePageOptions, callback?: (error: Error | null, items: InstalledAddOnPage) => any): Promise<InstalledAddOnPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property acceptTermsOfService - A boolean reflecting your acceptance of the Terms of Service
 * @property availableAddOnSid - A string that uniquely identifies the Add-on to install
 * @property configuration - The JSON object representing the configuration
 * @property uniqueName - The string that uniquely identifies this Add-on installation
 */
interface InstalledAddOnListInstanceCreateOptions {
  acceptTermsOfService: boolean;
  availableAddOnSid: string;
  configuration?: string;
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface InstalledAddOnListInstanceEachOptions {
  callback?: (item: InstalledAddOnInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface InstalledAddOnListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface InstalledAddOnListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface InstalledAddOnPayload extends InstalledAddOnResource, Page.TwilioResponsePayload {
}

interface InstalledAddOnResource {
  account_sid: string;
  configuration: string;
  date_created: Date;
  date_updated: Date;
  description: string;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface InstalledAddOnSolution {
}


declare class InstalledAddOnContext {
  /**
   * Initialize the InstalledAddOnContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property extensions - extensions resource
   *
   * @param version - Version of the resource
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: Marketplace, sid: string);

  extensions: InstalledAddOnExtensionListInstance;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
  /**
   * remove a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a InstalledAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: InstalledAddOnInstanceUpdateOptions, callback?: (error: Error | null, items: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
}


declare class InstalledAddOnInstance extends SerializableClass {
  /**
   * Initialize the InstalledAddOnContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Add-on installation
   * @property accountSid - The Account id that has installed this Add-on
   * @property friendlyName - A description of this Add-on installation
   * @property description - A short description of the Add-on functionality
   * @property configuration - The JSON object representing the current configuration
   * @property uniqueName - The string that uniquely identifies this Add-on installation
   * @property dateCreated - The date this Add-on installation was created
   * @property dateUpdated - The date this Add-on installation was last updated
   * @property url - The url
   * @property links - A dictionary of URLs for related resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: Marketplace, payload: InstalledAddOnPayload, sid: string);

  private _proxy: InstalledAddOnContext;
  accountSid: string;
  configuration: string;
  dateCreated: Date;
  dateUpdated: Date;
  description: string;
  /**
   * Access the extensions
   */
  extensions(): InstalledAddOnExtensionListInstance;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  friendlyName: string;
  links: string;
  /**
   * remove a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a InstalledAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: InstalledAddOnInstanceUpdateOptions, callback?: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  url: string;
}


declare class InstalledAddOnPage extends Page<Marketplace, InstalledAddOnPayload, InstalledAddOnResource, InstalledAddOnInstance> {
  /**
   * Initialize the InstalledAddOnPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Marketplace, response: Response<string>, solution: InstalledAddOnSolution);

  /**
   * Build an instance of InstalledAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InstalledAddOnPayload): InstalledAddOnInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { InstalledAddOnContext, InstalledAddOnInstance, InstalledAddOnList, InstalledAddOnListInstance, InstalledAddOnListInstanceCreateOptions, InstalledAddOnListInstanceEachOptions, InstalledAddOnListInstanceOptions, InstalledAddOnListInstancePageOptions, InstalledAddOnPage, InstalledAddOnPayload, InstalledAddOnResource, InstalledAddOnSolution }
