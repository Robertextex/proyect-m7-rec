import "./Dictionary.css";
import { useState } from "react";

import { ModalAddWord } from "./components/ModalAddWord";
import { ModalDeleteWord } from "./components/ModalDeleteWord";
import { ModalTranslateWord } from "./components/ModalTranslateWord";
import { useSelector } from "react-redux";

export const Dictionary = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalTranslateOpen, setIsModalTranslateOpen] = useState(false);

  const dictionary = useSelector((state) => state.dictionary);

  return (
    <div className="dictionary">
      <h1 className="title">Dictionary USIP</h1>
      <div className="content">
        <p>
          Este <span className="highlight">modulo(Diccionnario)</span>{" "}
          corresponde <span className="highlight">al recuperatorio del</span>{" "}
          <span className="highlight" style={{ color: "red" }}>
            modulo 7
          </span>{" "}
          ReactJS <span className="highlight">URL:</span>{" "}
          <a
            href="https://github.com/Robertextex/Proyecto-M7.git"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Robertextex/Proyecto-M7.git
          </a>
        </p>
        <div className="buttons">
          <button
            className="buttonCustom"
            onClick={() => {
              setIsModalAddOpen(true);
            }}
          >
            Agregar palabra
          </button>
          <button
            className="buttonCustom"
            onClick={() => {
              setIsModalDeleteOpen(true);
            }}
          >
            Eliminar palabra
          </button>
        </div>
        <div>
          <button
            className="buttonCustom"
            onClick={() => {
              setIsModalTranslateOpen(true);
            }}
          >
            Traducir
          </button>
        </div>
      </div>

      <div>
        <h2>PALABRAS AGREGADAS</h2>
        <table className="table">
          <thead>
            <tr className="tableHeadRow">
              <th className="tableHeadCell">Espanol</th>
              <th className="tableHeadCell">English</th>
              <th className="tableHeadCell">Portugues</th>
            </tr>
          </thead>
          <tbody>
            {dictionary.words.map((word, i) => (
              <tr key={i} className="tableBodyRow">
                <td className="tableBodyCell">{word.espanol}</td>
                <td className="tableBodyCell">{word.english}</td>
                <td className="tableBodyCell">{word.portugues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalAddWord
        isModalAddOpen={isModalAddOpen}
        setIsModalAddOpen={setIsModalAddOpen}
      />
      <ModalDeleteWord
        isModalDeleteOpen={isModalDeleteOpen}
        setIsModalDeleteOpen={setIsModalDeleteOpen}
      />
      <ModalTranslateWord
        isModalTranslateOpen={isModalTranslateOpen}
        setIsModalTranslateOpen={setIsModalTranslateOpen}
      />
    </div>
  );
};
