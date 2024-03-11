import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AppRouter } from "./components/AppRouter";
import { AuthProvider } from "./store/AuthContext";

function App() {

  return (
    <AuthProvider>
      <HashRouter>
        <Navbar />
        <AppRouter />
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
