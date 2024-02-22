import { Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import Layout from "./components/layout";
import NotFound from "./pages/not-found";
import ProductsCatalog from "./pages/products-catalog";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="wrapper-main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:type" element={<ProductsCatalog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
