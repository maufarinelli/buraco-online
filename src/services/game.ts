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

// };
export interface ICard {
  cardLabel: string;
  cardCode: string;
  relations: { before: string[]; after: string[] };
}

const cardsList: ICard[] = [
  {
    cardLabel: "As de Paus",
    cardCode: "AC",
    relations: { before: ["KC"], after: ["2C"] },
  },
  {
    cardLabel: "Dois de Paus",
    cardCode: "2C",
    relations: { before: ["all"], after: ["all"] },
  },
  {
    cardLabel: "Tres de Paus",
    cardCode: "3C",
    relations: { before: ["2C"], after: ["4C"] },
  },
  {
    cardLabel: "Quatro de Paus",
    cardCode: "4C",
    relations: { before: ["3C"], after: ["5C"] },
  },
  {
    cardLabel: "Cinco de Paus",
    cardCode: "5C",
    relations: { before: ["4C"], after: ["6C"] },
  },
  {
    cardLabel: "Seis de Paus",
    cardCode: "6C",
    relations: { before: ["5C"], after: ["6C"] },
  },
  {
    cardLabel: "Sete de Paus",
    cardCode: "7C",
    relations: { before: ["6C"], after: ["8C"] },
  },
  {
    cardLabel: "Oito de Paus",
    cardCode: "8C",
    relations: { before: ["7C"], after: ["9C"] },
  },
  {
    cardLabel: "Nove de Paus",
    cardCode: "9C",
    relations: { before: ["8C"], after: ["10C"] },
  },
  {
    cardLabel: "Dez de Paus",
    cardCode: "10C",
    relations: { before: ["9C"], after: ["JC"] },
  },
  {
    cardLabel: "Valete de Paus",
    cardCode: "JC",
    relations: { before: ["10C"], after: ["QC"] },
  },
  {
    cardLabel: "Dama de Paus",
    cardCode: "QC",
    relations: { before: ["JC"], after: ["KC"] },
  },
  {
    cardLabel: "Rei de Paus",
    cardCode: "KC",
    relations: { before: ["QC"], after: ["AC"] },
  },

  {
    cardLabel: "As de Copas",
    cardCode: "AH",
    relations: { before: ["KH"], after: ["2H"] },
  },
  {
    cardLabel: "Dois de Copas",
    cardCode: "2H",
    relations: { before: ["all"], after: ["all"] },
  },
  {
    cardLabel: "Tres de Copas",
    cardCode: "3H",
    relations: { before: ["2H"], after: ["4H"] },
  },
  {
    cardLabel: "Quatro de Copas",
    cardCode: "4H",
    relations: { before: ["3H"], after: ["5H"] },
  },
  {
    cardLabel: "Cinco de Copas",
    cardCode: "5H",
    relations: { before: ["4H"], after: ["6H"] },
  },
  {
    cardLabel: "Seis de Copas",
    cardCode: "6H",
    relations: { before: ["5H"], after: ["7H"] },
  },
  {
    cardLabel: "Sete de Copas",
    cardCode: "7H",
    relations: { before: ["6H"], after: ["8H"] },
  },
  {
    cardLabel: "Oito de Copas",
    cardCode: "8H",
    relations: { before: ["7H"], after: ["9H"] },
  },
  {
    cardLabel: "Nove de Copas",
    cardCode: "9H",
    relations: { before: ["8H"], after: ["10H"] },
  },
  {
    cardLabel: "Dez de Copas",
    cardCode: "10H",
    relations: { before: ["9H"], after: ["JH"] },
  },
  {
    cardLabel: "Valete de Copas",
    cardCode: "JH",
    relations: { before: ["10H"], after: ["QH"] },
  },
  {
    cardLabel: "Dama de Copas",
    cardCode: "QH",
    relations: { before: ["JH"], after: ["KH"] },
  },
  {
    cardLabel: "Rei de Copas",
    cardCode: "KH",
    relations: { before: ["QH"], after: ["AH"] },
  },

  {
    cardLabel: "As de Espadas",
    cardCode: "AS",
    relations: { before: ["KS"], after: ["2S"] },
  },
  {
    cardLabel: "Dois de Espadas",
    cardCode: "2S",
    relations: { before: ["all"], after: ["all"] },
  },
  {
    cardLabel: "Tres de Espadas",
    cardCode: "3S",
    relations: { before: ["2S"], after: ["4S"] },
  },
  {
    cardLabel: "Quatro de Espadas",
    cardCode: "4S",
    relations: { before: ["3S"], after: ["5S"] },
  },
  {
    cardLabel: "Cinco de Espadas",
    cardCode: "5S",
    relations: { before: ["4S"], after: ["6S"] },
  },
  {
    cardLabel: "Seis de Espadas",
    cardCode: "6S",
    relations: { before: ["5S"], after: ["7S"] },
  },
  {
    cardLabel: "Sete de Espadas",
    cardCode: "7S",
    relations: { before: ["6S"], after: ["8S"] },
  },
  {
    cardLabel: "Oito de Espadas",
    cardCode: "8S",
    relations: { before: ["7S"], after: ["9S"] },
  },
  {
    cardLabel: "Nove de Espadas",
    cardCode: "9S",
    relations: { before: ["8S"], after: ["10S"] },
  },
  {
    cardLabel: "Dez de Espadas",
    cardCode: "10S",
    relations: { before: ["9S"], after: ["JS"] },
  },
  {
    cardLabel: "Valete de Espadas",
    cardCode: "JS",
    relations: { before: ["10S"], after: ["QS"] },
  },
  {
    cardLabel: "Dama de Espadas",
    cardCode: "QS",
    relations: { before: ["JS"], after: ["KS"] },
  },
  {
    cardLabel: "Rei de Espadas",
    cardCode: "KS",
    relations: { before: ["QS"], after: ["AS"] },
  },

  {
    cardLabel: "As de Ouros",
    cardCode: "AD",
    relations: { before: ["KD"], after: ["2D"] },
  },
  {
    cardLabel: "Dois de Ouros",
    cardCode: "2D",
    relations: { before: ["all"], after: ["all"] },
  },
  {
    cardLabel: "Tres de Ouros",
    cardCode: "3D",
    relations: { before: ["2D"], after: ["4D"] },
  },
  {
    cardLabel: "Quatro de Ouros",
    cardCode: "4D",
    relations: { before: ["3D"], after: ["5D"] },
  },
  {
    cardLabel: "Cinco de Ouros",
    cardCode: "5D",
    relations: { before: ["4D"], after: ["6D"] },
  },
  {
    cardLabel: "Seis de Ouros",
    cardCode: "6D",
    relations: { before: ["5D"], after: ["7D"] },
  },
  {
    cardLabel: "Sete de Ouros",
    cardCode: "7D",
    relations: { before: ["6D"], after: ["8D"] },
  },
  {
    cardLabel: "Oito de Ouros",
    cardCode: "8D",
    relations: { before: ["7D"], after: ["9D"] },
  },
  {
    cardLabel: "Nove de Ouros",
    cardCode: "9D",
    relations: { before: ["8D"], after: ["10D"] },
  },
  {
    cardLabel: "Dez de Ouros",
    cardCode: "10D",
    relations: { before: ["9D"], after: ["JD"] },
  },
  {
    cardLabel: "Valete de Ouros",
    cardCode: "JD",
    relations: { before: ["10D"], after: ["QD"] },
  },
  {
    cardLabel: "Dama de Ouros",
    cardCode: "QD",
    relations: { before: ["JD"], after: ["KD"] },
  },
  {
    cardLabel: "Rei de Ouros",
    cardCode: "KD",
    relations: { before: ["QD"], after: ["AD"] },
  },
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
