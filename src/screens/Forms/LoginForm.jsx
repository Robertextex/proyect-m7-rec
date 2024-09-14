import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { useState } from "react";
import ModalInfo from "../../components/ModalInfo";

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);

  const form = useSelector((state) => state.form);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
    if (values.password === form.password) {
      dispatch(saveFormData(values));
      setModalMessage("Ingresaste correctamente");
    } else {
      setModalMessage("Password incorrecto");
    }
  };

  return (
    <div className="container">
      <ModalInfo
        visible={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
      <ModalInfo
        visible={isModalLogoutOpen}
        message={modalMessage}
        onClose={() => setIsModalLogoutOpen(false)}
      >
        <button
          onClick={() => {
            dispatch(saveFormData({ username: "", email: "" }));
            setIsModalLogoutOpen(false);
            resetForm();
          }}
        >
          Presionar para salir
        </button>
      </ModalInfo>
      <form onSubmit={handleSubmit}>
        <h5>username: {form.formData.username}</h5>
        <h5>email: {form.formData.email}</h5>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              setModalMessage("¿Estas seguro de que quieres cerrar sesion?");
              setIsModalLogoutOpen(true);
            }}
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
