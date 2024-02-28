import React, { useState } from "react";
import style from "./CreateAcount.module.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import axios from "axios";

const CreateAcount = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [userExists, setUserExists] = useState(false); // Estado para controlar si el usuario ya existe

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setUserExists(false); // Restablecer el estado de usuario existente al cambiar los valores
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      values.name === "" ||
      values.email === "" ||
      values.phone === "" ||
      values.password === ""
    ) {
      return alert("Faltan datos por completar");
    }

    const userData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };

    try {
      // Verificar si el usuario ya existe antes de intentar crearlo
      const response = await axios.get(
        `http://localhost:3001/lievereventos/user/${values.email}`
      );
      if (response.data.exists) {
        setUserExists(true); // Establecer el estado de usuario existente si el usuario ya existe
        return; // Salir de la función si el usuario ya existe
      }

      // Si el usuario no existe, proceder a crearlo
      await axios.post(`http://localhost:3001/lievereventos/user`, userData);
      console.log("Usuario creado correctamente");
      alert("Usuario creado correctamente");

      // Restablecer los valores del formulario después de crear el usuario
      setValues({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      console.error("Error al crear usuario:", error);
      alert("Hubo un problema al crear el usuario");
    }
  };

  return (
    <div className={style.container}>
      <SearchBar />
      <div className={style.form}>
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre y apellido</label>
          <input
            type="text"
            name="name"
            placeholder="ej.: Camila Sayavedra"
            value={values.name}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="ej.: tunombre@gmail.com"
            value={values.email}
            onChange={handleInputChange}
          />
          <label>Telefono (opcional)</label>
          <input
            type="tel"
            name="phone"
            placeholder="ej.: 1123445567"
            value={values.phone}
            onChange={handleInputChange}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
          {userExists && <p>Ya existe ese usuario</p>}{" "}
          {/* Mostrar mensaje de usuario existente */}
          <button type="submit">CREAR CUENTA</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAcount;
