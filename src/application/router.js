import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Projects from "../components/projects";
import Tools from "../components/tools";
import Aboutme from "../components/aboutme";
import Pedagogical from "../components/pedagogical";
import Professional from "../components/professional";
import PedagogicalProjects from "../components/pedagogicalProjects";
import ProfessionalProjects from "../components/professionalProjects";
import Project from "../components/project";
import NotFound from "../components/notFound";
import Sustainability from "../components/sustainability";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";



const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/pedagogical" component={Pedagogical} />
            <Route exact path="/pedagogical-projects" component={PedagogicalProjects} />
            <Route exact path="/professional" component={Professional} />
            <Route exact path="/professional-projects" component={ProfessionalProjects} />
            <Route exact path="/project/:index" component={Project} />
            <Route exact path="/tools" component={Tools} />
            <Route exact path="/sustainability" component={Sustainability}/>
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
);

export default Router;