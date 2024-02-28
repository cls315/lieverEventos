import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_USER = "GET_USER";
export const POST_USER = "POST_USER";
export const POST_PRODUCT = "POST_PROCUCT";

export const getProducts = () => {
  return async function (dispatch) {
    try {
      const json = await axios(`http://localhost:3001/lievereventos/product`);
      dispatch({
        type: GET_PRODUCT,
        payload: json.data,
      });
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios(
        `http://localhost:3001/lievereventos/product?name=${name}`
      );
      dispatch({
        type: GET_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.error("Error al buscar producto", error);
    }
  };
};

export const getUser = () => {
  return async function (dispatch) {
    try {
      const json = await axios(`http://localhost:3001/lievereventos/user`);
      dispatch({
        type: GET_USER,
        payload: json.data,
      });
    } catch (error) {
      console.error(
        "No se encontraron ususarios:",
        error.message,
        error.response
      );
    }
  };
};

export const postProduct = () => {
  return async function (dispatch) {
    try {
      const json = await axios.post(
        `http://localhost:3001/lievereventos/product`
      );
      dispatch({
        type: POST_PRODUCT,
        payload: json.data,
      });
      console.log(json);
    } catch (error) {
      console.error(
        "Problemas para crear el producto:",
        error.message,
        error.response
      );
    }
  };
};

export const postUser = (data) => {
  return async function (dispatch) {
    try {
      const json = await axios.post(
        `http://localhost:3001/lievereventos/user`,
        data
      );
      dispatch({
        type: POST_USER,
        payload: json.data,
      });
      console.log(json);
    } catch (error) {
      console.error(
        "Problemas para crear el usuario:",
        error.message,
        error.response
      );
    }
  };
};
