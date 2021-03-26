import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/users/login" component={Login}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
