import React from "react";
import { Route } from "react-router-dom";
import Projects from './components/projects/Projects';
import ProjectView from './components/project-view/ProjectView';

const Routes = props => {
  return (
    <>
      <Route exact path="/" component={Projects} />
      <Route path="/project/:id" component={ProjectView} />
    </>
  );
}

export default Routes;
