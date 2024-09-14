import { useSelector } from "react-redux";
import ModalInfo from "../../../components/ModalInfo";
import useForm from "../../../hooks/useForm";
import { useState } from "react";

export const ModalTranslateWord = ({
  isModalTranslateOpen,
  setIsModalTranslateOpen,
}) => {
  const languages = ["espanol", "english", "portugues"];

  const [values, handleChange, resetForm] = useForm({
    wordToTranslate: "",
    language: "espanol",
  });

  const [translation, setTranslation] = useState("");

  const dictionary = useSelector((state) => state.dictionary);

  const onSubmit = (event) => {
    event.preventDefault();

    if (values.wordToTranslate === "") {
      alert("Escriba una palabra");
      return;
    }

    if (values.language === "espanol") {
      const result = dictionary.words.find((wordItem) => {
        return Object.values(wordItem).includes(values.wordToTranslate);
      });

      setTranslation(result?.espanol ? result.espanol : "");

      if (!result) {
        alert("No se encontró la palabra");
      }
    }

    if (values.language === "english") {
      const result = dictionary.words.find((wordItem) => {
        return Object.values(wordItem).includes(values.wordToTranslate);
      });

      setTranslation(result?.english ? result.english : "");

      if (!result) {
        alert("No se encontro la palabra");
      }
    }

    if (values.language === "portugues") {
      const result = dictionary.words.find((wordItem) => {
        return Object.values(wordItem).includes(values.wordToTranslate);
      });

      setTranslation(result?.portugues ? result.portugues : "");

      if (!result) {
        alert("No se encontro la palabra");
      }
    }
  };

  return (
    <ModalInfo
      visible={isModalTranslateOpen}
      onClose={() => {
        setIsModalTranslateOpen(false);
        resetForm();
        setTranslation("");
      }}
    >
      <form onSubmit={onSubmit}>
        <h2>Traductor USIP</h2>
        <h5>Que palabra desea traducir en el diccionario</h5>
        <h5>Agregue su palabra y después el idioma de traducción</h5>
        <div>
          <label htmlFor="wordToTranslate">Palabra a traducir</label>
          <input
            type="text"
            id="wordToTranslate"
            name="wordToTranslate"
            value={values.wordToTranslate}
            onChange={handleChange}
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="language">Idioma de traducción</label>
          <select
            name="language"
            id="language"
            value={values.language}
            onChange={handleChange}
          >
            {languages.map((language) => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <textarea
            name="result"
            id="result"
            cols="30"
            rows="5"
            defaultValue={translation}
            disabled
          />
        </div>

        <div className="button-container">
          <button className="buttonCustom" type="submit">
            Traducir
          </button>
        </div>
      </form>
    </ModalInfo>
  );
};
