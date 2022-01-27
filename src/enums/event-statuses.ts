/**
 * Statuses
 * */
enum EventStatuses {
  None = 0,
  Started = 1,
  Completed = 2,
  Pending = 3,
  Active = 4,
  Cancelled = 5,
  Closed = 6,
  NotStarted = 7,
  Error = 8,
  ClientError = 9,
  ServerError = 10
}

export default EventStatuses;
