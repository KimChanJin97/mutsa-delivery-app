import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import Page from "./pages/Page";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<Page />}>
        <Route index element={<UserPage />} />
      </Route>
      <Route path="/order" element={<Page />}>
        <Route index element={<OrderPage />} />
      </Route>
      <Route path="/board" element={<Page />}>
        <Route index element={<BoardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
