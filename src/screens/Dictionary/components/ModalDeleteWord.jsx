import { useDispatch } from "react-redux";
import ModalInfo from "../../../components/ModalInfo";
import { deleteWordData } from "../../../redux/dictionary/dictionaryActions";
import useForm from "../../../hooks/useForm";

export const ModalDeleteWord = ({
  isModalDeleteOpen,
  setIsModalDeleteOpen,
}) => {
  const [values, handleChange, resetFormDelete] = useForm({
    wordToDelete: "",
  });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (values.wordToDelete === "") {
      alert("Escriba una palabra");
      return;
    }

    dispatch(deleteWordData(values.wordToDelete));
  };

  return (
    <ModalInfo
      visible={isModalDeleteOpen}
      onClose={() => {
        setIsModalDeleteOpen(false);
        resetFormDelete();
      }}
    >
      <form onSubmit={onSubmit}>
        <h1>Traductor USIP</h1>
        <h5>Que palabra desea eliminar del diccionario</h5>
        <h5>Puede escribir su palabra en ESPANHOL, INGLES O PORTUGUES</h5>
        <div>
          <label htmlFor="wordToDelete">Palabra</label>
          <input
            type="text"
            id="wordToDelete"
            name="wordToDelete"
            value={values.wordToDelete}
            onChange={handleChange}
            autoFocus
          />
        </div>

        <div className="button-container">
          <button className="buttonCustom" type="submit">
            Eliminar
          </button>
        </div>
      </form>
    </ModalInfo>
  );
};
