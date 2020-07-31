import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/menu'
import Burger from './components/burger'
import Footer from './components/footer'
import { useOnClickOutside } from './hooks'
import Home from './components/pages/home'
import WhoAmI from './components/pages/whoAmI'
import Services from './components/pages/services'
import PricesAndOptions from './components/pages/pricesAndOptions'
import ContactMe from './components/pages/contactMe'




function App() {

  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div>

      <Router>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={WhoAmI} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/prices" component={PricesAndOptions} />
          <Route exact path="/contact" component={ContactMe} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
