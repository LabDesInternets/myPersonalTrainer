import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/menu'
import Burger from './components/burger'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useOnClickOutside } from './hooks'
import Home from './components/pages/home'
import WhoAmI from './components/pages/whoAmI'
import Services from './components/pages/services'
import PricesAndOptions from './components/pages/pricesAndOptions'
import ContactMe from './components/pages/contactMe'
import Admin from './components/pages/admin'
import useSticky from './components/hooks/useSticky'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import PrivateRoute from './components/HOC/PrivateRoute'


function App() {


  const urlAdmin = process.env.REACT_APP_ADMIN

  const [open, setOpen] = useState(false)
  const { isSticky, element } = useSticky();
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div>

      <Router>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <Navbar sticky={isSticky} />
        </div>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} element={element} />} />
          <Route path="/about" render={props => <WhoAmI {...props} element={element} />} />
          <Route path="/services" component={Services} />
          <Route path="/prices" render={props => <PricesAndOptions {...props} element={element} />} />
          <Route path="/contact" component={ContactMe} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute path="/signup" component={SignUp} />
          <PrivateRoute path={`/${urlAdmin}`} component={Admin} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
