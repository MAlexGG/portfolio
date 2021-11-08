import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Projects from "./projects";
import Tools from "./tools";
import Aboutme from "./aboutme";
import Pedagogical from "./pedagogical";
import Professional from "./professional";
import PedagogicalProjects from "./pedagogicalProjects";
import ProfessionalProjects from "./professionalProjects";
import Project from "./project";
import NotFound from "./notFound";


const Router = () => (
    <BrowserRouter basename="/portfolio/">
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/projects" component={Projects} />
            <Route path="/pedagogical" component={Pedagogical} />
            <Route path="/pedagogical-projects" component={PedagogicalProjects} />
            <Route path="/professional" component={Professional} />
            <Route path="/professional-projects" component={ProfessionalProjects} />
            <Route exact path="/project/:index" component={Project} />
            <Route path="/tools" component={Tools} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;