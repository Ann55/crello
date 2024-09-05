import { CardType } from "../types/types";

enum Key {
  CARDS = "card",
}
const get = (key: Key) => {
  try {
    const dataString = localStorage.get(key);
    return JSON.parse(dataString);
  } catch {
    return null;
  }
};

const set = (key: Key, data: unknown) => {
  const jsonData = JSON.stringify(data);
  localStorage.set(key, jsonData);
};

const sleep = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(null);
    }, Math.random() * 500 + 500);
  });
};

//look up ts generics for <>
export const getCards = async (): Promise<CardType[]> => {
  await sleep();
  return get(Key.CARDS) ?? [];
};

export const setCards = async (cards: CardType[]) => {
  await sleep();
  set(Key.CARDS, cards);
};

export const addCard = async (card: CardType) => {
  await sleep();
  const cards = get(Key.CARDS) ?? [];
  cards.push(card);
  set(Key.CARDS, cards);
};

//edit card
// delete card
