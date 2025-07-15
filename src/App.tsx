import "./App.css";

import { useLocation } from "react-router-dom";

import TopNavbar from "./Components/Navbar/TopNavbar";
import Routing from "./Components/RountingComponent/Routing";
import { ROUTES } from "./Utility/CommonContant";

function App() {
  const location = useLocation().pathname;

  return (
    <div>
      {location !== ROUTES.login && location !== ROUTES.logout && <TopNavbar />}
      <Routing />
    </div>
  );
}

export default App;
