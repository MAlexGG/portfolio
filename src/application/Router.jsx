import { createHashRouter } from "react-router"
import App from "../App"
import Aboutme from "../pages/aboutme/Aboutme"
import Projects from "../pages/projects/Projects"
import Tools from "../pages/tools/Tools"
import Sustainability from "../pages/sustainability/Sustainability"
import Pedagogical from "../pages/pedagogical/Pedagogical"
import Project from "../pages/project/Project"
import Professional from "../pages/professional/Professional"

const router = createHashRouter([
  { path:"/", element:<App/> },
  { path:"/aboutme", element:<Aboutme/> }, 
  { path:"/projects", element:<Projects/> },
  { path:"/pedagogical", element:<Pedagogical/> },
  { path:"/professional-personal", element:<Professional/> },
  { path:"/project/:id", element:<Project/> },
  { path:"/tools", element:<Tools/> },
  { path:"/sustainability", element:<Sustainability/>}  
])
 
export default router