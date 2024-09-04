export enum Status {
  TODO = "todo",
  IN_PROGRESS = "in-progress",
  DONE = "done",
}

export type Card = {
  id: string;
  title: string;
  content: string;
  status: Status;
};
