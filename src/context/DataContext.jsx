import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoCardEdit, setVideoCardEdit] = useState(false);

  useEffect(() => {
    async function conectionData() {
      const categoriasResponse = await fetch(
        "http://localhost:3000/categorias"
      );
      const dataCategorias = await categoriasResponse.json();

      const videosResponse = await fetch("http://localhost:3000/videos");
      const dataVideos = await videosResponse.json();

      setCategorias(dataCategorias);
      setVideos(dataVideos);
    }

    conectionData();
  }, []);

  function changeValueInput(event, objValues, setValues) {
    const { name, value } = event.target;
    setValues({ ...objValues, [name]: value });
  }

  function changeFileInput(event, objValues, setObjValues) {
    const file = event.target.files[0];
    if (file) {
      setObjValues({ ...objValues, imagen: file.name });
    }
  }

  async function deleteCards(id) {
    const userConfirmed = confirm("¿Deseas eliminar la tarjeta?");

    if (!userConfirmed) {
      return; 
    }

    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video.id !== id)
        );
      } else {
        throw new Error("Error al eliminar el video:",response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function formClean(setparams) {
    setparams({
      titulo: "",
      categoria: "",
      imagen: "",
      video: "",
      descripcion: "",
    });
  }

  function checkFormErrors(objFormValues) {
    const errors = {};

    if (!objFormValues.titulo.trim()) errors.titulo = "El título es obligatorio.";  
    if (!objFormValues.categoria.trim()) errors.categoria = "Seleccione una categoría.";
    if (!objFormValues.imagen.trim()) errors.imagen = "Debe proporcionar una imagen.";
    if (!objFormValues.video.trim()) errors.video = "Debe ingresar un enlace de video.";
    if (!objFormValues.descripcion.trim()) errors.descripcion = "La descripción no puede estar vacía.";
    
    return errors
  }

  function validationBlur(event, objErrors, setObjErrors) {
    const { name, value } = event.target;
    const errorMessages = { ...objErrors };

    // Validar el campo individual
    if (!value.trim()) {
      errorMessages[name] = `Debes completar el campo ${name}.`;
    } else {
      delete errorMessages[name]; // Elimina el error si el campo es válido
    }

    setObjErrors(errorMessages); // Actualiza los errores
  }

  return (
    <DataContext.Provider
      value={{
        categorias,
        videos,
        setVideos,
        videoCardEdit,
        setVideoCardEdit,
        deleteCards,
        formClean,
        checkFormErrors,
        validationBlur,
        changeValueInput,
        changeFileInput
      }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  return useContext(DataContext);
};
