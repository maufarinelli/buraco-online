//  {
//   "0": "As de Paus",
//   "1": "Dois de Paus",
//   "2": "Tres de Paus",
//   "3": "Quatro de Paus",
//   "4": "Cinco de Paus",
//   "5": "Seis de Paus",
//   "6": "Sete de Paus",
//   "7": "Oito de Paus",
//   "8": "Nove de Paus",
//   "9": "Dez de Paus",
//   "10": "Valete de Paus",
//   "11": "Dama de Paus",
//   "12": "Rei de Paus",

//   "13": "As de Copas",
//   "14": "Dois de Copas",
//   "15": "Tres de Copas",
//   "16": "Quatro de Copas",
//   "17": "Cinco de Copas",
//   "18": "Seis de Copas",
//   "19": "Sete de Copas",
//   "20": "Oito de Copas",
//   "21": "Nove de Copas",
//   "22": "Dez de Copas",
//   "23": "Valete de Copas",
//   "24": "Dama de Copas",
//   "25": "Rei de Copas",

//   "26": "As de Espadas",
//   "27": "Dois de Espadas",
//   "28": "Tres de Espadas",
//   "29": "Quatro de Espadas",
//   "30": "Cinco de Espadas",
//   "31": "Seis de Espadas",
//   "32": "Sete de Espadas",
//   "33": "Oito de Espadas",
//   "34": "Nove de Espadas",
//   "35": "Dez de Espadas",
//   "36": "Valete de Espadas",
//   "37": "Dama de Espadas",
//   "38": "Rei de Espadas",

//   "39": "As de Ouros",
//   "40": "Dois de Ouros",
//   "41": "Tres de Ouros",
//   "42": "Quatro de Ouros",
//   "43": "Cinco de Ouros",
//   "44": "Seis de Ouros",
//   "45": "Sete de Ouros",
//   "46": "Oito de Ouros",
//   "47": "Nove de Ouros",
//   "48": "Dez de Ouros",
//   "49": "Valete de Ouros",
//   "50": "Dama de Ouros",
//   "51": "Rei de Ouros",

//   "52": "Coringa",
// };
export interface ICard {
  cardLabel: string;
  cardCode: string;
}

const cardsList: ICard[] = [
  { cardLabel: "As de Paus", cardCode: "AC" },
  { cardLabel: "Dois de Paus", cardCode: "2C" },
  { cardLabel: "Tres de Paus", cardCode: "3C" },
  { cardLabel: "Quatro de Paus", cardCode: "4C" },
  { cardLabel: "Cinco de Paus", cardCode: "5C" },
  { cardLabel: "Seis de Paus", cardCode: "6C" },
  { cardLabel: "Sete de Paus", cardCode: "7C" },
  { cardLabel: "Oito de Paus", cardCode: "8C" },
  { cardLabel: "Nove de Paus", cardCode: "9C" },
  { cardLabel: "Dez de Paus", cardCode: "10C" },
  { cardLabel: "Valete de Paus", cardCode: "JC" },
  { cardLabel: "Dama de Paus", cardCode: "QC" },
  { cardLabel: "Rei de Paus", cardCode: "KC" },

  { cardLabel: "As de Copas", cardCode: "AH" },
  { cardLabel: "Dois de Copas", cardCode: "2H" },
  { cardLabel: "Tres de Copas", cardCode: "3H" },
  { cardLabel: "Quatro de Copas", cardCode: "4H" },
  { cardLabel: "Cinco de Copas", cardCode: "5H" },
  { cardLabel: "Seis de Copas", cardCode: "6H" },
  { cardLabel: "Sete de Copas", cardCode: "7H" },
  { cardLabel: "Oito de Copas", cardCode: "8H" },
  { cardLabel: "Nove de Copas", cardCode: "9H" },
  { cardLabel: "Dez de Copas", cardCode: "10H" },
  { cardLabel: "Valete de Copas", cardCode: "JH" },
  { cardLabel: "Dama de Copas", cardCode: "QH" },
  { cardLabel: "Rei de Copas", cardCode: "KH" },

  { cardLabel: "As de Espadas", cardCode: "AS" },
  { cardLabel: "Dois de Espadas", cardCode: "2S" },
  { cardLabel: "Tres de Espadas", cardCode: "3S" },
  { cardLabel: "Quatro de Espadas", cardCode: "4S" },
  { cardLabel: "Cinco de Espadas", cardCode: "5S" },
  { cardLabel: "Seis de Espadas", cardCode: "6S" },
  { cardLabel: "Sete de Espadas", cardCode: "7S" },
  { cardLabel: "Oito de Espadas", cardCode: "8S" },
  { cardLabel: "Nove de Espadas", cardCode: "9S" },
  { cardLabel: "Dez de Espadas", cardCode: "10S" },
  { cardLabel: "Valete de Espadas", cardCode: "JS" },
  { cardLabel: "Dama de Espadas", cardCode: "QS" },
  { cardLabel: "Rei de Espadas", cardCode: "KS" },

  { cardLabel: "As de Ouros", cardCode: "AD" },
  { cardLabel: "Dois de Ouros", cardCode: "2D" },
  { cardLabel: "Tres de Ouros", cardCode: "3D" },
  { cardLabel: "Quatro de Ouros", cardCode: "4D" },
  { cardLabel: "Cinco de Ouros", cardCode: "5D" },
  { cardLabel: "Seis de Ouros", cardCode: "6D" },
  { cardLabel: "Sete de Ouros", cardCode: "7D" },
  { cardLabel: "Oito de Ouros", cardCode: "8D" },
  { cardLabel: "Nove de Ouros", cardCode: "9D" },
  { cardLabel: "Dez de Ouros", cardCode: "10D" },
  { cardLabel: "Valete de Ouros", cardCode: "JD" },
  { cardLabel: "Dama de Ouros", cardCode: "QD" },
  { cardLabel: "Rei de Ouros", cardCode: "KD" },
];

export const createDecksMap = () => {
  const decksMap = new Map<number, ICard>();
  let cardsListLength = cardsList.length;
  cardsList.forEach((card, i) => decksMap.set(i, card));
  cardsList.forEach((card) => {
    decksMap.set(cardsListLength, card);
    cardsListLength++;
  });

  return decksMap;
};

export const initGameCards = (deck: Map<number, ICard>) => {
  const clonedDeck = new Map(deck);
  const totalInitialUserCards = 11;
  const user1Cards: Map<number, ICard> = new Map();
  const user2Cards: Map<number, ICard> = new Map();

  while (user1Cards.size < totalInitialUserCards) {
    const randowIndex = Math.floor(Math.random() * clonedDeck.size);
    const card = clonedDeck.get(randowIndex);

    if (card) {
      user1Cards.set(randowIndex, card);
      clonedDeck.delete(randowIndex);
    }
  }

  while (user2Cards.size < totalInitialUserCards) {
    const randowIndex = Math.floor(Math.random() * clonedDeck.size);
    const card = clonedDeck.get(randowIndex);

    if (card) {
      user2Cards.set(randowIndex, card);
      clonedDeck.delete(randowIndex);
    }
  }

  return {
    deck: clonedDeck,
    user1Cards,
    user2Cards,
  };
};

export const initializedGame = initGameCards(createDecksMap());
