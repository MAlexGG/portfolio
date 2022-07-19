import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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


const Router = () => (
    <BrowserRouter basename="/portfolio/">
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
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;