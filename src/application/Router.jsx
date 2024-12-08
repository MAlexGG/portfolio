import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Aboutme from "../pages/aboutme/Aboutme"
import Projects from "../pages/projects/Projects"
import Tools from "../pages/tools/Tools"
import Sustainability from "../pages/sustainability/Sustainability"
import Pedagogical from "../pages/pedagogical/Pedagogical"
import Project from "../pages/project/Project"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/aboutme" element={<Aboutme/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/pedagogical" element={<Pedagogical/>}/>
            <Route path="/project/:id" element={<Project/>}/>
            <Route path="/tools" element={<Tools/>}/>
            <Route path="/sustainability" element={<Sustainability/>}/>
  
            {/* <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/> */}
        </Routes>
    
    </BrowserRouter>
  )
}

export default Router