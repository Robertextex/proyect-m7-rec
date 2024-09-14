import { SAVE_WORD, DELETE_WORD } from "./dictionaryTypes";

export const saveWordData = (wordData) => {
  return {
    type: SAVE_WORD,
    payload: wordData,
  };
};

export const deleteWordData = (wordData) => {
  return {
    type: DELETE_WORD,
    payload: wordData,
  };
};
