import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/layout/Home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import NavBar from './components/layout/NavBar';
import SpecificCategoryProductList from './components/specificCategory/SpecificCategoryProductList';
import store from './redux/store'
import { Provider } from 'react-redux'
import Cart from './components/layout/Cart'

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/'>
                <NavBar />
                <Home />
              </Route>
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/cart'>
                <NavBar />
                <Cart />
              </Route>
              <Route path="/category/:categoryName" render={props => 
                  <>
                    <NavBar />
                    <SpecificCategoryProductList categoryName={props.match.params.categoryName}/>
                  </>} 
              />
              <Redirect to='/' />
            </Switch>
          </div>
        </Router>
    </Provider>
  );
}

export default App;
