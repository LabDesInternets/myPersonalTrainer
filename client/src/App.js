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
import Ooops from './components/pages/Ooops'
import PrivateRoute from './components/HOC/PrivateRoute'
import ResetPw from './components/pages/resetPw'
import BlogPage from './components/pages/blogPage'
import ArticlePage from './components/pages/article'
import BookForm from './components/pages/bookForm'

const urlAdmin = process.env.REACT_APP_ADMIN


const App = () => {

  const [open, setOpen] = useState(false)
  const { isSticky, element } = useSticky();
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <Router>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Navbar sticky={isSticky} />
      </div>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} element={element} />} />
        <Route path="/about" render={props => <WhoAmI {...props} element={element} />} />
        <Route path="/services" render={props => <Services {...props} element={element} />} />
        <Route path="/prices" render={props => <PricesAndOptions {...props} element={element} />} />
        <Route path="/contact" render={props => <ContactMe {...props} element={element} />} />
        <Route path="/book" render={props => <BookForm {...props} element={element} />} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/signup" component={SignUp} />
        <PrivateRoute exact path={`/${urlAdmin}`} component={Admin} />
        <Route path="/ooopsie" component={Ooops} />
        <Route path="/reset/:id/:token" component={ResetPw} />
        <Route exact path="/blog" render={props => <BlogPage {...props} element={element} />} />
        <Route exact path="/:slug" render={props => <ArticlePage {...props} element={element} />} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
