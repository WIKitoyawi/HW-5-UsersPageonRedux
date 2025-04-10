import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
