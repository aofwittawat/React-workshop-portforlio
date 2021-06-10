import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Education from './Education';
import Me from './Me'
import Projects from './Projects';
import Work from './Work';

const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Me user={user}/>
                </Route>
                <Route path="/projects">
                    <Projects user={user}/>
                </Route>
                <Route path="/work">
                    <Work user={user}/>
                </Route>
                <Route path="/education">
                    <Education user={user}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Pages
