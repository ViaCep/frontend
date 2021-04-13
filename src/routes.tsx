import React from 'react'
import { Switch, Route} from "react-router-dom";

//Pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    );
}

export default Routes;