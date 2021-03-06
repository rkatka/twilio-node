/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the WorkspaceStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkspaceStatisticsList(version: V1, workspaceSid: string): WorkspaceStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by an end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property splitByWaitTime - A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
interface WorkspaceStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}

interface WorkspaceStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkspaceStatisticsContext;
  /**
   * Constructs a workspace_statistics
   */
  get(): WorkspaceStatisticsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WorkspaceStatisticsPayload extends WorkspaceStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkspaceStatisticsResource {
  account_sid: string;
  cumulative: string;
  realtime: string;
  url: string;
  workspace_sid: string;
}

interface WorkspaceStatisticsSolution {
  workspaceSid?: string;
}


declare class WorkspaceStatisticsContext {
  /**
   * Initialize the WorkspaceStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class WorkspaceStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkspaceStatisticsContext
   *
   * @property realtime - The realtime
   * @property cumulative - The cumulative
   * @property accountSid - The account_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, payload: WorkspaceStatisticsPayload, workspaceSid: string);

  private _proxy: WorkspaceStatisticsContext;
  accountSid: string;
  cumulative: string;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceStatisticsInstance) => any): void;
  realtime: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  workspaceSid: string;
}


declare class WorkspaceStatisticsPage extends Page<V1, WorkspaceStatisticsPayload, WorkspaceStatisticsResource, WorkspaceStatisticsInstance> {
  /**
   * Initialize the WorkspaceStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkspaceStatisticsSolution);

  /**
   * Build an instance of WorkspaceStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspaceStatisticsPayload): WorkspaceStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkspaceStatisticsContext, WorkspaceStatisticsInstance, WorkspaceStatisticsList, WorkspaceStatisticsListInstance, WorkspaceStatisticsPage, WorkspaceStatisticsPayload, WorkspaceStatisticsResource, WorkspaceStatisticsSolution }
