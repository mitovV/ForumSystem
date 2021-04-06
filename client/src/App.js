import { useState } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import userContext from './contexts/userContext'

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Posts from './components/Posts'
import Post from './components/Post'
import CreatePost from './components/CreatePost'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
      <Header/>
      <Switch>
        <Route path="/users/login" component={Login}/>
        <Route path="/users/logout" render={props => {
          setUser(null)
          return <Redirect to="/"/>
        }}/>
        <Route path="/users/register" component={Register}/>
        <Route path="/categories/:id" component={Posts}/>
        <Route path="/posts/create" component={CreatePost}/>
        <Route path="/posts/:id" component={Post}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
      </userContext.Provider>
    </div>
  );
}

export default App;
