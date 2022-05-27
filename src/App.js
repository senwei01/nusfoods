import AppShell from "./components/AppShell";
import PageHome from "./pages/PageHome";
import PageLogIn from "./pages/PageLogIn";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <div>
      <AppShell />
      <body>{user ? <PageHome /> : <PageLogIn />}</body>
    </div>
  );
}

export default App;
