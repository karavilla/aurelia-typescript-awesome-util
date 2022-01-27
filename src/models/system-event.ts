import EventTypes from "../enums/event-types";
import EventStatuses from "../enums/event-statuses";

/**
 * Class for System Event
 * */
export default class SystemEvent {
  type: EventTypes;
  text: string;
  timestamp: number;
  status?: EventStatuses;

  /**
   * Creates an Event
   * @param text - Details of task
   * @param type - Event type
   * @param status - Event status
   *  
   */
  public constructor(text: string, type: EventTypes, status?: EventStatuses) {
    this.text = text;
    this.type = type;
    if (status) {
      this.status = status;
    }
    this.timestamp = Date.now();
  }

}
