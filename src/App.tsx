import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:name" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
