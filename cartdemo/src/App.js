import './App.css';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import ProductsPage from './Pages/ProductsPage';
import Navigation from './Components/Navigation';
import Products from './Pages/Products';

function App() {
  return (
   <>
     <Router>
      <Navigation></Navigation>
    <Switch>
    <Route path="/" component={Home} exact></Route>
    <Route path="/Cart" component={Cart} ></Route>
    {/* <Route path="/ProductsPage" exact component={ProductsPage} ></Route> */}
    <Route path="/Products" exact component={Products} ></Route>


    </Switch>
 
   </Router>
   </>
  );
}

export default App;
