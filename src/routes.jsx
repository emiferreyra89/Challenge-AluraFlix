import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer/Footer.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import FormNewVideo from "./pages/FormNewVideo.jsx";
import Home from "./pages/Home.jsx";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { theme } from "./styles/theme.jsx";

export default function AppRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormNewVideo />} />
          </Routes>
        </DataProvider>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
