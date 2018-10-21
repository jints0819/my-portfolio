import React from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import ContactForm from './contact';
import AboutMe from './about';
import Home from './Home';
import Header from './header';
import WebFooter from './footer';
import NotFoundPage from './notfoundpage';

class AppRoute extends React.Component {
  render(){
    return(
    <BrowserRouter>
     <div>
     <Header />
      <Switch>
           <Route path="/" component={Home} exact={true} />
           <Route path="/contact" component={ContactForm} />
           <Route path="/about" component={AboutMe} />
           <Route component={NotFoundPage} />
      </Switch>
      <br />
      <WebFooter />
       </div>
       </BrowserRouter>
    );
  }
}


export default AppRoute;
