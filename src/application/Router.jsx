import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Aboutme from "../pages/aboutme/Aboutme"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="aboutme" element={<Aboutme/>}/>
            {/* <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
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