import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AppRouter } from "./components/AppRouter";

function App() {

  return (
    <HashRouter>
      <Navbar />

      <AppRouter />
    </HashRouter>
  );
}

export default App;
