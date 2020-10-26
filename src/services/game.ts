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
  cardSortNumber: number;
  relations: { before: string; after: string };
}

const cardsList: ICard[] = [
  {
    cardLabel: "As de Paus",
    cardCode: "AC",
    cardSortNumber: 1,
    relations: { before: "KC", after: "2C" },
  },
  {
    cardLabel: "Dois de Paus",
    cardCode: "2C",
    cardSortNumber: 2,
    relations: { before: "all", after: "all" },
  },
  {
    cardLabel: "Tres de Paus",
    cardCode: "3C",
    cardSortNumber: 3,
    relations: { before: "2C", after: "4C" },
  },
  {
    cardLabel: "Quatro de Paus",
    cardCode: "4C",
    cardSortNumber: 4,
    relations: { before: "3C", after: "5C" },
  },
  {
    cardLabel: "Cinco de Paus",
    cardCode: "5C",
    cardSortNumber: 5,
    relations: { before: "4C", after: "6C" },
  },
  {
    cardLabel: "Seis de Paus",
    cardCode: "6C",
    cardSortNumber: 6,
    relations: { before: "5C", after: "6C" },
  },
  {
    cardLabel: "Sete de Paus",
    cardCode: "7C",
    cardSortNumber: 7,
    relations: { before: "6C", after: "8C" },
  },
  {
    cardLabel: "Oito de Paus",
    cardCode: "8C",
    cardSortNumber: 8,
    relations: { before: "7C", after: "9C" },
  },
  {
    cardLabel: "Nove de Paus",
    cardCode: "9C",
    cardSortNumber: 9,
    relations: { before: "8C", after: "10C" },
  },
  {
    cardLabel: "Dez de Paus",
    cardCode: "10C",
    cardSortNumber: 10,
    relations: { before: "9C", after: "JC" },
  },
  {
    cardLabel: "Valete de Paus",
    cardCode: "JC",
    cardSortNumber: 11,
    relations: { before: "10C", after: "QC" },
  },
  {
    cardLabel: "Dama de Paus",
    cardCode: "QC",
    cardSortNumber: 12,
    relations: { before: "JC", after: "KC" },
  },
  {
    cardLabel: "Rei de Paus",
    cardCode: "KC",
    cardSortNumber: 13,
    relations: { before: "QC", after: "AC" },
  },

  {
    cardLabel: "As de Copas",
    cardCode: "AH",
    cardSortNumber: 1,
    relations: { before: "KH", after: "2H" },
  },
  {
    cardLabel: "Dois de Copas",
    cardCode: "2H",
    cardSortNumber: 2,
    relations: { before: "all", after: "all" },
  },
  {
    cardLabel: "Tres de Copas",
    cardCode: "3H",
    cardSortNumber: 3,
    relations: { before: "2H", after: "4H" },
  },
  {
    cardLabel: "Quatro de Copas",
    cardCode: "4H",
    cardSortNumber: 4,
    relations: { before: "3H", after: "5H" },
  },
  {
    cardLabel: "Cinco de Copas",
    cardCode: "5H",
    cardSortNumber: 5,
    relations: { before: "4H", after: "6H" },
  },
  {
    cardLabel: "Seis de Copas",
    cardCode: "6H",
    cardSortNumber: 6,
    relations: { before: "5H", after: "7H" },
  },
  {
    cardLabel: "Sete de Copas",
    cardCode: "7H",
    cardSortNumber: 7,
    relations: { before: "6H", after: "8H" },
  },
  {
    cardLabel: "Oito de Copas",
    cardCode: "8H",
    cardSortNumber: 8,
    relations: { before: "7H", after: "9H" },
  },
  {
    cardLabel: "Nove de Copas",
    cardCode: "9H",
    cardSortNumber: 9,
    relations: { before: "8H", after: "10H" },
  },
  {
    cardLabel: "Dez de Copas",
    cardCode: "10H",
    cardSortNumber: 10,
    relations: { before: "9H", after: "JH" },
  },
  {
    cardLabel: "Valete de Copas",
    cardCode: "JH",
    cardSortNumber: 11,
    relations: { before: "10H", after: "QH" },
  },
  {
    cardLabel: "Dama de Copas",
    cardCode: "QH",
    cardSortNumber: 12,
    relations: { before: "JH", after: "KH" },
  },
  {
    cardLabel: "Rei de Copas",
    cardCode: "KH",
    cardSortNumber: 13,
    relations: { before: "QH", after: "AH" },
  },

  {
    cardLabel: "As de Espadas",
    cardCode: "AS",
    cardSortNumber: 1,
    relations: { before: "KS", after: "2S" },
  },
  {
    cardLabel: "Dois de Espadas",
    cardCode: "2S",
    cardSortNumber: 2,
    relations: { before: "all", after: "all" },
  },
  {
    cardLabel: "Tres de Espadas",
    cardCode: "3S",
    cardSortNumber: 3,
    relations: { before: "2S", after: "4S" },
  },
  {
    cardLabel: "Quatro de Espadas",
    cardCode: "4S",
    cardSortNumber: 4,
    relations: { before: "3S", after: "5S" },
  },
  {
    cardLabel: "Cinco de Espadas",
    cardCode: "5S",
    cardSortNumber: 5,
    relations: { before: "4S", after: "6S" },
  },
  {
    cardLabel: "Seis de Espadas",
    cardCode: "6S",
    cardSortNumber: 6,
    relations: { before: "5S", after: "7S" },
  },
  {
    cardLabel: "Sete de Espadas",
    cardCode: "7S",
    cardSortNumber: 7,
    relations: { before: "6S", after: "8S" },
  },
  {
    cardLabel: "Oito de Espadas",
    cardCode: "8S",
    cardSortNumber: 8,
    relations: { before: "7S", after: "9S" },
  },
  {
    cardLabel: "Nove de Espadas",
    cardCode: "9S",
    cardSortNumber: 9,
    relations: { before: "8S", after: "10S" },
  },
  {
    cardLabel: "Dez de Espadas",
    cardCode: "10S",
    cardSortNumber: 10,
    relations: { before: "9S", after: "JS" },
  },
  {
    cardLabel: "Valete de Espadas",
    cardCode: "JS",
    cardSortNumber: 11,
    relations: { before: "10S", after: "QS" },
  },
  {
    cardLabel: "Dama de Espadas",
    cardCode: "QS",
    cardSortNumber: 12,
    relations: { before: "JS", after: "KS" },
  },
  {
    cardLabel: "Rei de Espadas",
    cardCode: "KS",
    cardSortNumber: 13,
    relations: { before: "QS", after: "AS" },
  },

  {
    cardLabel: "As de Ouros",
    cardCode: "AD",
    cardSortNumber: 1,
    relations: { before: "KD", after: "2D" },
  },
  {
    cardLabel: "Dois de Ouros",
    cardCode: "2D",
    cardSortNumber: 2,
    relations: { before: "all", after: "all" },
  },
  {
    cardLabel: "Tres de Ouros",
    cardCode: "3D",
    cardSortNumber: 3,
    relations: { before: "2D", after: "4D" },
  },
  {
    cardLabel: "Quatro de Ouros",
    cardCode: "4D",
    cardSortNumber: 4,
    relations: { before: "3D", after: "5D" },
  },
  {
    cardLabel: "Cinco de Ouros",
    cardCode: "5D",
    cardSortNumber: 5,
    relations: { before: "4D", after: "6D" },
  },
  {
    cardLabel: "Seis de Ouros",
    cardCode: "6D",
    cardSortNumber: 6,
    relations: { before: "5D", after: "7D" },
  },
  {
    cardLabel: "Sete de Ouros",
    cardCode: "7D",
    cardSortNumber: 7,
    relations: { before: "6D", after: "8D" },
  },
  {
    cardLabel: "Oito de Ouros",
    cardCode: "8D",
    cardSortNumber: 8,
    relations: { before: "7D", after: "9D" },
  },
  {
    cardLabel: "Nove de Ouros",
    cardCode: "9D",
    cardSortNumber: 9,
    relations: { before: "8D", after: "10D" },
  },
  {
    cardLabel: "Dez de Ouros",
    cardCode: "10D",
    cardSortNumber: 10,
    relations: { before: "9D", after: "JD" },
  },
  {
    cardLabel: "Valete de Ouros",
    cardCode: "JD",
    cardSortNumber: 11,
    relations: { before: "10D", after: "QD" },
  },
  {
    cardLabel: "Dama de Ouros",
    cardCode: "QD",
    cardSortNumber: 12,
    relations: { before: "JD", after: "KD" },
  },
  {
    cardLabel: "Rei de Ouros",
    cardCode: "KD",
    cardSortNumber: 13,
    relations: { before: "QD", after: "AD" },
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

export const validateGame = (game: Map<number, ICard>) => {
  const gameCards = [...game.values()];
  // games has to have at least 3 cards
  if (gameCards.length <= 2) return false;

  const jokers = gameCards.filter((card) => card.cardSortNumber === 2);
  const otherCards = gameCards.filter((card) => card.cardSortNumber !== 2);

  // if more than 2 Cards (2)
  if (jokers.length > 2) return false;

  const cardsSuit = otherCards.reduce((acc, card) => {
    acc.add(card.cardCode.substr(card.cardCode.length - 1));
    return acc;
  }, new Set<string>());

  // Validating card suit
  if (cardsSuit.size > 1) {
    return false;
  }

  let sortedCards = otherCards.sort(
    (a, b) => a.cardSortNumber - b.cardSortNumber
  );

  // placing the ace, if there is one
  if (
    sortedCards[0].cardSortNumber === 1 &&
    sortedCards[1].cardSortNumber !== 3
  ) {
    const [ace, ...restCards] = sortedCards;
    sortedCards = [...restCards, ace];
  }

  // placing the joker, if there is one
  if (jokers.length) {
    let joker = jokers[0];

    // Edge case, if 2 Cards (2), but one of them is the same suit
    if (
      jokers.length === 2 &&
      cardsSuit.has(joker.cardCode.substr(joker.cardCode.length - 1))
    ) {
      sortedCards = sortedCards.splice(1, 0, joker);
      joker = jokers[1];
    }

    // Get the index to place the joker
    let jokerIndex = 0;
    for (let i = 0; i < sortedCards.length - 1; i++) {
      if (
        sortedCards[i].relations.after !== sortedCards[i + 1].relations.before
      ) {
        jokerIndex = i + 1;
        break;
      }
    }

    // place the joker
    sortedCards = sortedCards.splice(jokerIndex, 0, joker);
  }

  let isValid = sortedCards.every((card, index) => {
    if (sortedCards.length === index + 1) {
      return true;
    }

    if (card.relations.after === sortedCards[index + 1].cardCode) {
      return true;
    }

    if (sortedCards[index + 1].relations.before === "all") {
      return true;
    }

    debugger;
  });

  return isValid;
};
