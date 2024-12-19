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
  FormControl,
} from "@mui/material";
import NavBar from "../components/header/navBar/Nav";

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

export default function FormNewVideo() {
  const categorias = ["Frontend", "Backend", "Innovacion y Gestion"]; // Opciones de ejemplo
  return (
    <>
      <NavBar />
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
                value=""
                onChange=""
                InputLabel="Titulo"
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
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
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="categoria"
                  value={"Selecciona una categoria"}
                  onChange=""
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
                    <MenuItem key={index} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
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
                placeholder="Ingrese el enlace de la imagen"
                name="imagen"
                value=""
                onChange=""
                error=""
                helperText=""
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                }}
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
                value=""
                onChange=""
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
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
                value=""
                onChange=""
                multiline
                rows={4}
                sx={{
                  width: "90%",
                  textarea: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
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
                  Button: {
                    width: "fit-content",
                  },
                },
              }}>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Un leve fondo al pasar el mouse
                  },
                  "&:active": {
                    backgroundColor: "#00c8ff", // Fondo celeste al hacer clic
                  },
                }}>
                GUARDAR
              </Button>
              <Button
                onClick={() => {}}
                type="reset"
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Un leve fondo al pasar el mouse
                  },
                  "&:active": {
                    backgroundColor: "#00c8ff", // Fondo celeste al hacer clic
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
