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

const MainContainer = styled.main`
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

const ButonClose = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #00c8ff;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;

export default function CardEdit() {
  const categorias = ["Frontend", "Backend", "Innovacion y Gestion"]; // Opciones de ejemplo

  return (
    <>
      <MainContainer>
        <Container
          sx={{
            maxWidth: "lg",
            margin: "0 auto",
            padding: 3,
            borderRadius: 2,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "90%",
              marginTop: "10px",
              margin: "auto",
            }}>
            <ButonClose>
              <img src="/icon-close-form.png" alt="Icono Cerrar Formulario" />
            </ButonClose>
          </Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "60px",
              color: "#2271D1",
              width: "90%",
              margin: "auto",
            }}>
            EDITAR CARD:
          </Typography>
          <Form>
            {/* Título */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
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
                  width: "100%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: {
                    border: "3px solid #2271D1",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
            {/* Categoría */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Categoría</InputLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="categoria"
                  value={"Selecciona una categoria"}
                  onChange=""
                  sx={{
                    width: "100%",
                    color: "#fff",
                    svg: { color: "#fff" },
                    fieldset: {
                      border: "3px solid #2271D1",
                      borderRadius: "10px",
                    },
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
                width: "90%",
                marginTop: "10px",
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
                  width: "100%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: {
                    border: "3px solid #2271D1",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
            {/* Video */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
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
                  width: "100%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: {
                    border: "3px solid #2271D1",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
            {/* Descripción */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
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
                  width: "100%",
                  textarea: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: {
                    border: "3px solid #2271D1",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
            {/* Botones */}
            <Box
              sx={{
                width: "90%",
                display: "flex",
                marginTop: "10px",
                justifyContent: "space-between",
                "@media (max-width: 767px)": {
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                },
              }}>
              <Button
                type="submit"
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
                GUARDAR
              </Button>
              <Button
                onClick={() => {}}
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
