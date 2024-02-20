import { Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import Layout from "./components/layout";
import NotFound from "./pages/not-found";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="basket" element={<Basket />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
