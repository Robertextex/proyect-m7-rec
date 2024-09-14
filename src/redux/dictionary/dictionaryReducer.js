import { SAVE_WORD, DELETE_WORD } from "./dictionaryTypes";

const initialState = {
  words: [],
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_WORD: {
      return { ...state, words: [...state.words, action.payload] };
    }

    case DELETE_WORD: {
      const newWords = state.words.filter((wordVariant) => {
        const wordVariantArray = Object.values(wordVariant);
        return !wordVariantArray.includes(action.payload);
      });

      if (newWords.length === state.words.length) {
        alert("No se encontro la palabra");
      } else {
        alert("Palabra eliminada con exito");
      }

      return { ...state, words: newWords };
    }

    default:
      return state;
  }
};

export default dictionaryReducer;
