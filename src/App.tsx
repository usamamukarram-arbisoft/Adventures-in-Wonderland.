import "./App.css";

import { useLocation } from "react-router-dom";

import TopNavbar from "./Components/Navbar/TopNavbar";
import Routing from "./Components/RountingComponent/Routing";

function App() {
  const location = useLocation().pathname;

  return (
    <div>
      {location !== "/login" && <TopNavbar />}
      <Routing />
    </div>
  );
}

export default App;
