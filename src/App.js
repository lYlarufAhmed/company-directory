import './App.css';
import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import CompanyDetail from "./components/CompanyDetail";


function App() {
    return (
        <div className="App">
            <Router>
                <nav className={'topNav'}><Link to={'/'}>Home</Link></nav>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/:companyId'} component={CompanyDetail}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
