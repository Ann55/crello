import { FunctionComponent } from "react";
import { Status, CardType } from "./types/types";
import { Card } from "./Card";

export const Column: FunctionComponent<{
  status: Status;
  cards: CardType[] | [];
}> = ({ status, cards }) => {
  return (
    <div
      className="flex flex-1 flex-col justify-top content-center
     h-full bg-zinc-300 p-5 gap-2"
    >
      <h1 className=" text-center">{status}</h1>
      {cards
        .filter((card) => card.status === status)
        .map((card) => {
          return <Card card={card}></Card>;
        })}
    </div>
  );
};
