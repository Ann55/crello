import { FunctionComponent } from "react";
import { CardType } from "./types/types";

export const Card: FunctionComponent<{ card: CardType }> = ({ card }) => {
  return (
    <div className=" flex flex-col content-center w-full bg-slate-100 h-20 p-1">
      <h1 className="text-center">{card.title}</h1>
      <p>{card.content}</p>
    </div>
  );
};
