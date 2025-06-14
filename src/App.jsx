import About from "./components/about";
import Clients from "./components/Clients";
import Connect from "./components/Connect";
import Home from "./components/home";
import Navbar from "./components/navbar";
import PortfolioGrid from "./components/portfolio";
import Reel from "./components/reel";
import WhatIDo from "./components/whatIDo";
import "./main.css";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <WhatIDo />
      <Clients />
      <Reel />
      <PortfolioGrid />
      <Connect />
    </main>
  );
}

export default App;
