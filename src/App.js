import React, {useState} from 'react';
import {Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Lost404 from "./pages/Lost404"
import  Contact from "./pages/Contact";

import PrivateRouteWrapper from "./components/PrivateRouteWrapper.js"

import ListaCP from "./pages/ListaCP"
import Profile from "./pages/Profile";
import Login from "./pages/Login"
import FormCP from "./components/FormCP";


import "./styles/App.scss"

import AuthContext from "./context/AuthContext";


const privateRoutes = [
  {path: "/profile", name: "Home", Component: Profile },
  {path: "/corpodeprova", name: "Corpo de Prova", Component: ListaCP},
  {path: "/login", name: "Login", Component: Login},
  {path: "/adicionarcp", name: "Formulario", Component: FormCP}
]


const routes = [
  {path: "/", name: "Home", Component: Home },
  {path: "/about", name: "About", Component: About},
  {path: "/contact", name: "Contact", Component: Contact}
]

const App = () => {

  const [auth, setAuth] = useState(true);

  return (
    <AuthContext.Provider value={{auth, setAuth}} >
    <div>
      <Switch>
      {privateRoutes.map(({path, Component}) => (
        <PrivateRouteWrapper key={path} exact path={path} component={Component} />
      ))}
      {routes.map(({path, Component}) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Switch>
    </div>
    </AuthContext.Provider>
    )

}

export default App
