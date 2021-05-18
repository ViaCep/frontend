import React from 'react'
import { Switch, Route} from "react-router-dom";

//Pages
import Home from './pages/Home'
import About from './pages/About'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
        </Switch>
    );
}

export default Routes;