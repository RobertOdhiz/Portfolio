import React from "react";
import ProjectsCards from "./Components/ProjectsCards";
import TopSection from "./Components/topsection";
import Feedback from "./Components/feedback";
import About from "./Components/about";


function App() {
  return (
    <div>
      <TopSection />
      <About />
      <ProjectsCards  />
      <Feedback />
    </div>
  );
}

export default App;
