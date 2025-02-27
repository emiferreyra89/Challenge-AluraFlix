import styled from "styled-components";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useData } from "../../../context/DataContext";

const MainContainer = styled.main`
  height: 100%;
`;

const TitleCrearTarjeta = styled.p`
  border-top: 0.5px solid #999;
  border-bottom: 0.5px solid #999;
  padding: 10px 0px;
  margin: 30px 0px;
  font-size: 26px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

export default function FormVideo() {
  const {
    categorias,
    setVideos,
    formClean,
    checkFormErrors,
    validationBlur,
    changeValueInput,
    changeFileInput,
  } = useData();
  const [formValues, setFormValues] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });
  const [formErrors, setFormErrors] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  async function formSubmit(event) {
    event.preventDefault();
    const errors = checkFormErrors(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Error al procesar la solicitud, no se ha podido crear el nuevo registro.", {theme:"dark"})
      return;
    }

    const { imagen } = formValues;
    formValues.imagen = `/img/${imagen}`;

    try {
      const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el video.");
      }

      const apiVideos = await fetch("http://localhost:3000/videos");
      const allVideos = await apiVideos.json();
      setVideos(allVideos);
      formClean(setFormValues);
      toast.success("Se ha creado un nuevo video.. FELICITACIONES..!!!!", {theme:"colored"})
    } catch (error) {
      console.error(error.message);
      alert(
        "Error al procesar la solicitud, no se ha podido crear el nuevo registro."
      );
    }
  }

  return (
    <>
      <MainContainer>
        <Container
          sx={{
            maxWidth: "lg",
            margin: "50px auto",
            padding: 3,
            borderRadius: 2,
            color: "#fff",
          }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>
            NUEVO VIDEO
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", marginBottom: 2 }}>
            COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
          </Typography>
          <TitleCrearTarjeta>Crear Tarjeta</TitleCrearTarjeta>
          <ToastContainer 
            position="top-center"
            autoClose="3000"
            closeOnClick={true}
            style={{fontSize:"24px", textAlign:"center" }}
          />
          <Form>
            {/* Título */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Titulo</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el título"
                name="titulo"
                InputLabel="Titulo"
                value={formValues.titulo}
                onChange={(e) => {
                  changeValueInput(e, formValues, setFormValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formErrors, setFormErrors);
                }}
                error={Boolean(formErrors.titulo)}
                helperText={
                  formErrors.titulo
                    ? formErrors.titulo // Muestra el mensaje de error si existe
                    : formValues.titulo.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formErrors.titulo
                      ? "red" // Color rojo para mensajes de error
                      : formValues.titulo.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
            </Box>
            {/* Categoría */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Categoría</InputLabel>
              <FormControl
                fullWidth
                margin="normal"
                variant="outlined"
                error={Boolean(formErrors.categoria)}>
                <Select
                  name="categoria"
                  value={formValues.categoria}
                  onChange={(e) => {
                    changeValueInput(e, formValues, setFormValues);
                  }}
                  onBlur={(e) => {
                    validationBlur(e, formErrors, setFormErrors);
                  }}
                  displayEmpty
                  sx={{
                    width: "90%",
                    color: "#fff",
                    svg: { color: "#fff" },
                    fieldset: { borderColor: "#666", borderRadius: "10px" },
                  }}>
                  <MenuItem value="">
                    <em>Seleccione una categoría</em>
                  </MenuItem>
                  {categorias.map((cat, index) => (
                    <MenuItem key={index} value={cat.nombre}>
                      {cat.nombre}
                    </MenuItem>
                  ))}
                </Select>
                {formErrors.categoria ? (
                  <>
                    <Typography
                      sx={{
                        color: "red",
                        marginTop: "5px",
                        fontStyle: "italic",
                        fontSize: "12px",
                      }}>
                      {formErrors.categoria}
                    </Typography>
                  </>
                ) : formValues.categoria.trim() ? (
                  <>
                    <Typography
                      sx={{
                        color: "green",
                        marginTop: "5px",
                        fontStyle: "italic",
                        fontSize: "12px",
                      }}>
                      {"Correcto"}
                    </Typography>
                  </>
                ) : (
                  ""
                )}
              </FormControl>
            </Box>
            {/* Imagen */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Imagen</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese la imagen del video"
                name="imagen"
                value={formValues.imagen}
                onChange={(e) => {
                  changeValueInput(e, formValues, setFormValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formErrors, setFormErrors);
                }}
                error={formErrors.imagen}
                InputProps={{
                  readOnly: true,
                }}
                helperText={
                  formErrors.imagen
                    ? formErrors.imagen // Muestra el mensaje de error si existe
                    : formValues.imagen.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formErrors.imagen
                      ? "red" // Color rojo para mensajes de error
                      : formValues.imagen.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  changeFileInput(e, formValues, setFormValues);
                }}
                style={{ color: "#666", width: "90%" }}
              />
            </Box>
            {/* Video */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Video</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el enlace del video"
                name="video"
                value={formValues.video}
                onChange={(e) => {
                  changeValueInput(e, formValues, setFormValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formErrors, setFormErrors);
                }}
                error={formErrors.video}
                helperText={
                  formErrors.video
                    ? formErrors.video // Muestra el mensaje de error si existe
                    : formValues.video.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formErrors.video
                      ? "red" // Color rojo para mensajes de error
                      : formValues.video.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
            </Box>
            {/* Descripción */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Descripcion</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="¿De qué se trata este video?"
                name="descripcion"
                value={formValues.descripcion}
                onChange={(e) => {
                  changeValueInput(e, formValues, setFormValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formErrors, setFormErrors);
                }}
                error={formErrors.descripcion}
                multiline
                rows={4}
                helperText={
                  formErrors.descripcion
                    ? formErrors.descripcion // Muestra el mensaje de error si existe
                    : formValues.descripcion.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  textarea: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formErrors.descripcion
                      ? "red" // Color rojo para mensajes de error
                      : formValues.descripcion.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
            </Box>
            {/* Botones */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                marginTop: "30px",
                gap: 5,
                "@media (max-width: 767px)": {
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}>
              <Button
                type="submit"
                variant="outlined"
                onClick={formSubmit}
                sx={{
                  width: "180px",
                  padding: "8px",
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#2271d1",
                    border: "none",
                    backgroundColor: "#000",
                    boxShadow: "inset 0px 0px 10px 5px #2271d1",
                  },
                }}>
                GUARDAR
              </Button>
              <Button
                onClick={() => {
                  formClean(setFormValues);
                }}
                type="reset"
                variant="outlined"
                sx={{
                  width: "180px",
                  padding: "8px",
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#2271d1",
                    border: "none",
                    backgroundColor: "#000",
                    boxShadow: "inset 0px 0px 10px 5px #2271d1",
                  },
                }}>
                LIMPIAR
              </Button>
            </Box>
          </Form>
        </Container>
      </MainContainer>
    </>
  );
}
