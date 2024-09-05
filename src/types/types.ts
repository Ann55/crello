export enum Status {
  TODO = "todo",
  IN_PROGRESS = "in-progress",
  DONE = "done",
}

export type CardType = {
  id: string;
  title: string;
  content: string;
  status: Status;
};

export type ColumnProps = {
  title: Status;
  cards: CardType[] | [];
};
