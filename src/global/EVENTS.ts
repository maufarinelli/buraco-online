export const EVENTS = {
  // on()
  CARD_ADDED_TO_HAND: "card-added-to-hand",
  USER1_LOGGED: "user1-logged",
  USER2_LOGGED: "user2-logged",
  USERS_READY_TO_START: "users-ready-to-start",
  RESET_GAME: "reset-game",
  INIT_GAME: "init-game",
  USER_DISCARDED: "user-discarded",
  ADD_TO_DISCARDED: "add-to-discarded",
  CHANGE_USER: "change-user",
  USER_GOT_FROM_DISCARDED: "user-got-from-discarded",
  CHANGE_PHASE: "change-phase",
  ERROR_PUT_CARD_ON_TABLE: "error-put-card-on-table",
  ERROR_CANNOT_FINISH_GAME: "error-cannot-finish-game",
  OTHER_USER_TABLE_CHANGED: "other-user-table-changed",
  DECK_CHANGED: "deck-changed",
  GOT_MORTO: "got-morto",
  GAME_OVER: "game-over",

  // emit()
  CONNECTION: "connection",
  USER_LOGIN: "user-login",
  USER_LOGOUT: "user-logout",
  HANDLE_START_GAME: "handle-start-game",
  GET_CARD_FROM_DECK: "get-card-from-deck",
  DISCARD: "discard",
  GET_FROM_DISCARDED: "get-from-discarded",
  PASS_TURN: "pass-turn",
  CHANGE_CARDS_POSITION: "change-cards-position",
  ACTIVATE_TABLE: "activate-table",
  PUT_CARD_ON_TABLE: "put-card-on-table",
  END_PUT_CARD_ON_TABLE: "end-put-card-on-table",
};
