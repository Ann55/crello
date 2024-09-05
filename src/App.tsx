import { useState } from "react";
import { Column } from "./Column";
import { CardType } from "./types/types";
import { Status } from "./types/types";

// metadata for early testing
const columns = [
  {
    title: Status.TODO,
  },
  {
    title: Status.IN_PROGRESS,
  },
  {
    title: Status.DONE,
  },
];

const cards: CardType[] = [
  { id: "1", title: "1", content: "a", status: Status.TODO },
  { id: "2", title: "2", content: "b", status: Status.TODO },
  { id: "3", title: "3", content: "a", status: Status.IN_PROGRESS },
  { id: "4", title: "4", content: "a", status: Status.DONE },
  { id: "5", title: "5", content: "a", status: Status.DONE },
];

function App() {
  return (
    <div className="flex h-full gap-2">
      {columns.map((column) => {
        return <Column status={column.title} cards={cards}></Column>;
      })}
    </div>
  );
}

export default App;
