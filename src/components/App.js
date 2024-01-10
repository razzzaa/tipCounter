import { useState } from "react";
import "./App.css";
import Selects from "./Selects";
import SideBar from "./SideBar";
function App() {
  const [mainColor, setMainColor] = useState("");
  return (
    <div style={{ backgroundColor: mainColor }} className="App">
      <Selects />
      <SideBar setMainColor={setMainColor} />
    </div>
  );
}

export default App;
