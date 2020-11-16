import './App.css';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Study from './pages/Study';
import Error from './pages/Error';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Header/>
    
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about/" component={About}/>
    <Route exact path="/blogs/" component={Blogs}/>
    <Route exact path="/study/" component={Study}/>
    <Route component={Error}/>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
