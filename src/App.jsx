import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Archives from "./pages/Archives";
import AppMain from "./AppMain";
import Team from "./pages/Team";
const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <Routes>
          <Route path="/" element={<AppMain/>} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <div style={{ display: "flex", bottom: "20px", justifyContent: "center", alignItems: "center", fontSize: "16px"}}>
          E-Cell, STME | Copyright © 2024. All rights reserved.
          <br /><br />
        </div>
    </div>

    

  );
};

export default App;
