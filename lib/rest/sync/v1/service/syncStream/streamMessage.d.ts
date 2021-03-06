/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the StreamMessageList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Instance SID.
 * @param streamSid - Stream SID.
 */
declare function StreamMessageList(version: V1, serviceSid: string, streamSid: string): StreamMessageListInstance;

interface StreamMessageListInstance {
  /**
   * create a StreamMessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: StreamMessageListInstanceCreateOptions, callback?: (error: Error | null, item: StreamMessageInstance) => any): Promise<StreamMessageInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property data - Stream Message body.
 */
interface StreamMessageListInstanceCreateOptions {
  data: string;
}

interface StreamMessagePayload extends StreamMessageResource, Page.TwilioResponsePayload {
}

interface StreamMessageResource {
  data: string;
  sid: string;
}

interface StreamMessageSolution {
  serviceSid?: string;
  streamSid?: string;
}


declare class StreamMessageInstance extends SerializableClass {
  /**
   * Initialize the StreamMessageContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - Stream Message SID.
   * @property data - Stream Message body.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Instance SID.
   * @param streamSid - Stream SID.
   */
  constructor(version: V1, payload: StreamMessagePayload, serviceSid: string, streamSid: string);

  data: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class StreamMessagePage extends Page<V1, StreamMessagePayload, StreamMessageResource, StreamMessageInstance> {
  /**
   * Initialize the StreamMessagePagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: StreamMessageSolution);

  /**
   * Build an instance of StreamMessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StreamMessagePayload): StreamMessageInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { StreamMessageInstance, StreamMessageList, StreamMessageListInstance, StreamMessageListInstanceCreateOptions, StreamMessagePage, StreamMessagePayload, StreamMessageResource, StreamMessageSolution }
