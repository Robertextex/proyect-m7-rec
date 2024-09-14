import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setvalue] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setvalue({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setvalue(initialValues);
  };

  return [values, handleChange, resetForm];
};

export default useForm;
