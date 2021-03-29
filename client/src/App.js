import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/users/login" component={Login}/>
        <Route path="/users/register" component={Register}/>
        <Route path="/categories/:id" component={Post}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
