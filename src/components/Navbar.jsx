import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const form = useSelector((state) => state.form);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/default">Default</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/login">Login Form</Link>
        </li>
        <li>
          <Link to="/dictionary">Dictionary</Link>
        </li>
        <li style={{ marginLeft: "auto", color: "white" }}>
          Bienvenido: {form.formData.username} {form.formData.email}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
