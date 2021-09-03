import { Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
