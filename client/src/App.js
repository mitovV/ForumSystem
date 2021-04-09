import { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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
import EditPost from './components/EditPost'
import DeletePost from './components/DeletePost'
import UserDetails from './components/UserDetails'
import DeleteProfile from './components/DeleteProfile'
import ErrorBoundary from './components/ErrorBoundary'
import IsAuth from './hoc/IsAuth'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <Header />
        <ErrorBoundary>
          <Switch>
            <Route path="/users/login" component={Login} />
            <Route path="/users/logout" render={props => {
              setUser(null)
              return <Redirect to="/" />
            }} />
            <Route path="/users/register" component={Register} />
            <Route path="/users/details" component={IsAuth(UserDetails)} />
            <Route path="/users/profile/:id/delete" component={IsAuth(DeleteProfile)} />
            <Route path="/categories/:id" component={Posts} />
            <Route path="/posts/create" component={IsAuth(CreatePost)} />
            <Route path="/posts/:id" exact component={Post} />
            <Route path="/posts/:id/edit" component={IsAuth(EditPost)} />
            <Route path="/posts/:id/delete" component={IsAuth(DeletePost)} />
            <Route path="/" exact component={Home} />
          </Switch>
        </ErrorBoundary>
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
