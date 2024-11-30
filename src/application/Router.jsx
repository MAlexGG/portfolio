import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Aboutme from "../pages/aboutme/Aboutme"
import Projects from "../pages/projects/Projects"
import Tools from "../pages/tools/Tools"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/aboutme" element={<Aboutme/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/tools" element={<Tools/>}/>
            {/* <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/> */}
        </Routes>
    
    </BrowserRouter>
  )
}

export default Router