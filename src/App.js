import AppShell from "./components/AppShell";
import PageHome from "./pages/PageHome";
import PageLogIn from "./pages/PageLogIn";
import PageProfile from "./pages/PageProfile";
import { useAuth } from "./hooks/useAuth";
import { Route, Routes } from "react-router-dom";

function App() {
  const { user } = useAuth();

  return (
    <div>
      <AppShell />
      <Routes>
        <Route path="/" element={user ? <PageHome /> : <PageLogIn />} />
        <Route path="profile" element={<PageProfile />} />
      </Routes>
    </div>
  );
}

export default App;
